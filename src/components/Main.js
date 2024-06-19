import React, { useState } from 'react'
import './Main.css'
import image1 from './image/1.jpg'
import image2 from './image/2.jpg'

const Main = () => {
const [images,setImages] = useState("image1")
const turnOn = () =>{
    setImages(image1)
}
const turnOff = () =>{
    setImages(image2)
}
  return (
    <div>
   <div style={{marginTop:"100px"}}>
    <img src={images} alt="" style={{width:"300px",height:"400px",borderRadius:"30px"}} />
    <div style={{display:"flex",justifyContent:"space-between"}}>
        <button onClick={turnOn} style={{width:"200px",height:"50px",color:"white",backgroundColor:"green"}}>turn on</button>
        <button onClick={turnOff} style={{width:"200px",height:"50px",color:"white",backgroundColor:"green"}}> turn off</button>
    </div>
   </div>
      
    </div>
  )
}

export default Main
