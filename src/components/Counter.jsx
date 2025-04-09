import React from 'react'
import styles from './Counter.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/counter'
const Counter = () => {

    const counter=useSelector(state=>state.counter.counter)
    const show=useSelector(state=>state.counter.showCounter)
    const dispatch=useDispatch();
    const toggleCounterHandler=()=>{
        dispatch(counterActions.toggle());
    }
    const incrementHandler=()=>{
        dispatch(counterActions.increment())

    }
    const decrementHandler=()=>{
        dispatch(counterActions.decrement())

    }
    const increaseHandler=()=>{
        dispatch(counterActions.increase(10))
    }
  return (

    <main className={styles.counter}>
    <h1>Counter</h1>
      {show&& <div className={styles.value}>{counter}</div>}
    <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increment2</button>

        <button onClick={decrementHandler}>decrement</button>
    </div>
    <button onClick={toggleCounterHandler}> toggle counter</button>

    </main>
  )
}

export default Counter