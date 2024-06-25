import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import '../Pages/place.css'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBRow,
  MDBCol,
  MDBInput,
  } from 'mdb-react-ui-kit';

import Modal from 'react-bootstrap/Modal';
import image2 from "../Components/icon/travel-removebg-preview.png"
import { fetchSinglePageDetails, handlebook } from '../src/Services/allAPI';
import { SERVER_URL } from '../src/Services/Server_Url';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { differenceInDays, addDays, format, differenceInCalendarDays } from "date-fns";






function Placedetails() {
 
 
  const {id}=useParams(); 
const [bookedDates, setBookedDates] = useState([]);
  const [PlaceDataStore,setPlaceDataStore]=useState([])
  const[Email,setEmail]=useState("")
  const[CheckIn,SetCheckIn]=useState("")
  const[CheckOut,SetCheckOut]=useState("")
  const[NumberofGuest,SetNumberofGuest]=useState(1)
  const[Phone,setphone]=useState("")
  const [Name, setName] = useState(sessionStorage.getItem("username"));
  const [totalPrice, setTotalPrice] = useState(0); 
  const [numberOfDays, setNumberOfDays] = useState(0);
 const[PlaceId,setPlaceId]=useState("")

 console.log(CheckIn,CheckOut);

console.log(PlaceId);

  useEffect(()=>{

fetchData()

setPlaceId(String(id))

  },[])
  
 
  
  const fetchData=async()=>{
      try{
const result=await fetchSinglePageDetails(id)
    if(result.status==200){
    console.log("place details",result.data)
    setPlaceDataStore(result.data)
    }else{
    console.log(result.response.message)
    }
  }catch(err){
        console.log(err)

      }
    }


  // check in & Out



  useEffect(() => {
    let daysDifference = 0;

    // Calculate number of days difference if CheckIn and CheckOut are defined
    if (CheckIn && CheckOut) {
      daysDifference = differenceInCalendarDays(new Date(CheckOut), new Date(CheckIn));
      if (daysDifference < 0) {
        daysDifference *= -1;
      }
    }

    // Set the number of days state
    setNumberOfDays(daysDifference);
  }, [CheckIn, CheckOut]);

  useEffect(() => {

    const totalPriceBeforeGST = numberOfDays * PlaceDataStore.reduce((acc, item) => acc + item.price, 0);
    
    const gst = totalPriceBeforeGST * 0.10;

const totalPriceWithGST = totalPriceBeforeGST + gst;

    setTotalPrice(totalPriceWithGST);
  }, [numberOfDays, PlaceDataStore]);


  // 
 
  

// modal

const [staticModal, setStaticModal] = useState(false);

  const toggleOpen = () => setStaticModal(!staticModal);


// 

  // show all photos
  const[showAllphotos,setshowAllphotos]=useState(false)

  //if not loggin show loggin btn 

  const[LogginBtn,setLogginBtn]=useState(false)

  useState(()=>{
    if(sessionStorage.getItem("username")){
      setLogginBtn(true)

    }else{
      setLogginBtn(false)
    }
},[])
const moreimage=PlaceDataStore.map(item=>item.addedphotos);


// Book now
 const l=PlaceDataStore.map((item)=>(
  item.maxguest
 ))
 const limit=parseInt(l)

 const HandleBook = () => {
  if (CheckIn === "" || CheckOut === "") {
    toast.warn("Please fill all fields.");
  } else if (NumberofGuest > limit) {
    toast.warn("Guest count exceeds the limit.");
  } else {  
    console.log(CheckIn);
    toggleOpen();
  }
}
// 

// date structure


// 

// login btn modal

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);




// booking handle function
const BookLocation = async (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  CheckOut ? CheckOut.toString() : 'Select Check-out date'
  CheckIn ? CheckIn.toString() : 'Select Check-in date'


  const reqBody = {
    Name,
    Email,
    NumberofGuest,
    CheckIn,
    CheckOut,
    PlaceId,
    Phone, 
    totalPrice,
    
  };

  const token = sessionStorage.getItem("token");

  if (token) {
    const reqHeader = {
      "Content-Type": "application/json", 
      "Authorization": `Bearer ${token}`
    };

    try {
      const result = await handlebook( reqBody,reqHeader);

      if (result.status == 200) {
          
        var options={
          key:`rzp_test_cB2Hd3DK3CxzjC`,
          Key_secret:`5XV7nLHXAThVbmIofOyXDI0B`,
          amount:totalPrice*100,
          currency:"INR",
          name:"FLY FIND ",
          description:"For Booking your Destionation",
          Image:"https://cdn.dribbble.com/userupload/7562364/file/original-1f2e6aea19f6a927f6e66840e8501c77.jpg?resize=1200x900",
          handler:function (response) {
            console.log(response.razorpay_payment_id)
            
          },
          prefill:{
            name:{Name},
            email:{Email},
            contact:{Phone}
          },
          notes:{
          address:"RazorPay Pvt ltd"
          },
          theme:{
            color:"#3399cc"
          }

        };
        var pay=new window.Razorpay(options)
        pay.open();
       toast.success("booking successs")
      
      }
     

      // const BookingId = result.data._id;
      // console.log(BookingId);
    } catch (err) {
      console.log(err);
    }
  }

}


