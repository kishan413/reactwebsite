import react, { useState } from 'react';
import Card from '@material-ui/core/Card';
const Search = ( )=>{
    
    const[imges,setImages]=useState('');
    const link = `https://source.unsplash.com/400x300/?${imges}`;
    const inputEvent = (event)=>{
        setImages(event.target.value)
    }
    return(
        <>
        <div id='images'>
        <input className='search' type='text' placeholder='search' onChange={inputEvent} value={imges}/>
        <br />
        
        <img src={link} alt='not found' />
        </div>
        </>
    )
}
export default Search;