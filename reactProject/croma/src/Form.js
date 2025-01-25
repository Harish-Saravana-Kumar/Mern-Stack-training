import { useDispatch } from "react-redux";
import { setUsers } from "./slices/userSlices";
import { useState } from "react";

export default function Form(){
const dispatch = useDispatch()

    function formSubmit(formdata){
        formdata.preventDefault()
        console.log('success....',input.name,input.rollno,input.batch)
    }
    function updateData(d)
    {
        const {name,value} = d.target;
        setInput((prevData)=>
        ({
            ...prevData,
            [name] : value
        }))

    }
    const [input,setInput] = useState
    (
        {
            name : '',
            rollno : '',
            batch : ''
        }
    )
    // function addUser(formdata){
    //     formdata.preventDefault()
    //     dispatch(setUsers(input))
    // }
    const addUser=(formdata)=>{
        formdata.preventDefault()
        dispatch(setUsers(input))
    }
    return(
        <>
        <form onSubmit={formSubmit}>
        Name: <input type="text" name = "name" onChange={updateData}></input><br/>
        Rollno: <input type="text" name = "rollno" onChange={updateData}></input><br/>
        Batch: <input type="text" name = "batch" onChange={updateData}></input><br/>
        <button onClick={formSubmit}>signup</button>
        <button onClick={addUser}>addUser</button>
        </form>
        <h1>the name is: {input.name}</h1>
        <h1>the rollno is: {input.rollno}</h1>
        <h1>the batch is: {input.batch}</h1>
   </>
 )

}