import React from 'react'
import ServiceItem from '../ServiceItem'
import data from './data.json'
import { connect } from 'react-redux'
import { reducer, handleClick } from '../../actions/actions.js'

class ServiceChooser extends React.Component {
  constructor({list}) {
    super()
    this.state = {
      list : list,
      count: 0
    }
  }


 

  counterRefresh(list) {
    let count = 0
    for(let i = list.length;i--;) {

      if(list[i].added)
        count+=list[i].price;
    }
    return count;
  }

  render() {

    console.log(this.state.list)

    return (
      <div className='service-wrapper'>
        {
          this.props.list.map((item)=>{
            return <ServiceItem key={item.id} obj={item}  handlerClick={this.props.handleItemClick} />
          })
        }
        <div className='counter'> Count: {this.counterRefresh(this.props.list)}</div>
      </div>
    )
  }

} 

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleItemClick: (e) => {
      console.log(e.currentTarget.dataset.id)
      dispatch(handleClick(e.currentTarget.dataset.id))
    }
  }
}

export default ServiceChooser = connect(mapStateToProps,mapDispatchToProps)(ServiceChooser)