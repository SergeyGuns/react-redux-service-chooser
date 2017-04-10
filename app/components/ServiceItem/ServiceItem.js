import React from 'react'

const DEFAULT = {
  "id": 1,
  "name": "Service Name",
  "discription": "Servise discription",
  "price": 150,
  "added": false
}

export default class ServiceItem extends React.Component {
  constructor({obj = DEFAULT , handlerClick , added}) {
    super()
    this.handlerClick = handlerClick
  }

  isEqual(a, b) {
    return JSON.stringify(a) == JSON.stringify(b)
  }

  render () {
    let {id, name, discription, price, added} = this.props.obj
    return (
      <div 
        data-id={id} 
        onClick={this.handlerClick.bind(this)} 
        style={{
          'backgroundColor': added ? '#dfd' : '#fff',
          'border': 'solid 1px'
          }}
        className='list'>
        <div className='name'>Name:{name}</div>
        <div className='discription'>Discription: {discription}</div>
        <div className='price'>Price: {price}</div>
        <div className='added'>Chosed: {''+added}</div>
      </div>
    )
  }
}