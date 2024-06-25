import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { dropBooking, getAllBookings } from '../src/Services/allAPI'
import { SERVER_URL } from '../src/Services/Server_Url'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Mybookings() {
  const[Loading,setLoading]=useState(false)

  const[BookingDetails,setBookingDetails]=useState([])

useEffect(()=>{


getAllBookingdetaiils()
setLoading(true)

setTimeout(() => {
  setLoading(false)
}, 3000);
},[])

const getAllBookingdetaiils=async()=>{

  const token=sessionStorage.getItem("token")
  try{
    if(!token){
   toast.warn("Please Login, It's an invalid user.");
  }else{
    const reqHeader={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result=await getAllBookings(reqHeader)
    if(result.status==200){
      setBookingDetails(result.data)
      console.log(result.data)
    }
  }
}catch(err){
    console.log(err)
  }
  
}

const deleteBookings=async(id)=>{
  
  const token=sessionStorage.getItem("token")
  
  try{
    if(token){
     const reqHeader={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    

    const result=await dropBooking(id,reqHeader);


     
    if(window.confirm("are you sure want ot delete")){
         result.status==200
      toast.success("delete succesfully");

      getAllBookingdetaiils()
    }
    }
    

  }catch(err){
    console.log(err);

  }

}

  return (
    <>
     {/* show every bookings here */}


{
  Loading?<Loader/>:<div className='container'>
    
    <h2 className='text-center fw-bolder m-3'>Your <span style={{color:"#f5385d"}}>Bookings</span></h2>
    
    <Container>
  {BookingDetails?BookingDetails.map((item)=>(
<>



<div className='d-flex  gap-5 mt-2 rounded ' style={{backgroundColor:"#ebedf0"}}>
<div className='rounded'>
    <img className='rounded m-4'  src={`${SERVER_URL}/uploads/${item.PlaceId.addedphotos[0]}`}  alt="" height={200} width={200} />
    
    </div>
      <div className='d-flex flex-column mt-3'>
<p><span className='fw-bolder'>Resort Name : </span>{item.PlaceId.title}</p>
<p><span className='fw-bolder'>Check In : </span>{item.CheckIn.slice(0,10)}</p>
<p><span className='fw-bolder'>Check Out : </span>{item.CheckOut.slice(0,10)}</p>
<p><span className='fw-bolder'>Total price : </span>₹ {item.totalPrice}</p>

<div className='d-flex'>
<Link to={"/place/"+item.PlaceId._id}><Button className='m-3' style={{width:"150px",backgroundColor:"#F5385D"}}>View Details</Button></Link>
<Button className='m-3'  onClick={()=>deleteBookings(item?._id)} style={{width:"150px",backgroundColor:"#F5385D"}}>Delete</Button> 
</div>

      </div> 
    
      </div>
</>
    
  )):<div><p className='text-danger'>no data here to display</p></div>}
  
 
  <ToastContainer />
</Container></div>
}



    
    </>
  )
}

export default Mybookings