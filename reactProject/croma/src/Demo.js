import {useState,useEffect,useReducer} from "react"

export default function Demo()
{
    // const [c1,setC1] = useState(0)
    // const [c2,setC2] = useState(0)

    // useEffect(()=>{
    //     if(c1 === 10 )
    //         {
    //             setC1(0);
    //         }
    //     if(c2 === 10)
    //     {
    //         setC2(0);
    //     }
    //         console.log("rendering.....")
    //     },[c1,c2])
    // return(
    //     <>
    //     <h1>Counter1 : {c1}</h1>
    //     <button onClick = {()=>{setC1(c1 + 1)}}>counter1</button>
    //     <h1>Counter2 : {c2} </h1>
    //     <button onClick = {()=>{setC2(c2 + 1)}}>counter2</button>
    //     </>
    // )

    const transcationReducer=(balance,action)=>{
            switch(action.type)
            {
                case 'WITHDRAW': 
                    return balance - action.payload
                case 'DEPOSIT': 
                    return balance + action.payload
                     
            }
    }
    const withdraw=(amount)=>{
        dispatch({type:'WITHDRAW',payload:amount})
    }
    const deposit=(amount)=>{
        dispatch({type:'DEPOSIT',payload:amount})
    }
     const[balance,dispatch]= useReducer(transcationReducer,1000)
    return(
        <>
        <h1>the balance val is {balance}</h1>         
        <button onClick={()=>{withdraw(500)}}>Withdraw</button>
        <button onClick={()=>{deposit(1000)}}>Deposit</button>
        </>
    )
}
