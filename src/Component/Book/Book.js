import React, { useEffect, useState } from 'react';
import Books from './Books/Books';

const Book = () => {
    const[datas , setData]= useState([])

    useEffect(()=>{
            fetch('Data.json')
            .then(res => res.json())
            .then(Data => setData(Data) )
    },[])
    return (
        <div>
            {
                datas.map(data =><Books key ={data._id} data = {data}></Books>)
            }
         </div>
    );
};

export default Book;