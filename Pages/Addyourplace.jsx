import React, { useCallback, useEffect, useState } from 'react'
import "../Pages/place.css"
import { Button, Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { MDBInput } from 'mdb-react-ui-kit';
import "../Pages/addyourplace.css"
import { AddLocationdata, getEditingData, handleUpdateLocation } from '../src/Services/allAPI';
import { SERVER_URL } from '../src/Services/Server_Url';
import Loader from './Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Addyourplace() {

    const[Loading,setLoading]=useState(false)
    
    useEffect(()=>{
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 3000);
    },[])
    


    //     const uploadPhoto= async(e)=>{
    //         const files=e.target.files
    //        const reqBody= new FormData()
    //        for(let i=0;i<files.length;i++){
    //           reqBody.append("photos",files[i])
    //        }


    //        const reqHeader={
    //         "Content-Type":"multipart/form-data"
    //       } 
    // try{
    //      const result=await uploadimg(reqBody,reqHeader) 

    //        if(result.status==200){
    //        console.log(result)
    //        } else{
    //       //console.log(result.response.data)
    //     }

    // }catch(err){
    //     console.log(err)
    // }


    //     }

    
    const [images, setImages] = useState([])

    const handlefilechange = (e)=> {
        const files = Array.from(e.target.files);
        setImages(files);
   
        //console.log(image);
        
    }
 


    
    
    const [addLocation, setaddLocation] = useState({
        title: "",
        address: "",
        addedphotos: [],
        description: "",
        type: "",
        perks: "",
        extrainfo: "",
        checkin: "",
        checkout: "",
        maxguest: "",
        price: ""

    })


