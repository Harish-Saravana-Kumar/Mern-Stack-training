import { useSelector } from "react-redux";
import { resetArray } from "./slices/arraySlices";
import { useDispatch } from "react-redux";

export default function ResetArray() {
    const dispatch = useDispatch();
    
    const arr = useSelector((state) => state.arrayInfo.array);
    console.log ('The Array is:', arr);
    return (
        <>
        {arr.map((item,index) => {
            <div key={index}>
            <h1 >{item}</h1>
            </div>
        })}
        <br />
        <div>
            <button onClick={() => dispatch(resetArray())}>Reset Array</button>
        </div>
        </>
    )
}