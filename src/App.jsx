
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Index from '../Pages/Index';
import Login from '../Pages/Login';
import Layout from '../Components/Layout';
import Placedetails from '../Pages/Placedetails';
import Footer from '../Components/Footer';
import Addyourplace from '../Pages/Addyourplace';
import AddedHistory from '../Pages/AddedHistory';
import Mybookings from '../Pages/Mybookings';
import { useEffect, useState } from 'react';
import Loader from '../Pages/Loader';
import AdminHome from "../Pages/AdminHome"
import Coverpage from '../Pages/Coverpage';




function App() {

const [PageisLoaded,setPageisLoaded]=useState(true)

useEffect(()=>{

  (setTimeout(() => {
    setPageisLoaded(false)
  },2500));

},[])
  return (
    <>
    {PageisLoaded?<Loader/>: 
    
    <Routes>
 <Route path='/' element={<Coverpage/>}/>
        <Route path='' element={<Layout/>}>
        <Route path="/home" element={<Index/>} /> 
        <Route path='/place/:id' element={<Placedetails />} />
        <Route path="/addlocation" element={<Addyourplace />} />
        <Route path="/addedhistory" element={<AddedHistory />} />
        <Route path="/mybookings" element={<Mybookings />} />
        <Route path="/addlocation/:id" element={<Addyourplace />} />
        
       
      </Route>
     
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login register/>} />
        <Route path='/admin' element={<Login admin/>} />
        <Route path="/admin/dashboard" element={<AdminHome/>} />

    </Routes>}
      

    <Footer />
   
  
    
    </>
  )
}

export default App
