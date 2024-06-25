import React, { useEffect, useState } from 'react'
import Option from '../Components/Options'

import {
  MDBCard,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import data from "../Json/Resort"
import {  handlefetchhomedata } from '../src/Services/allAPI';
import { SERVER_URL } from '../src/Services/Server_Url';
import Loader from './Loader';







function Index() {

const[Loading,setLoading]=useState(false)  
  const[data,setdata]=useState([])
  const[selectedFilter,setselectedFilter]=useState([]) 
  const[searchkey,setsearchKey]=useState("")
  

   useEffect(()=>{
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 3000);
   },[])

   const getHomeData=async()=>{
  try{
    const result=await handlefetchhomedata(searchkey)
    if(result.status==200){
      console.log(result.data);
      setdata(result.data)
    }else{
      console.log(result.response);
    }
  }catch(err){
    console.log(err);
  }
  
}
const filterData=(type)=>{
  
    if (type=="all") {
      console.log("dsd",type)
     setselectedFilter(data)
     
    }else{
      const filtereddata=data.filter(item=>(
        item.type==type
    ))
        setselectedFilter(filtereddata)
    }
  }

useEffect(()=>{

 

getHomeData()

  },[searchkey])

  useEffect(()=>{

 
filterData("all")
    
      },[data])

      //search data
         
    
    //  


  

 // const[Data,setData]=useState()

//  const FilterData=(cat)=>{
//   const newval=data.filter((val)=>{
//     if ( val.type==cat) {
//        return(
//    val.type==cat
//    ) 
//     }else{
//       return setData(data)
//     }showalldata(data)
  
//   })
//   setData(newval)
//  }
// const Alldatashow=()=>{
//   return(
//     setData(data)
//   )
 
// }






  return (
    <>{Loading?<Loader/>:
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
 <Option 
    filterData={filterData}
    // setData={setData}
    // Alldatashow={Alldatashow}    
    />
    <Container>

   
 <div className='mt-4 g-cols-3'>
      <div className='d-flex  gap-3 flex-wrap '>
        {
          
          selectedFilter? selectedFilter.map((item,index)=>(
            
            <Link to={`/place/`+item._id}> 
        <div data-aos="fade-zoom-in"  data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"> 
        <MDBCard className='shadow-0 bg-image hover-zoom hover-shadow mb-4' style={{width:"300px"}}>
      <MDBCardImage className='rounded' src={`${SERVER_URL}/uploads/${item.addedphotos[0]}`}  alt='...' height={300} width={320} />
      <div className='float-start mt-2'>
      <div>
        <div ><span className='fw-bold text-truncate'> {item.title}</span>
        <br />
        <span className='text-secondary fw-light'>{item.place}</span><br />

        <span className=' fw-bolder'>INR { item.price}/<span className='fw-light'>night</span></span>
        </div>
        
        </div>
      </div>
      
    </MDBCard>
    </div>
        </Link> 

          )):<div ><p className='text-danger'>no data</p></div>
      

        
        }

       
       
        

      </div>
    </div> 
   
    </Container>

   
</>

     }</>
  )
}

export default Index