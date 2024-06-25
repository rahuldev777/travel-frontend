import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import img1 from '../Components/icon/travel-removebg-preview.png'
import  { useState } from 'react'
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
  import {
  
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';



import { FetchAllUser, GetAllBooking, GetAllLocation, dropSingleUser, getAllBookings } from '../src/Services/allAPI';

import { Link } from 'react-router-dom';
import { SERVER_URL } from '../src/Services/Server_Url';
import { Button } from 'react-bootstrap';





function AdminHome() {
    const[Loading,setLoading]=useState(false)

    const[AllUser,setAllUser]=useState([])
    const[AllLocation,setAllLocation]=useState([])
    const[AllBookingsdata,setAllBookingsdata]=useState([])
    const[selectedItem, setSelectedItem] = useState(null);
    const[basicModal, setBasicModal] = useState(false);
    const[BasicModal, setbasicModal] = useState(false);
    const[SelectedItem, setselectedItem] = useState(null);

  useEffect(()=>{
    
   HandleAllUser() 
   AllPackages()
   GetAllBookings()
   setLoading(true)

setTimeout(() => {
  setLoading(false)
}, 3000);

  },[])

  const HandleAllUser=async(req,res)=>{
try{
    const result=await  FetchAllUser()
    if(result.status==200){
        setAllUser(result.data)
    }else{
        console.log();
    }
}catch(err){
    console.log(err);
}    
  }

  const AllPackages=async(req,res)=>{

    try{
      const result=await GetAllLocation()
      if(result.status==200){
        setAllLocation(result.data);
      }else{
        console.log(result.response)
      }
       
    }catch(err){
      console.log(err);

    }

  }

  const DeleteUser=async(id)=>{
    const token=sessionStorage.getItem("token")
   
    try{ 
        if(token){
           const reqHeader={
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
            console.log(reqHeader);
            const result=await dropSingleUser(id,reqHeader)
            if(result.status==200){
              alert("delete successfully")
                HandleAllUser()
             
            }
        }

    }catch(err){
        console.log(err);
    }
  }

  const GetAllBookings=async()=>{
    try{
      const result=await GetAllBooking()
      if(result.status==200){
        setAllBookingsdata(result.data)
        
      }

    }catch(err){
      console.log(err);
    }
  }


    const [fillActive, setFillActive] = useState('tab1');

    const handleFillClick = (value) => {
      if (value === fillActive) {
        return;
      }
  
      setFillActive(value);
    };
 
  const totalPrice = AllBookingsdata.reduce((acc, item) => acc + parseFloat(item.totalPrice), 0);

   console.log(totalPrice);

//  const totalPrice=revienw.reduce((item1,item2)=>(
// item1+item2,0
//  ));




const toggleOpen = (item) =>{
  setSelectedItem(item);
  toggleModal()
} 
  const toggleModal = () => {
  setBasicModal(!basicModal);
};

const toggleopen = (item) =>{
  setselectedItem(item);
  togglleModal()
} 
  const togglleModal = () => {
  setbasicModal(!BasicModal);
};
  





  return (
    <>
    <Navbar className="bg-body-tertiary">
      <Container>
       <Link to={'/register'}><Navbar.Brand><img src={img1} alt="" height={45} srcset="" /> </Navbar.Brand></Link> 
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <button className='btn btn-danger'>Log Out</button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* ----------------------------------------------------------------------- */}

    <Container className='mt-5'>
    <MDBTabs fill className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink className='fw-bolder' onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
            Users
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink className='fw-bolder' onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
           Packages
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink className='fw-bolder' onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
          Revenue 
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane open={fillActive === 'tab1'}>
            <div className='container'>
                <h1 className='text-center fw-bolder'>All The Users</h1>
                <div className='d-flex align-items-center justify-content-center '>
                    
<div className='card mt-3'>
<table >
                        <thead >
                            <tr >
                                <th className='border px-4'>Id</th>
                                <th className='border px-4'>Name</th>
                                <th className='border px-4'>Email</th>
                                <th className='border px-4'>Password</th>
                                <th className='border px-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              AllUser?AllUser.map((item,index)=>(

                            <tr>
                            <td className='border px-4'>{index+1}</td>
                            <td className='border px-4'>{item.username}</td>
                            <td className='border px-4'>{item.email}</td>
                            <td className='border px-4'>{item.password}</td>
                            <td className='border px-4 py-2' ><button className='btn bg-danger text-light' onClick={()=>DeleteUser(item?._id)}>Delete</button></td>
                            </tr>
                              )):<p className='text-danger'>no data here</p>
                            }
                            
                        </tbody>
                    </table>
