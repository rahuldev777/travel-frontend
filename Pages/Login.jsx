import React, { useState } from 'react'
import "../Pages/login.css"
import Navbar from 'react-bootstrap/Navbar';
import {  Button, Container } from 'react-bootstrap';
import {MDBInput} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminLogin, loginAPI, registerAPI } from '../src/Services/allAPI';



function Login({register,admin}) {

const isRegisterForm = register?true:false  
const isAdminForm=admin?true:false

const navigate=useNavigate()

const [userData,setUserData]=useState({
      username:" ",
      email:" ",
      password:" "


})

const[adminData,setadminData]=useState({
  email:" ",
  password:" "
})


const handleRegister= async(e)=>{
  e.preventDefault();
 const {username,email,password}=userData;
 try{
if(!username || !email || !password){
 

  toast.warn("please fill all the fields!")
 }else{

  const result=await registerAPI(userData)

  if(result.status===200){
    toast.success(`${result.data.username} register successfully`)

       
setTimeout(()=>{
   navigate('/login')
},3000)

    setUserData({
      username:"",
      email:"",
      password:""
    })
  } else{
    toast.warn(result.response.data)
  }
 }

 }catch(err){

  console.log(err)

 }
 
}

const handleLogin=async(e)=>{
  e.preventDefault();

  const{email,password}=userData;

  try{

    if(!email || !password){

      toast.warn("please fill all the fields!")
    }else{
      const result=await loginAPI({email,password})

      if(result.status==200){

        sessionStorage.setItem("username",result.data.existingUser.username)
        sessionStorage.setItem("token",result.data.token)

    
     toast.success("Login Successfull") 
     

     navigate("/home")
      setUserData({
        email:"",
        password:""
      })
      }else{
        toast.error(result.response.data)
      }
    }

  }catch(err){
    console.log(err)
  }

}

const handleAdminLogin=async(e)=>{
  e.preventDefault();
  const{email,password}=adminData;
  try{
    if(!email || !password){
      toast.warn("please fill all feilds")
    }else{
     const result=await  AdminLogin({email,password})
     if(result.status==200){
      sessionStorage.setItem("email",result.data.existingAdmin.email)
      sessionStorage.setItem("token",result.data.token)
      toast.success("Admin Login sucessfull")
      navigate("/admin/dashboard")
      setadminData({
        email:"",
        password:""
      })
     }else{
      toast.warn(result.response.data)
     }
    }

  }catch(err){
    toast.error(err);
  }
}


  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Link to={"/"}><Navbar.Brand><img src='Components\icon\travel-removebg-preview.png' height={50}></img></Navbar.Brand></Link>
        
        </Container>
      </Navbar>

    <Container >
        <div className='d-flex align-items-center justify-content-center ' style={{width:"100%",height:"590px"}}>
           <div className='container w-75 ' >
            <div className='card shadow 'style={{backgroundColor:"rgb(214, 222, 221)"}}>
                <div className='row align-items-center'>
                    <div className='col-lg-6 rounded-start'>
                        <img src="https://cdn.pixabay.com/photo/2017/03/27/13/33/beach-2178747_1280.jpg" alt="" srcset=""  className='rounded w-100' style={{height:"539px"}} />

                    </div>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>  
                 
                        <div className='d-flex align-items-center justify-content-center p-4' style={{width:"75%"}}>

                    
{/* 
                          {
                          isAdminForm&&
                          <>
                           <MDBInput className='mb-4' type='email' label='Email address' onChange={(e)=>setUserData({...userData,email:e.target.value})} value={userData.email} />
                           <MDBInput className='mb-4' type='password'  label='Password' onChange={(e)=>setUserData({...userData,password:e.target.value})} value={userData.password} />
                          </>
                          

                          }
                                  */}
                      <form className='w-55'>  
                            <h3 className='text-center fw-bolder ' style={{marginBottom:"-10px"}}>FlyFind</h3>
                            <div className='text-center '>
                                <img  src="https://media2.giphy.com/media/OfdA9ssTZzVgBWJuB9/giphy.gif?cid=6c09b952h2ktwax8o4zfokdyl13qah91pl6pnz7f8vxtj108&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" height={100} alt="" srcset="" />
                            </div>
                            
                        <h5 className='text-center'>  
                         
                        {
         
                        isRegisterForm?<p className='fs-5'>Sign In To Your Account</p>: isAdminForm?<p className='fw-bolder'>Admin Login</p>:<p>Sign Up Your To Your Account</p>
  
                         } 


                             </h5>  
                        
                        {isRegisterForm&& 

                    <MDBInput className='mb-4' type='text' id='Username' label='Name' onChange={(e)=>setUserData({...userData,username:e.target.value})} value={userData.username} />                                       
                    

                        }
                        {isAdminForm?(
                           <span>
                                <MDBInput className='mb-4' value={adminData.email} onChange={(e)=>setadminData({...adminData,email:e.target.value})} type='email' label='Email address'  />
                             <MDBInput className='mb-4' value={adminData.password} type='password' onChange={(e)=>setadminData({...adminData,password:e.target.value})}  label='Password' />   
                            </span>
                        ):
                        <>
                        
                      <MDBInput className='mb-4' type='email' label='Email address' onChange={(e)=>setUserData({...userData,email:e.target.value})} value={userData.email} />
                             <MDBInput className='mb-4' type='password'  label='Password' onChange={(e)=>setUserData({...userData,password:e.target.value})} value={userData.password} />   
                        </>
                        }

                           
        
            { 
                isRegisterForm?<div className='text-center'><Button className='' onClick={handleRegister} style={{backgroundColor:"#F5385D"}} type='submit' block>
          Register
              </Button>
               <p className='mt-4' style={{color:"#807e7c"}}>Already Have An Account <Link to={'/login'} style={{color:"navy",fontWeight:'bolder',textDecoration:"none"}}>Login</Link></p>
              <Link to={'/admin'} style={{color:"navy",fontWeight:'bolder',textDecoration:"none"}}> <p className='mt-4 ' style={{color:"#807e7c"}}><span className='text-danger'>Admin</span> Only </p>
               </Link>
               </div>
              
              :isAdminForm?
              <div className='text-center'>
                <Button className='' onClick={handleAdminLogin} style={{backgroundColor:"#F5385D"}} type='submit' block>
              Admin Login
                  </Button>
                  <p className='mt-4' style={{color:"#807e7c"}}>New User?  Click here to <Link to={'/register'} style={{color:"navy",fontWeight:'bolder',textDecoration:"none"}}>Register</Link></p>

              </div>
              :
              
              <div className='text-center'><Button className='' onClick={handleLogin}  style={{backgroundColor:"#F5385D"}} type='submit' block>
               Login
              </Button>
                 <p className='mt-4' style={{color:"#807e7c"}}>New User?  Click here to <Link to={'/register'} style={{color:"navy",fontWeight:'bolder',textDecoration:"none"}}>Register</Link></p>
                 <Link to={'/admin'} style={{color:"navy",fontWeight:'bolder',textDecoration:"none"}}> <p className='mt-4 ' style={{color:"#807e7c"}}><span className='text-danger'>Admin</span> Only </p> </Link>
                 </div>
       
            }
    </form>
                        </div>
                        

                    </div>

                </div>

            </div>

           </div>
    
        </div>
        
       </Container>
        
<ToastContainer />
    </>
  )
}

export default Login