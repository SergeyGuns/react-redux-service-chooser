// Action types
export const HANDLE_CLICK = 'HANDLE_CLICK'

import {list} from '../components/ServiceChooser/data.json'

const initState = {
  list : list
}

export function reducer(state = initState, action) {
  // For now, don't handle any actions
  if(action.type === HANDLE_CLICK) {
    console.log(state, action)
    let newState = {...state , list:  state.list.map((el)=> {
      return {...el, added : el.id == action.payload ? !el.added : el.added}
    })}
    return newState
  }
  // and just return the state given to us.
  return state
}

// Action creators
export function handleClick(payload) {
  return {
    type: HANDLE_CLICK,
    payload
  }
}
