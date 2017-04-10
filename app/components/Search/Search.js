import React from 'react'

let defaultList = [
  {name:'1'},
  {name:'2'},
  {name:'3'},
  {name:'4'},
  {name:'45'},
  {name:'5'},
  {name:'55'},
  {name:'6'},
  {name:'456'},
  {name:'77'},
  {name:'777'},
  {name:'7'},
  {name:'478'}
]

export default class Search extends React.Component {
  constructor({list = defaultList}) {
    super()

    this.state = {
      referenceList: [...list],
      list: [...list]}
  }

  handleInputChange(e) {
    this.setState({
      list : this.filter(this.state.referenceList, e.target.value)
    })
  }

  filter(arr , wantedStr) {
    return arr.filter(el=> {
      if(el.name.indexOf(wantedStr)!= -1)
        return true;
      else
        return false;
    })
  }


  render() {

    let {list} = this.state

    return(
      <div className='search'>

        <input 
          type='text'
          onChange={this.handleInputChange.bind(this)} 
        />

        {
          list.map((elem)=><p key={elem.name}>{elem.name}</p>)
        }

      </div>

    )
  }

}