addLocation.addedphotos=images;


    // useEffect(()=>{

    //     if(addLocation.addedphotos.type=="image/jpg" || addLocation.addedphotos.type=="image/jpeg"||addLocation.addedphotos.type=="image/png" ){
    //    setpreview(URL.createObjectURL(addLocation.addedphotos));


    //     }else{
    //         alert("please insert following types")
    //         setpreview("")
    //         setaddLocation({...addLocation,addedphotos:""})


    //     }

    // },[addLocation.addedphotos]);

    //addeding location fn 

    const handleaddlocation = async () => {
        const { title, address, addedphotos, description, type, perks, extrainfo, checkin, checkout, maxguest, price } = addLocation

        if (!title || !address || !addedphotos || !description || !type || !perks || !extrainfo || !checkin || !checkout || !maxguest || !price) {

           toast.warn("Please complete all the fields.")
        } else {
            //api addlocation 

            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("address", address)
            reqBody.append("description", description)
            reqBody.append("type", type)
            reqBody.append("extrainfo", extrainfo)
            reqBody.append("checkin", checkin)
            reqBody.append("checkout", checkout)
            reqBody.append("maxguest", maxguest)
            reqBody.append("price", price)
perks.forEach((item)=>(
    reqBody.append("perks",item)
))
addedphotos.forEach((item)=>(
    reqBody.append("addedphotos",item)
))

            const token = sessionStorage.getItem("token");
            if (token) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`

                }
                try {

                    const result = await AddLocationdata(reqBody, reqHeader)
                    // console.log(result)

                    if (result.status == 200) {
                        //console.log(result.data);
                        console.log(result.data);
       toast.success("succesfully added ")
              
       setaddLocation({
        title: "",
        address: "",
        addedphotos: [],
        description: "",
        type: "",
        perks: [],
        extrainfo: "",
        checkin: "",
        checkout: "",
        maxguest: "",
        price: ""
    });
                    } else {
                        toast.warn(result.response.data)

                    }
                } catch (err) {
                console.log(err);
                }
            }
        }
    }


const[userimage,setUserimage]=useState([])
console.log(userimage);
    const[UserData,setUserData]=useState([])
    const{id}=useParams()
    
useEffect(()=>{

        const fetchData=async()=>{
            try{
                if (!id) {
       console.log("no id")
            }else{

                const result=await getEditingData(id)
                if(result.status==200){
                
                    setUserimage(result.data.map(item => item.addedphotos).flat());
                    setUserData(result.data)
                }else{
                    console.log(result)
                }

            }
        }catch(err){
            console.log(err)
        }
            
    }
    fetchData()

    },[id])


    useEffect(() => {
        
        UserData.forEach((item) => {
            setaddLocation((prevLocation) => ({
                ...prevLocation,
                title: item.title,
                address: item.address,
                addedphotos: item.addedphotos,
                description: item.description,
                type: item.type,
                perks: item.perks,
                extrainfo: item.extrainfo,
                checkin: item.checkin,
                checkout: item.checkout,
                maxguest: item.maxguest,
                price: item.price 
            }));
        });
    },[UserData]);

    // update existing data

    const handleUpdates=async()=>{
        const { title, address, addedphotos, description, type, perks, extrainfo, checkin, checkout, maxguest, price } = addLocation;

        if(!title || !address || !addedphotos || !description || !type || !perks || !extrainfo || !checkin || !checkout || !maxguest || !price){

            toast.warn("Please complete all the fields.")
        }else{

            
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("address", address)
            reqBody.append("description", description)
            reqBody.append("type", type)
            reqBody.append("perks", perks)
            reqBody.append("extrainfo", extrainfo)
            reqBody.append("checkin", checkin)
            reqBody.append("checkout", checkout)
            reqBody.append("maxguest", maxguest)
            reqBody.append("price", price)
         
            perks.forEach((item)=>(
                reqBody.append("perks",item)
            ))
            
   addedphotos.forEach((item)=>(
    reqBody.append("addedphotos",item)
))



// reqHeader
 const token=sessionStorage.getItem("token");
 console.log(token);
 if(token){
    try {
    const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
    }
  
    // api call for editinng single user
        const result = await handleUpdateLocation(id,reqBody, reqHeader)
    

        if (result.status == 200) {
            //console.log(result.data);
            console.log(result.data);
toast.success("updated successfully ")

} else {
        toast.warn(result.response.data)

        }
    } catch (err) {
         console.log(err);
    }

 }
        }
    }

const removePhoto=(item)=>{
    const updatedImages = [...images.filter((photo) => photo !== item)];
    setImages(updatedImages)
   
    
}

//perks

const handleToggle = (value) => {
    const newPerks = addLocation.perks.includes(value)
    ? addLocation.perks.filter(perk => perk !== value)
    : [...addLocation.perks, value];

  setaddLocation(prevState => ({
    ...prevState,
    perks: newPerks
  }));
  };

  console.log(addLocation.perks);

    return (
        <>
            <Container className='mt-5'>

                {Loading?<Loader/>:

            
                <form >

                    <h2 className='m-2'>Title</h2>
                    <p className='text-sm'>Title of your Place.should be short and cathchy as in advertisment</p>
                    <MDBInput id='form6Example2' label='Title, for Example:My Lovely Apt' value={addLocation.title} onChange={(e) => setaddLocation({ ...addLocation, title: e.target.value })} />
                    <hr className="hr" />
                    <h2 className='m-2'>Address</h2>
                    <p className='text-sm'>Title of your Place</p>
                    <MDBInput id='form6Example2' label='Address' value={addLocation.address} onChange={(e) => setaddLocation({ ...addLocation, address: e.target.value })} />
                    <hr className="hr" />
                    <h2 className='m-2'>Photos</h2>
                    <p className='text-sm'>Add only JPG,PNG,JPEG</p>

                    <div className=' col-lg-6 col-md-4 mt-2 '>
                        <div className='d-flex align-content-start gap-3 flex-wrap'>
{/* preview ? preview : */}
{
   images.map((item,index)=>(
      <>
      <div className="position-relative">
  <div className="position-absolute top-0 start-0">
    <button className=" rounded m-1 bg-dark opacity-50" type="button" onClick={() => removePhoto(item)}>
      <i className="fa-solid fa-trash p-2"></i>
    </button>
  </div>
  <img src={URL.createObjectURL(item)} key={index} alt="" height={200} width={200} />
</div>
  
      </>
      
    ))
}
{
    userimage.map((item,index)=>(
      <>
      <img src={`${SERVER_URL}/uploads/${item}`}   key={index} alt="image" height={200} width={200} />
        
      </>
      
        
   
    ))
}
                           {/* <img src={ "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-109353-338504.jpg&fm=jpg"} alt="" srcset="" height={200} width={200} />
                            <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-109353-338504.jpg&fm=jpg" alt="" srcset="" height={200} width={200} /> */}
                           
                        </div>
                        <label className='mt-2'>
{/* onChange={(e) => setImage(e.target.files)} */}
                            <label for="file-upload" class="custom-file-upload">
                                <i class="fa-solid fa-cloud-arrow-up"></i>Upload from your device
                            </label>
                            <input id="file-upload" type="file" onChange={handlefilechange}   multiple />
                            {/* <Button onClick={addimage}>aaddimg</Button> */}
                        </label>
                        <hr className="hr" />
                    </div>
                    <h2 className='m-2'>Description</h2>
                    <p className='text-sm'>description of your place</p>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={addLocation.description} onChange={(e) => setaddLocation({ ...addLocation, description: e.target.value })}></textarea>
                    <hr className="hr" />
                    <h2 className='m-2'>Select the Type Of your place</h2>
                    <p className='text-sm'>Luxury,villa,pool-front,surfing etc.....</p>
                    <select class="form-select" aria-label="Default select example" value={addLocation.type} onChange={(e) => setaddLocation({ ...addLocation, type: e.target.value })}>
                        <option selected>Open this select Type</option>
                        <option value="National Park">National Park</option>
                        <option value="Desert">Desert</option>
                        <option value="Pool">Pool</option>
                        <option value="Castle">Castle</option>
                        <option value="TreeHouse">TreeHouse</option>
                        <option value="View">View</option>
                        <option value="Luxury">Luxury</option>
                        <option value="Beach Front">Beach Front</option>
                        <option value="Farm House">Farm House</option>
                        <option value="House Boat">House Boat</option>
                        <option value="Surfing">Surfing</option>
                        <option value="Island">Island</option>
                        <option value="Artic">Artic</option>
                        <option value="Country Side">Country Side</option>
                    </select>
                    <hr className="hr" />

                    <h2 className='m-2'>perks</h2>
                    <p className='text-sm'>select all the perks of your place</p>
                    <div className='d-flex gap-4 col-2 col-lg-6'>
                        <label>
                            <input type="checkbox"  name='wifi' value="wifi-available" checked={addLocation.perks.includes("wifi")} onChange={()=>handleToggle("wifi")}  className='m-2' />
                            <i class="fa-solid fa-wifi"></i>
                            <span>Wifi</span>
                        </label>
                        <label>
                            <input type="checkbox" className='m-2' name='parking-available' value="parking-available" checked={addLocation.perks.includes("parking")} onChange={()=>handleToggle("parking")} />
                            <i class="fa-solid fa-square-parking"></i>
                            <span>Free Parking Spot</span>
                        </label>
                        <label>
                            <input type="checkbox" className='m-2' name='tv' value="tv-available" checked={addLocation.perks.includes("tv")} onChange={()=>handleToggle("tv")}  />
                            <i class="fa-solid fa-tv"></i>
                            <span>Tv</span>
                        </label>
                        <label>
                            <input type="checkbox" className='m-2' name='dog' value="dog-allowed"  checked={addLocation.perks.includes("dog")} onChange={()=>handleToggle("dog")} />
                            <i class="fa-solid fa-shield-dog"></i>
                            <span>Pets</span>
                        </label>
                        <label >
                            <input type="checkbox" name='pool' className='m-2' value="pool-available" checked={addLocation.perks.includes("pool")} onChange={()=>handleToggle("pool")} />
                            <i class="fa-solid fa-person-swimming "></i>
                            <span >Pool</span>
                        </label>

                    </div>
                    <hr className="hr" />

                    <h2 className='m-2'>Extra Info</h2>
                    <p className='text-sm'>House rules,etc</p>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={addLocation.extrainfo} onChange={(e) => setaddLocation({ ...addLocation, extrainfo: e.target.value })}></textarea>
                    <hr className="hr" />

                    <h2 className='m-2'>Check in & Check out Time</h2>
                    <p className='text-sm'>Add information about Check In and Check Out</p>

                    <div className='d-flex flex-start  justify-content-around g-1 '>
                        <div>
                            <p>Check in time</p>
                            <input type="text" placeholder='12:00' id="" value={addLocation.checkin} className='rounded' onChange={(e) => setaddLocation({ ...addLocation, checkin: e.target.value })} />

                        </div>
                        <div>
                            <p>Check Out time</p>
                            <input type="text" placeholder='1:00' id="" className='rounded' value={addLocation.checkout} onChange={(e) => setaddLocation({ ...addLocation, checkout: e.target.value })} />
                        </div>
                        <div>
                            <p>Max No of Guest</p>
                            <input type="text" placeholder='1:00' id="" className='rounded' value={addLocation.maxguest} onChange={(e) => setaddLocation({ ...addLocation, maxguest: e.target.value })} />

                        </div>
                    </div>
                    <hr className="hr" />
                    <h2 className='m-2'>Price per Night</h2>
                    <input type="number" placeholder='$100' id="" className='rounded' value={addLocation.price} onChange={(e) => setaddLocation({ ...addLocation, price: e.target.value })} />
                        

                        {id?   <button type="button" class="btn btn-primary btn-md btn-block rounded-pill mt-5 mb-5" style={{ background: "#F5385D" }} onClick={handleUpdates}>Edit and save</button>:

                   <Link to={''}> <button type="button" class="btn btn-primary btn-md btn-block rounded-pill mt-5 mb-5" style={{ background: "#F5385D" }} onClick={handleaddlocation}>Save</button></Link>

}
                </form> 
                }
        <ToastContainer />
            </Container>

        </>
    )
}

export default Addyourplace