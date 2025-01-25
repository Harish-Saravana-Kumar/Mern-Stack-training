import { useSelector } from "react-redux"

export default function Fruits()
{
    const fruits = useSelector((state) => state.fruitInfo.efruits)
    console.log('the fruit name is ', fruits)
    return(
        <> 
           {
            fruits.map((f,index)=>{
                
                return(
                    <div key={index}>
                    <h1>the fruit name is {f} </h1>
                    </div>
                )
            })
           }
            
        </>
    )
}