</div>
                    

                </div>

            </div>
        </MDBTabsPane>
        <MDBTabsPane open={fillActive === 'tab2'}>
  <div className='container'>
    <h2 className='text-center fw-bolder mb-4'>All Packages</h2>
   <Container> <div className='d-flex align-items-center flex-wrap justify-content-center '>
{
AllBookingsdata?AllLocation.map((item,index)=>(
<>


  

   <MDBCard style={{width:"300px"}} className='shadow m-4' key={index}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={`${SERVER_URL}/uploads/${item.addedphotos[0]}`} width={"100%"} style={{height:"250px"}}  fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{item.title}</MDBCardTitle>
        <MDBCardText>
        {item.description.slice(0, 50)+'...'}
        </MDBCardText>
       <MDBBtn onClick={()=>toggleOpen(item)} style={{width:"150px",backgroundColor:"#F5385D"}}>View Details</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </>
)):<div className='text-center text-danger'>Noo Packages </div>




 
}

    



    </div>

</Container>
  </div>
    
 

        </MDBTabsPane>
        <MDBTabsPane open={fillActive === 'tab3'}>
            <div className='container '>
               <h2 className='text-center fw-bolder mb-4'>Reveniew</h2> 
               <p className='text-center fw-bolder'>Total-reveniew:<span className='text-success'>₹{totalPrice}</span></p>     
            {AllBookingsdata?AllBookingsdata.map((item)=>(
              
              <>
             <div className='d-flex  gap-5 mt-2 rounded ' style={{backgroundColor:"#ebedf0"}}>
<div className='rounded'>
    <img className='rounded m-4 '  src={`${SERVER_URL}/uploads/${item.PlaceId.addedphotos[0]}`}  alt="" height={200} width={200} />
    
    </div>
      <div className='d-flex flex-column mt-1'>
<p><span className='fw-bolder'>Resort Name : </span>{item.PlaceId.title}</p>
<p><span className='fw-bolder'>Check In : </span>{item.CheckIn.slice(0,10)}</p>
<p><span className='fw-bolder'>Check Out : </span>{item.CheckOut.slice(0,10)}</p>
<p><span className='fw-bolder'>Total price : </span> <span className='text-success fw-bolder'>₹{item.totalPrice}</span></p>

<div className='d-flex'>
<Button className='m-3' style={{width:"150px",backgroundColor:"#F5385D"}} onClick={()=>toggleopen(item)} >View Details</Button>

</div>

      </div> 
    
      </div>
           
              </>
                

             
            )):<div className='text-danger'>No Bookings </div>
            }

           </div>
            
            <hr />
            
            
           
        </MDBTabsPane>
      </MDBTabsContent>
      {selectedItem &&(
           <MDBModal className='h-79' open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
<MDBModalDialog>
  <MDBModalContent>
    <MDBModalHeader>
      <MDBModalTitle>Details</MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>Title: <span className='fw-bolder'>{selectedItem.title}</span></MDBModalBody>
    <MDBModalBody>Address: <span className='fw-bolder'>{selectedItem.address}</span> </MDBModalBody>
    <MDBModalBody>Type: <span className='fw-bolder'>{selectedItem.type}</span></MDBModalBody>
    <MDBModalBody>Facility:<span className='fw-bolder'>{selectedItem.perks}</span></MDBModalBody>
    <MDBModalBody>Maximum Occupation:<span className='fw-bolder'>{selectedItem.maxguest}</span></MDBModalBody>
    <MDBModalBody>About:<span className='fw-bolder'>{selectedItem.description}</span></MDBModalBody>
    <MDBModalBody>Price: <span className='fw-bolder text-success'> ₹{selectedItem.price}</span></MDBModalBody>

    <MDBModalFooter>
      <MDBBtn color='secondary' onClick={toggleOpen}>
        Close
      </MDBBtn>
    </MDBModalFooter>
  </MDBModalContent>
</MDBModalDialog>
</MDBModal>
      )

      }
      {
        SelectedItem&&(
          <MDBModal className='h-79' open={BasicModal} onClose={() => setbasicModal(false)} tabIndex='-1'>
<MDBModalDialog>
  <MDBModalContent>
    <MDBModalHeader>
      <MDBModalTitle>Booking Details</MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>Client Name: <span className='fw-bolder'>{SelectedItem.Name}</span></MDBModalBody>
    <MDBModalBody>Address: <span className='fw-bolder'>{SelectedItem.Email}</span> </MDBModalBody>
    <MDBModalBody>No of guest <span className='fw-bolder'>{SelectedItem.NumberofGuest}</span></MDBModalBody>
    <MDBModalBody>Phone:<span className='fw-bolder'>{SelectedItem.Phone}</span></MDBModalBody>
  

    <MDBModalFooter>
      <MDBBtn color='secondary' onClick={toggleopen}>
        Close
      </MDBBtn>
    </MDBModalFooter>
  </MDBModalContent>
</MDBModalDialog>
</MDBModal>
        )
      }



  
     
    </Container>
    </>
  )
}

export default AdminHome