const dattas=PlaceDataStore.map((item)=>(item.perks))
const dataa=dattas.join(', ');

// calculation
  
// const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [datesInRange, setDatesInRange] = useState([]);

//   const handleDateChange = (date, type) => {
//     if (type === 'start') {
//       SetCheckIn(date);
//     } else {
//       SetCheckOut(date);
//     }

//     // Check if both start and end dates are selected
//     if (CheckIn&& CheckOut) {
//       const dates = [];
//       let currentDate = new Date(CheckIn);
//       while (currentDate <= CheckOut) {
//         dates.push(new Date(currentDate));
//         currentDate.setDate(currentDate.getDate() + 1);
//       }
//       setDatesInRange(dates);
//     }
//   };

//   const isDateDisabled = date => {
//     if (CheckIn && CheckOut) {
//       return date >= CheckIn && date <= CheckOut;
//     } if (disabled) {
//       console.log("Disabled date in range:", date.toDateString());
//     }
//     return disabled;
    
//     return false;
//   };





// 




  if(showAllphotos){
    return(
     
      <div className=' position-absolute w-100 p-3 inset-0' style={{marginTop:"-95px",backgroundColor:"white"}}>

        <div className='btn btn-secondary m-2 rounded-pill text-dark shadow ' onClick={()=>setshowAllphotos(false)} >close</div>

      <div className='row ' >
        <div className='col-lg-12 d-flex flex-column gap-2' >
          {
            moreimage[0].map((item,index)=>(
                <div>
            <img className='object-fit-cover w-100 curser-pointer ' src={`${SERVER_URL}/uploads/${item}`} alt="" srcset=""  />
          </div>
            ))
          }
        </div>
      </div>
      </div>
    )}
  return (
    <> 
    <div className='container-flex p-5 rounded ' style={{backgroundColor:"#faf5f5",paddingTop:"-70px"}}>
      {
        PlaceDataStore?PlaceDataStore.map((item,index)=>(
          <>
         
           <h5 className='fw-bold text-dark'>{item.title} </h5>
   
    <Link to={`https://maps.google.com?q=${item.address},`} className='fw-bold text-decoration-underline'>
    <div>
      <p><i className="fa-solid fa-location-dot text-dark pe-1"></i>{item.address}</p>
    </div>
  </Link>
       <div className='container'>
       <div className='d-flex gap-2'>
       <div className=' '  >
       <img className='img shadow  rounded' onClick={()=>setshowAllphotos(true)} src={`${SERVER_URL}/uploads/${item.addedphotos[0]}`} alt=""  srcset=""  />
       </div>
       <div className=' '>
       <img className='img shadow  rounded' onClick={()=>setshowAllphotos(true)} src={`${SERVER_URL}/uploads/${item.addedphotos[1]}`} alt="" srcset=""  />
       </div>
       <div className=' '  >
       <img className='img shadow  rounded' onClick={()=>setshowAllphotos(true)} src={`${SERVER_URL}/uploads/${item.addedphotos[2]}`} alt="" srcset=""  />
       </div>
       </div>
       <button className='btn btn-small position-absolute text-dark bg-light rounded mt-2'onClick={()=>setshowAllphotos(true)} style={{marginRight:"15px"}} >see more photos <i class="fa-solid fa-image"></i></button>
       </div>

      <br />
      <div className='mt-5' >
      </div>
      <div className=' row '>
      <div className='col-6'>
        <h5 className='text-dark fw-bold'>description</h5>
        <p>{item.description}</p>
     
        <p className='fw-bold'>Check in time:<span className='fw-light'> {item.checkin}</span></p> 
        <div>
        <p className='fw-bold'>Check out time:<span className='fw-light'> {item.checkout}</span></p>
        </div>
        <div>
        <p className='fw-bold'>Max Occupation:<span className='fw-light'> {item.maxguest}</span></p>
        </div>
        <div>
        <p className='fw-bold'>Amonities:<span className='fw-light'> {dataa}</span></p>
        </div>
        </div>
        <div className='col-6 '>
      
        <div className='text-light card shadow mx-auto p-4' style={{width:"400px"}}>
                <h5 className='text-dark text-center fw-bolder mb-4'>Price/night:{item.price}</h5>
                <div className='d-flex gap-1'> 
                <div className='border rounded text-center'>
                <label className='text-dark fw-bold'>Check in</label>
                <input className='' type="date" name="" id=""  min={CheckIn || undefined} value={CheckIn}   onChange={(e)=>SetCheckIn(e.target.value)} />
                </div>
                <div className=' border rounded text-center'>
                <label className='text-dark fw-bold'>Check Out</label>
                <input className='' type="date" name="" id=""  max={CheckOut || undefined} value={CheckOut}  onChange={(e)=>SetCheckOut(e.target.value)} />
                </div>
                </div>
                <div className='border mt-3 p-4'>
                  <label className="text-dark fw-bold pe-1">No of guest</label>
                  <input type="number" name="" id="" value={NumberofGuest} onChange={(e)=>SetNumberofGuest(e.target.value)} />
                </div>
                <div>                 
                </div>
 
                {
                  numberOfDays>0 && (
                  <span className='text-dark'>Total Price:{totalPrice} </span>
                  )
                }
                
                {LogginBtn?
                    <Button className='mt-2'  style={{backgroundColor:"#F5385D"}} onClick={HandleBook}>booknow</Button>
                    
                    : <Button className='mt-2'  style={{backgroundColor:"#F5385D"}} onClick={handleShow} >Booknow</Button>
                }
      
          </div>
{/* onClick={toggleOpen} */}
          
        </div>
        <div className='mt-4 bg-white p-2 rounded'>  
             <h4 className='text-dark'>Additional information</h4>   
          <p className='text-dark'>{item.extrainfo}</p>
          </div>
       </div>

     </>
        )):<div className='text-danger'>No data to Show</div>
      }

    </div>

    {/* modal */}
   

<MDBModal staticBackdrop tabIndex='-1' open={staticModal} onClose={() => setStaticModal(false)}>
  <MDBModalDialog>
    <MDBModalContent>
    <MDBModalHeader>
    <MDBModalTitle>Booking Confirmation</MDBModalTitle>
    <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
    </MDBModalHeader>
    <MDBModalBody>

{/* form */}

<form>
  {
    PlaceDataStore?PlaceDataStore.map((item,index)=>(
      <>
      <MDBRow className='mb-4'>
      <MDBCol>
        <MDBInput id='form6Example1' label='First name' value={Name} />
      </MDBCol>

    </MDBRow>

    <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' onChange={(e)=>setEmail(e.target.value)} />
    <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' onChange={(e)=>setphone(e.target.value)} label='Phone' />

    <div className='row'>
      <div className='col-6'>
       <div>No of Guest:</div>
       <div>Check In:</div>
       <div>Check Out:</div>
       <div>No of Night:</div>
       <div>Extra Gst:</div><hr />
       <div className='fw-bolder'>Total Amount:</div>
      

      </div>
      <div className='col-6'>

      

        <div>{NumberofGuest}</div>
        <div>{CheckIn}</div>
        <div>{CheckOut}</div>
        <div>{numberOfDays}</div>
        <div>{totalPrice*0.10}</div>
        <hr />
        <div className='fw-bolder'> ₹ {totalPrice} </div>
       
       
      </div>
    </div>
    </>
    )):null

  }

    
        <br />


      <MDBBtn className='mb-4' style={{backgroundColor:"#F5385D"}} onClick={BookLocation} type='submit' block >
        Book Now
      </MDBBtn>
    </form>


{/*  */}



      </MDBModalBody>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>
    {/*  */}

    {/* login modal */}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
       
        </Modal.Header>
        <Modal.Body className='text-danger fw-bolder'>OOPS Look like you are not Logged in! Please Register</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to={"/register"}><Button style={{backgroundColor:"#F5385D"}}>Register</Button>
          </Link>
        </Modal.Footer>
      </Modal>

    {/*  */}
    
    <ToastContainer />
    </>
  )
}

export default Placedetails