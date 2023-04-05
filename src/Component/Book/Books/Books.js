import React from 'react';
import { addToCard, DeleteTodb } from '../../fakedb/fakedb';

const Books = (props) => {

    const {name,_id,index} =props.data

    const addCard = (_id)=> {
        addToCard(_id)
    }

    const deleteToCart = (_id) =>{
        DeleteTodb(_id)
    }

    // const calltocard = () =>addCard(_id) onno ekta niyom 
    
    return (
        <div style={{border:'8px solid red', padding:'2rem',margin:'3rem',backgroundColor:'burlywood',borderRadius:'20px'}}>
            <h1>My book</h1>
            <h2>Name:{name}</h2>
            <h3>id:{_id}</h3>
            <h4>Index: {index}</h4>
            <button onClick={()=>addCard(_id)} style={{padding:'10px',borderRadius:'10px' ,backgroundColor:'green', marginRight:'10px'}}>Add to card</button>
            <button onClick={()=>deleteToCart(_id)} style={{padding:'10px',borderRadius:'10px' ,backgroundColor:'red'}}>Delete</button>
        </div>
    );
};

export default Books;