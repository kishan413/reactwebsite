import React, { useEffect, useState } from "react";
const Whether = () =>{
    const[names,setname]=useState(null)
    const[search,setsearch]=useState('amreli');

    
    useEffect(()=>{
        const Temperature = async () =>{
            const link = await  `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0709dcfb49669412f3ff11e260d26e06`;
            const res = await fetch(link)
            const response = await res.json()
            setname(response.main)
            
        
}
        Temperature()
    },[search])
     
    return(
       
        <>
        <div className='whether'>
            <input className='inputCity' type='text' placeholder='enter your cityname' onChange={(event)=>{
                setsearch(event.target.value)

            }}/>
            {!names ? (<p>Not found Data</p>) : (
                <div>
                <p>Your City Name is {search}</p>
                <h2>current Temperature is {names.temp} </h2>
            </div> 

            )}
            
        </div>
        </>
    )
}
export default Whether;