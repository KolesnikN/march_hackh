import './styles.css'

import React, { Component } from 'react'

import Grid from 'mauerwerk'
import data from './data'

const OpenedCard = () => {
  return (
    <Grid className="grid" data={data} keys={(d) => d.name} heights={(d) => d.height} columns={4}>
      {(data, maximized, toggle) => (
        <div className="cell" style={{ backgroundImage: data.css }} onClick={toggle}>
          {maximized && (
            <div className="details">
              <div className="circle" style={{ background: data.css }} />
              <h1>{data.name}</h1>
              <p>{data.description}</p>
            </div>
          )}
          {!maximized && <div className="default">{data.name}</div>}
        </div>
      )}
    </Grid>
  )
}

export default OpenedCard
