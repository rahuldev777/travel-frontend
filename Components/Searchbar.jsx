import React, { useState } from 'react'
import '../Components/search.css'
import { MDBInput } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';



function Searchbar() {
  const[searchkey,setsearchKey]=useState("")
  return (
    <>
        <div className='d-flex justify-content-center mt-2'>
          <div className='d-flex border p-2 rounded-pill shadow' style={{backgroundColor:"#FBFBFB"}}>
              <div className='fw-bolder p-1 m-1'>Anywhere </div>
            <div className='border border-left'></div>
            <div className='fw-bolder p-1 m-1'>Anytime </div>
            <div className='border border-left'></div>
            <Form.Control type="text" className='rounded-pill m-1' placeholder="search" style={{width:"100px"}}onChange={(e)=>setsearchKey(e.target.value)} />

            
           <button className='button ' >
           <i class="fa-solid fa-magnifying-glass fa-lg"></i>
           </button>
          </div>
          

        </div>
        <hr className="hr mb-0" />
        </>
  )
}

export default Searchbar