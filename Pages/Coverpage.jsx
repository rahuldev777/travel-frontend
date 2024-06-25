import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Pages/cover.css"
import image from "../public/front2.png"
import { MDBCard, MDBCardImage } from 'mdb-react-ui-kit';
import price from "../public/price.png"
import banner from  "../public/pngwing.png"
import payment from  "../public/payment.png"
import suitecase from  "../public/travel.png"
import car from  "../public/car.png"
import { Link } from 'react-router-dom';
import Loader from './Loader'




function Coverpage() {
  const[Loading,setLoading]=useState(false)
  useEffect(()=>{


    setLoading(true)
    
    setTimeout(() => {
      setLoading(false)
    }, 3000);
    },[])
  return (
    <>
    {
      Loading?<Loader />:
<>
  
       <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand><img src="Components\icon\travel-removebg-preview.png" alt="" height={50} srcset="" /></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='m-1 fw-bolder'>Home</Nav.Link>
            <Nav.Link href="#offer" className='m-1 fw-bolder'>Services</Nav.Link>
            <Nav.Link href="#Top" className='m-1 fw-bolder'>Top Destination</Nav.Link>
            <Nav.Link href="#Book"  className='m-1 fw-bolder'>Enjoy Trip</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='container p-4  rounded mt-5' id='home' style={{height:"60vh"}}>
       
        <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-lg-6 mt-5  bg-light rounded d-flex justify-content-center align-items-center' style={{height:"300px"}}>
                <div>
                    <p className='text-danger fw-bolder'>Best Destination Around The World</p>
                    <h2 className='fw-bolder'>Travel Enjoy <br /> And Live a New <br /> And Full Life</h2>
                    <div>
                        <p>

Fly Find invites you to embark on unforgettable journeys, discovering the world's wonders. From Bali's beaches to the Himalayas' peaks, we curate immersive travel experiences tailored to your wanderlust. Dive into vibrant cultures, savor exotic cuisines, and create lasting memories responsibly. Let us guide you to extraordinary destinations with care</p>
                    </div>
                    <div>
                       <Link to={'/home'}className='btn btn-success'>Explore</Link> 
                    </div>
                </div>
            </div>
            <div className='col-lg-6' style={{height:"300px",position:"relative"}}>

                <div className='d-flex align-items-center justify-content-center '>

                    <img src={image} className='banner' alt="" srcset="" height={500} />

                </div>
 <div className='plane'>

 </div>
 <div className='plane1'>

 </div>
 <div className='clouds'>

</div>
            </div>

        </div>

      </div>

      <div className='container  bg-light rounded ' id='offer' style={{height:"60vh",marginTop:"10%"}}>

        <h2 className='text-center text-dark fw-bolder '>What We Offer</h2>

      <div class="row mt-2">
  <div class="col-sm-3">
    <div class="card mt-5 bg-image hover-zoom shadow-lg">
      <div class="card-body">
        <div className='text-center'><img src="https://t4.ftcdn.net/jpg/04/79/83/59/360_F_479835987_hCtbDjghmZHkRyvsdUG82Hs2pbsgVlkr.jpg" alt="" height={90} width={100} srcset="" /></div>
        <h5 class="card-title text-center fw-bolder">Book Resort</h5>
        <p class="card-text">Book your dream resort getaway with Fly Find for an unforgettable experience of luxury, relaxation, and adventure in paradise.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card mt-5 bg-image hover-zoom shadow-lg">
      <div class="card-body">
        <div className='text-center'><img src="https://i.pinimg.com/564x/f3/52/9d/f3529d7b854ac9bb353d7361afa7aaaf.jpg" height={90} width={100} alt="" srcset="" /></div>
        <h5 class="card-title text-center fw-bolder">Add your Location</h5>
        <p class="card-text">
Host your place with Fly Find and unlock a world of opportunities, connecting with travelers seeking unique accommodations and experiences.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card mt-5 bg-image hover-zoom shadow-lg">
      <div class="card-body">
        <div className='text-center'><img src="https://cdn.vectorstock.com/i/preview-1x/79/40/search-all-category-items-icon-sign-symbol-vector-42477940.jpg" alt="" srcset="" height={80} width={100} /></div>
        <h5 class="card-title text-center fw-bolder">Search by category</h5>
        <p class="card-text">

Fly Find simplifies your search by categorizing destinations, from tropical beaches to mountain retreats, ensuring your perfect getaway is just a click away.</p>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card mt-5 bg-image hover-zoom shadow-lg">
      <div class="card-body">
        <div className='text-center'><img src={price} alt="" height={90} width={100} srcset="" /></div>
        <h5 class="card-title text-center fw-bolder">Affordable Price</h5>
        <p class="card-text">

Fly Find offers unbeatable prices, ensuring budget-friendly travel without compromising on quality, making your dream vacation a reality..</p>
      </div>
    </div>
  </div>
</div>

      </div>

      <div className='container ' id='Top' style={{height:"60vh"}}>
        <h2 className='text-center mb-5 text-dark fw-bolder'>Top Destination</h2>
        <div className='row mt-1'>
          <div className='col-lg-4'> 

          <div data-aos="fade-zoom-in"  data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"> 
        <MDBCard className='shadow-lg bg-image hover-zoom hover-shadow mb-4 ' style={{width:"340px"}}>
      <MDBCardImage className='rounded' src={`https://cdn.pixabay.com/photo/2022/02/15/13/00/building-7014904_1280.jpg`}  alt='...' height={300} width={350} />
      <div className='float-start mt-2 p-1'>
      <div>
        <div ><span className='fw-bold text-truncate'>Discover iconic landmarks like Big Ben, <br />Buckingham Palace, and the London Eye. <br />Immerse in history, culture, and <br />vibrant city life</span>
        <br />
        <span className='text-secondary fw-light'>London,England</span><br />

        <span className=' fw-bolder'>₹24000/<span className='fw-light'>night</span></span>
        </div>
        
        </div>
      </div>
      
    </MDBCard>
    </div>

          </div>
          <div className='col-lg-4'>
            
          <div data-aos="fade-zoom-in"  data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"> 
        <MDBCard className='shadow-lg bg-image hover-zoom hover-shadow mb-4' style={{width:"340px"}}>
      <MDBCardImage className='rounded' src={`https://cdn.pixabay.com/photo/2020/04/21/19/30/rome-5074421_1280.jpg`}  alt='...' height={300} width={350} />
      <div className='float-start mt-2 p-1'>
      <div>
        <div ><span className='fw-bold text-truncate'>Explore ancient wonders like the<br /> Colosseum, Vatican City, and Trevi Fountain. <br /> Immerse in Rome's history, <br />art, and culture!</span>
        <br />
        <span className='text-secondary fw-light'>Rome,Italy</span><br />

        <span className=' fw-bolder'>₹24000/<span className='fw-light'>night</span></span>
        </div>
        
        </div>
      </div>
      
    </MDBCard>
    </div>

          </div>
          <div className='col-lg-4'>
          <div data-aos="fade-zoom-in"  data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"> 
        <MDBCard className='shadow-lg bg-image hover-zoom hover-shadow mb-4' style={{width:"340px"}}>
      <MDBCardImage className='rounded' src={`https://cdn.pixabay.com/photo/2014/06/20/13/11/sydney-opera-house-373144_1280.jpg`}  alt='...' height={300} width={350} />
      <div className='float-start mt-2 p-1'>
      <div>
        <div ><span className='fw-bold text-truncate'>Explore ancient wonders like the<br /> Colosseum, Vatican City, and Trevi Fountain. <br /> Immerse in Rome's history, <br />art, and culture!</span>
        <br />
        <span className='text-secondary fw-light'>Sydney,Australian</span><br />

        <span className=' fw-bolder'>₹24000/<span className='fw-light'>night</span></span>
        </div>
        
        </div>
      </div>
      
    </MDBCard>
    </div>

          </div>

        </div>

        
      </div>

      <div className='container' id='Book' style={{height:"95vh",marginTop:"15%"}}>

        <div className='row'>
          <div className='col-lg-6'>
            <p className='text-success fs-4 mb-4'>Easy and Fast</p>
            <br />
            <br />

            <div className='d-flex flex-column '>
              <h3 className='text-start fw-bolder'>book your next trip <br /> in 3 Easy steps</h3>
                   <br />
              
              <p className='mt-2'> 
              <img className='travl rounded-circle me-2' src={payment} alt="Pineapple" style={{width:"100px",height:"90px", marginLeft:"15px"}} />
                  <h4 className='fw-bolder'>Choose Your Destination</h4>
                  Choose your dream destination effortlessly with Fly Find's user-friendly platform, making your travel decisions simple and stress-free.</p>

                   
              <p className='mt-2'> 
              <img className='travl rounded-circle ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIrIEcjRQOpsLJ7IGRG5Sn0gIzQ84cOKAqrz9DmC8XC6IqA-KQtte-GJ_2uDaEiOCz_g&usqp=CAU" alt="Pineapple" style={{width:"100px",height:"110px", marginLeft:"15px"}} />
                  <h4 className='fw-bolder'>Make Your Payment</h4>

                  
With Fly Find, make secure payments swiftly, ensuring seamless transactions for your travel bookings, making your journey hassle-free and convenient.</p>

                      
              <p className='mt-2'> 
              <img className='travl rounded-circle ' src={car} alt="Pineapple" style={{width:"100px",height:"100px", marginLeft:"15px"}} />
                  <h4 className='fw-bolder'>Reach Destination on Selected days</h4>
Reach your desired destination on your chosen dates hassle-free with Fly Find, ensuring your travel plans align perfectly every time.
                    </p>   

            </div>
          </div>

          
          <div className='col-lg-6 mt-5'>

          <img src={banner} alt="" srcset="" height={600} />
        </div>

        </div>

      </div>

      <div>

      </div>
      </>
  }
    </>
  )
}

export default Coverpage