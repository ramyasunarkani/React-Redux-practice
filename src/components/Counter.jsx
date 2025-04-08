import React from 'react'
import styles from './Counter.module.css'
import { useDispatch, useSelector } from 'react-redux'
const Counter = () => {
    const counter=useSelector(state=>state.counter)
    const dispatch=useDispatch();
    const toggleCounterHandler=()=>{}
    const incrementHandler=()=>{
        dispatch({type:'increment'})

    }
    const decrementHandler=()=>{
        dispatch({type:'decrement'})

    }
  return (
    <main className={styles.counter}>
    <h1>Counter</h1>
    <div className={styles.value}>{counter}</div>
    <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
    </div>
    <button onClick={toggleCounterHandler}> toggle counter</button>

    </main>
  )
}

export default Counter