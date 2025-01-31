// import {useState} from "react"

// export default function De()
// {
//     function formSubmit(formdata)
//     {    formdata.preventDefault()
//         console.log('success............')
//     }
//     const[name,setName]=useState("")
//     const[roll,setRoll]=useState("")
//     const[city,setAdd]=useState("")
//     const[gender,setGender]=useState("")
//     const[phone,setPhone]=useState("")
//     return(
//         <>
//         <form>
//             <h2>
//         Name: <input type="text" onChange={(data)=>{setName(data.target.value)}}></input> <br/>
//         Roll no : <input type="text" onChange={(data)=>{setRoll(data.target.value)}}></input> <br/>
//         City : <input type="text" onChange={(data)=>{setAdd(data.target.value)}}></input> <br/>
//         gender : <input type="text" onChange={(data)=>{setGender(data.target.value)}}></input> <br/>
//         Phone: <input type="text" onChange={(data)=>{setPhone(data.target.value)}}></input> <br/>
//         <button onClick={formSubmit}>signup</button> </h2>
//         </form>
//         <h1>the name is: {name}</h1>
//         <h1>the roll no is : {roll}</h1>
//         <h1>the city is : {city}</h1>
//         <h1>the gnder is : {gender}</h1>
//         <h1>the Phone is : {phone}</h1>
//         </>
//     )
 
// }



const { useState } = require("react")
export default function De()
{
    function formSubmit(formdata)
    {    
        formdata.preventDefault()
        console.log('success............,',input.name,input.roll,input.city)
    }
    const [input,setInput]=useState(
        {
            roll:'',
            name:'',
            city:''
        }
    )
    return(
        <>
        <form onSubmit={formSubmit}>
        Name: <input type="text" onChange={(data)=>{setInput({...input,name:data.target.value})}}></input><br/>
        Roll: <input type="text" onChange={(data)=>{setInput({...input,roll:data.target.value})}}></input><br/>
        City: <input type="text" onChange={(data)=>{setInput({...input,city:data.target.value})}}></input><br/>
        <input type="submit" value="signup"></input>
        </form>
        
        </>
    )
}

// two functions types

// onChange={(data)=>{setInput((preData)=>{return{...preData,name:data.target.value}})}}></input></br>
// Name : <input type = "text"
//   onChange={(data)=>{setInput({...input,name:data.target.value})}}> </input> </br>