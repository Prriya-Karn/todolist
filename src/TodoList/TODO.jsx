import React, { useState } from "react";
import './TOdo.css';
const TODO = ()=>{
    const [item,setItem] = useState();
    const [addItem,setAddItem] = useState([]);
    const funexpr = (event)=>{
        setItem(event.target.value)
    }
    const add = ()=>{
        setAddItem((pre)=>[...pre,item])
        console.log(addItem)
    } 
    


const del = (element)=>{
    const res = addItem.filter((e)=>{
        return e!=element;
    })

    setAddItem(res);

}
    
    const clear = ()=>{
        setAddItem([])
    }
    return(
        <>   
        <input type="text" placeholder="enter the item" onChange={funexpr}/>
        <button onClick={add}>add item</button>
        <button onClick={clear}>clear all</button>
        {
            addItem.map((e,index)=>{
                return(
                    <>
                    <h1>{e}</h1>
                    <button onClick={()=>del(e)}>delete</button>
                    </>
                )
            })
        }
        </>
    )

}

export default TODO;