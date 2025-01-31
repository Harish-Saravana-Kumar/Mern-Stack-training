import Display from './Display'
import { useState } from 'react'

function Datas()
{   
    let name = "Gowtham"
    let rollno = 21
    let person = {gender : 'male' , place : 'CBE' , Qualification : "Designer"}
    let[arr,setarr] = useState([1,2,3]) 
    return (
        <>
        <h3>hi bro {name}</h3>
        <Display n={name} roll = {rollno} obj = {person} />
        <br/>
        <h2>{arr.join(',')}</h2>
        <button onClick={()=>
            {
                setarr(arr.map(num=>num+10))
            }
        }> click me </button>
        </>
        
    )
    


}

export default Datas