import React from 'react'
import {InfinitySpin} from "react-loader-spinner"



function Loader() {
  return (
    <>
    <div className='d-flex align-items-center justify-content-center ' style={{marginTop:"10%"}}>
    {/* <InfinitySpin
  visible={true}
  width="200"
  color="#4fa94d"
  ariaLabel="infinity-spin-loading"
  /> */}
  <div>
   <img src="https://media0.giphy.com/media/OfdA9ssTZzVgBWJuB9/giphy.gif?cid=6c09b95219qjfikckbefklnl5ivzop5r39vzhzmxlroula4p&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" width={"100px"} height={'100px'} alt="" srcset="" />  
  </div>
 

    </div>
    </>
  )
}

export default Loader