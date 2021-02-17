import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import Whether from "./Whether";
import Search from "./Search";
const Home = () =>{
    const[num,setnum] = useState();
    const[name,setname]= useState()
    const[move,setMove] = useState()
    useEffect(()=>{
        async function pokemon(){
            const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setname(res.data.name)
            setMove(res.data.moves.length)
        }
        pokemon()
    })
   const Eventinput = (event)=>{
setnum(event.target.value)
   }
    return(
        <>
        <Menu />
        <div  className='pokemon'>
        <h3>Pockemon number is {num}</h3>
        <h3>pokemon name is <span className='name'> {name}</span> </h3>
        <h3>Move is {move}</h3>
        <select value={num} onChange={Eventinput} className='select'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='25'>25</option>
            <option value='6'>6</option>
        </select>
        </div>
        
        
        

        </>
    )
}
export default Home;