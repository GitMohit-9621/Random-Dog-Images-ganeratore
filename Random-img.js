import React, { useState } from'react'
function Ramp(){

const [src ,setdata]=useState('')

const fethapi = async()=>{
  const respone=await  fetch("https://dog.ceo/api/breeds/image/random")

  const data= await respone.json();
 setdata(data.message)
   
}



    return(
        <div className='app'>
            <h3>Random Images genretore Using React js</h3>
            <div className='ramp-img'>
<img src={src} alt='' className='ramp-img1'></img>
            </div>
            <button className='btn1' onClick={(e)=>fethapi()}>Generat Images</button>
        </div>
    )

}

export default Ramp