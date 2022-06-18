import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, decrementByAmount } from "../counter/counterSlice";
const Counter = () => {
    const [amount, setAmount] = useState(3);
    const countValue = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const handleDecrementByAmount = () => {
        dispatch(decrementByAmount(amount))
    }

    const handleIncrementByAmount = ()=>{
        dispatch(incrementByAmount(amount))
    }
    return (
        <div>
            <h1>{countValue}</h1>
            <button type="button" className="btn" onClick={() => dispatch(decrement())}>Decrement</button>
            <button type="button" className="btn" onClick={() => dispatch(increment())}>Increment</button>
            <br></br>
            <br></br>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button type="button" onClick={handleIncrementByAmount} >Increment by Amount</button>
            <br></br>
            <br></br>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button type="button" onClick={handleDecrementByAmount} >Decrement by Amount</button>
        </div>
    )
}

export default Counter;