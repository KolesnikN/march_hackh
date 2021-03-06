import React, { Component } from 'react'

import Grid from 'mauerwerk'
import data from './data'
import styled from 'styled-components'

const Card = styled.div`
  width: 100%;
  height: 100%;
  color: #777777;
  text-transform: uppercase;
  font-size: 10px;
  background-image: ${(props) => (props.b_image ? props.b_image : 'black')}; ;
`

const CardDetails = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #ffffffa0;
  color: white;
  padding: 40px;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const CardBox = styled.div`
  position: absolute;
  top: calc(50% - 140px);
  left: calc(50% - 140px);
  width: 280px;
  height: 280px;
  box-shadow: 0px 20px 60px -10px rgba(0, 0, 0, 0.2);
`

const CardName = styled.h1`
  position: absolute;
  top: calc(50% - 140px);
  left: calc(50% - 140px);
  color: #ca6a9a;
  font-size: 36px;
  line-height: 36px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  max-width: 250px;
  box-shadow: 0px 20px 60px -10px rgba(0, 0, 0, 0.2);
`

const CardDescription = styled.p`
  color: thistle;
  font-size: 26px;
  line-height: 26px;
  margin: 0;
  padding-top: 15px;
`

const InCardInfo = styled.div`
  color: thistle;
  font-size: 26px;
  line-height: 26px;
  margin: 0;
  padding-top: 15px;
`

const OpenedCard = () => {
  return (
    <Grid className="grid" data={data} keys={(d) => d.name} heights={(d) => d.height} columns={4}>
      {(data, maximized, toggle) => (
        <Card b_image={data.css} onClick={toggle}>
          {maximized && (
            <CardDetails>
              <CardBox style={{ background: data.css }} />
              <CardName>{data.name}</CardName>
              <CardDescription>{data.description}</CardDescription>
            </CardDetails>
          )}
          {!maximized && <InCardInfo>{data.name}</InCardInfo>}
        </Card>
      )}
    </Grid>
  )
}

// could add https://codesandbox.io/s/framer-motion-2-shared-drag-gesture-5trtt?file=/src/App.js

export default OpenedCard
