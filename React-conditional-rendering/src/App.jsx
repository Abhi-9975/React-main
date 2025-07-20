import React from 'react'
import Nav from './nav'
import Header from './header'
 function App(){
  var admin=false
  var content 
  if(admin){
      content= <Nav/>
    }
    else{
      content =<Header/>
    }
  return(
    <div>
     <h1>{content}</h1>
    </div>
  )
 }
 export default App 