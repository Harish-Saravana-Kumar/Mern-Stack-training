import { useState } from "react"
import { useDispatch } from "react-redux";
import {setFruit} from './slices/fruitSlices'

export default function FruitForm()
{
    const dispatch = useDispatch()
    const [fruitname,settFruit] = useState("")
    function updateFruit(f)
    {
        settFruit(f.target.value);
    }

    const addFruit = (fname)=>
    {
        fname.preventDefault();
        dispatch(setFruit(fruitname))
    }

    return(
        <>
        Enter Fruit Name: <input type="text" class="form-control" name = "fruitName" onChange={updateFruit}></input><br/>
        <button type="button" onClick={addFruit} class="btn btn-primary">addFruit</button>
        </>
    )
}