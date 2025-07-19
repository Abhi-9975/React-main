import React from 'react'
import Nav from './nav'
import Header from './header'
 function App(){
  var admin=true
  var content 
  if(admin){
      content= <Nav/>
    }
    else{
      content =<Header/>
    }
  return(
    <div>
     <Nav></Nav>
     <Header></Header>
    </div>
  )
 }
 export default App