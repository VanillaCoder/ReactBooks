import React from 'react'


export default function card(props) {

  return (
    <div className="card" >
      <img src={props.image} className="card-img-top .mx-auto" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.body}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      )
}