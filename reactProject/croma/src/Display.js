import OIP from './OIP.jpeg'
import { useState } from 'react'

function Display(values)
{
    const {n,roll,obj} = values
    const {gender,place,Qualification} = obj
    var[q,setq] = useState("Designer")

    return(
        <>
    <h3> this is from display </h3>
    <h2> name : {n} </h2>
    <h2> rollno : {roll} </h2>
    <h2> gender : {gender}</h2>
    <h2> Place : {place}</h2>
    <h2> Qualification : {q} </h2> <br/>
    <button onClick = {()=>{ setq(q="VIP")}}> click here </button> <br/> <br/>
    <img src = {OIP} alt = "VIP" />
    <br/> <br/>
    </>
)
    
}

export default Display