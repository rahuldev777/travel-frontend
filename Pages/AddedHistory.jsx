import React, { useEffect, useState } from 'react'
import "../Pages/place.css"
import { Button,  } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { getUseraddedLocation, handledeleteLocation } from '../src/Services/allAPI'
import { SERVER_URL } from '../src/Services/Server_Url'
import Loader from './Loader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AddedHistory() {


  
  // get all login user added Location
  const[Loading,setLoading]=useState(false)
   const[alladdedLocation,setaddedallLocation]=useState([])

   useEffect(()=>{
     
    setLoading(true)

setTimeout(() => {
  setLoading(false)
}, 4000);

    getUserAllAddedLocation()
   },[])

   const getUserAllAddedLocation=async()=>{

  const token=sessionStorage.getItem("token")
  if(token){

    const reqHeader={
      "Content-Type":"multipart/form-data",
      "Authorization":`Bearer ${token}`
    }
    const result=await getUseraddedLocation(reqHeader)
  
    if(result.status==200){
      console.log("history",result.data);
      setaddedallLocation(result.data)
    }else{
      console.log(result);
    }
  }

   }

   //delete single data
   const deleteLocation = async (id) => {
    const token = sessionStorage.getItem("token");
    //console.log(id);
    console.log(token);
    try{    
      if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      console.log(reqHeader);
     
            const result = await handledeleteLocation(id,reqHeader); 
          
            if(window.confirm('Are sure want to delete?')) {
                toast.success("Delete successful");
             result.status === 200 
           
              getUserAllAddedLocation(); 
          }
    }

    }catch(err){
          toast.warn(err);
    }
    

  };

  return (
    <>
    <div>   
      { Loading?<Loader/>:
    <>
   
   <div className='container'>

    <h2 className='text-center fw-bolder m-3'>Your <span style={{color:"#F5385D"}}>Locations</span></h2>

  
<div className='text-center mt-4'>

<Link to={'/addlocation'}><Button className='rounded-pill fw-bolder text-dark' style={{background:"#F5385D"}}><i class="fa-solid fa-plus"></i> Add New Place</Button></Link>
</div>


<div className=' container mt-4'>
  {
    alladdedLocation.length>0?alladdedLocation.map((item,index)=>(
          <div className='rounded  m-4 fw-bold d-flex p-3 gap-2' key={index} style={{background:"#e6e4e1"}}>
    <div className='shadow ' >
       <img src={`${SERVER_URL}/uploads/${item.addedphotos[0]}`} className='rounded ' alt="" srcset="" style={{height:"170px",width:"170px"}} />
    </div>
    <div className=''>
       <p className='fs-4'>{item?.title}</p> 
       <p className='mt-1'>{item?.description}</p>  
       <div >
       <Link to={"/addlocation/"+item._id}> <Button style={{  backgroundColor:"#f5385d"}} className='rounded-pill me-1'>EDIT</Button></Link>
        <Button style={{  backgroundColor:"#f5385d"}} className='rounded-pill' onClick={()=>deleteLocation(item?._id)}>DELETE</Button>
       </div>
   
    </div> 
    </div>
    )):<div className='text-danger'>No Location Added yet</div>

  }

    
  
    </div> 
    </div>
     </>
}
<ToastContainer />
</div>



    </>
  )
}

export default AddedHistory