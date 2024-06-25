import React, { useEffect, useState } from 'react'
import "../Components/header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link, NavLink, useNavigate } from 'react-router-dom';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Header() {
    
  const navigate =useNavigate();
  const[dropdownMenu,setdropdownMenu]=useState(false)
  const[isLoggidIn,setisLoggidIn]=useState(false)

  const[username,setusername]=useState("")
  


     useEffect(()=>{

    if(sessionStorage.getItem("username")){
      setisLoggidIn(true)
    }else{
      setisLoggidIn(false)
    }

    if(sessionStorage.getItem("username")){
      setusername(sessionStorage.getItem("username"))
    }else{
      setusername("")
    }

  },[])

  const handleLogout=()=>{
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token")
  
    if(window.confirm('Are sure want to Logout?')) {

       toast.success("logout Suceessfull")
   
 
    navigate("/") 
}
    
     
  }


  return (
    <>
     <Navbar bg="light" data-bs-theme="light">
        <Container className='main'>
         <Link to={"/home"}><Navbar.Brand ><img src="Components\icon\travel-removebg-preview.png" alt="" srcset="" height={50} width={140}/></Navbar.Brand></Link> 
          <Nav className="mx-auto d-flex justify-content-center align-items-center"> 
            
          </Nav>
          <Nav style={{marginRight:"20px"}}>
       
            <div className='rounded-pill py-2 px-4 shadow 'style={{background:"#d9dbde"}} >

              
              {isLoggidIn&&(
              <p className='fw-bolder position-absolute mt-2 ' style={{marginLeft:"-120px"}}>Hey <span className='fw-bolder' style={{color:"#f5385d"}}>{username}</span></p>
              )}
              
              <div className='d-flex gap-3' onClick={()=>setdropdownMenu(!dropdownMenu)} >
                <div>
                <i class="fa-solid fa-bars " style={{color:"black"}}  ></i> 
                </div>
                <div>
                <i class="fa-solid fa-user" style={{color:"black"}}></i>
                {dropdownMenu && !isLoggidIn && (

                <div className="dropdown-content  ">
                  <div className='login'><Link to={"/login"} className='text-dark p-0'><p className='p-0'>Login Page</p></Link></div>
                  <div className='register'><Link to={"/register"} className='text-dark p-0'><p className='p-0'>Register Page</p></Link></div>
                </div>
              )
            }
            { dropdownMenu &&  isLoggidIn &&(
              <>

                  
                <div className="dropdown-content  ">
               <div className='login'><Link to={"/addlocation"} className='text-dark p-0'><p className='p-0'>Add your Location</p></Link></div>
               <div className='register'><Link to={"/addedhistory"} className='text-dark p-0'><p className='p-0'>Added Location</p></Link></div>
               <div className='' style={{marginTop:"-10px"}}><Link to={"/mybookings"} className='text-dark p-0'><p className='p-0'>My bookings</p></Link></div>
               <div className='register'><p onClick={handleLogout} className='text-dark p-0 ' style={{cursor:"pointer"}}><p className='p-0'>LogOut</p></p></div>
             
             </div> 
              </>
           
             )

               }
               
         


                </div>
                </div>
                 
              
              </div>
           <ToastContainer />
          </Nav>
          <Nav>
          </Nav>
        </Container>   
    
      </Navbar>
     
      
    
    </>
  )
}

export default Header