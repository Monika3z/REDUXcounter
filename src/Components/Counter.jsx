import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementbyAmount } from './Redux/Counterslice'

function Counter() {
const dispatch = useDispatch()
const count = useSelector((state)=>state.Counterslice.count)
const [amount,setAmount]= useState(0)
const handleIncrement =()=>{ 
    if (amount>0){
      dispatch(incrementbyAmount(+amount))
      setAmount("")
    }else{
      alert("enter valid amount")
    }
  }
return(

<div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}} className='text-center  rounded bg-warning p-5 border '>

<h1 className='bg-warning' style={{fontSize:'100px'}}>{count}</h1>
<br/>
<br/>
<button onClick={()=>dispatch(increment())} className='btn btn-success me-3'>Increment</button>
<button onClick={()=>dispatch(decrement())} className='btn btn-primary me-3'>Decrement</button>
<button onClick={()=>dispatch(reset())} className='btn btn-danger me-3'>Reset</button>
<div className="d-flex bg-warning mt-3 align-items-center">
<input onChange={e => setAmount(e.target.value)}value={amount || ""}type="text"className="form-control my-4 me-2"placeholder="Enter the amount"/>
<button onClick={handleIncrement} className="btn btn-info btn-xs">Increment by Amount</button>
</div>
</div> 

)
}

export default Counter