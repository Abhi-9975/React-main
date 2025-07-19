import React from 'react'
import { useState, useEffect } from 'react'

function App(){
  var [data,setData]=useState([])
  async function fetchData(){
    var response = await fetch("https://fakestoreapi.com/products")
    var result = await response.json()
    setData(result)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return(
    <div>
     <h1>{data.map((item)=>{
      return(
        <div>
          <h1>{item.title}</h1>
          <h1>{item.id}</h1>
          <img src={item.avatar} alt="" style={{height:'100px',width:'100px'}} />
        </div>
      )
     })}</h1>
    </div>
  )
}

export default App