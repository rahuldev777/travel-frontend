import React, { useState } from 'react'
import img from "../Components/icon/Parks.jpg"
import Artic from "../Components/icon/Artic.jpg"
import Countryside from "../Components/icon/countryside.jpg"
import desert from "../Components/icon/desert.jpg"
import farm from "../Components/icon/farms.jpg"
import Houseboat from "../Components/icon/Houseboat.jpg"
import island from "../Components/icon/island.jpg"
import lakefront from "../Components/icon/lakefront.jpg"
import lux from "../Components/icon/lux.jpg"
import Mansion from "../Components/icon/mansion.jpg"
import pools from "../Components/icon/pools.jpg"
import surfing from "../Components/icon/surfing.jpg"
import treehouse from "../Components/icon/treehouse.jpg"
import view from "../Components/icon/view.jpg"
import "../Components/option.css"
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function Options({filterData}) {
  const nationalpark= (props) => (
    <Tooltip id="button-tooltip" {...props}>
      National park
    </Tooltip>
  );
  const deserts = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Desert
    </Tooltip>
  );
  const pool = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Pool
    </Tooltip>

    
  );

  const castle = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Castle
    </Tooltip> 
  );

  const treehouses = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      TreeHouse
    </Tooltip> 
  );

  const views = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      View
    </Tooltip> 
  );

  const luxury = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Luxury
    </Tooltip> 
  );

  const beach= (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Beach Front
    </Tooltip> 
  );

  const farmhouse= (props) => (
    <Tooltip id="button-tooltip" {...props}>
    Farm House
    </Tooltip> 
  );

  const houseboat= (props) => (
    <Tooltip id="button-tooltip" {...props}>
   House Boat
    </Tooltip> 
  );

  const surfingg= (props) => (
    <Tooltip id="button-tooltip" {...props}>
   Surfing
    </Tooltip> 
  );

  const islands= (props) => (
    <Tooltip id="button-tooltip" {...props}>
   Island
    </Tooltip> 
  );

  const artic= (props) => (
    <Tooltip id="button-tooltip" {...props}>
   Artic
    </Tooltip> 
  );

  const countryside= (props) => (
    <Tooltip id="button-tooltip" {...props}>
   CountrySide
    </Tooltip> 
  );
  
  const all= (props) => (
    <Tooltip id="button-tooltip" {...props}>
   All
    </Tooltip> 
  );
       
  return (
    <>
       

    <div className='main  p-3 ' style={{height:"50px",width:"100%"}}>
   

      <div className="container d-flex  gap-4 ">

      <div className='me-3' style={{width:40}}>

<OverlayTrigger
placement="top"
delay={{ show: 250, hide: 400 }}
overlay={all}
>

<div className='icon mt-1 me-5' class="icon"    name="all" value="all"  alt="" srcset="" >
<i class="fa-solid fa-earth-americas fa-xl" name="all" onClick={()=>filterData("all")} style={{color: "#212121"}}  ></i>
</div>

</OverlayTrigger>
</div>
     
        <div className='' style={{width:"100px"}}>
          
            
          
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={nationalpark}
    >   
         <img className='icon' onClick={(e)=>filterData(e.target.name)}  name="National Park" src={img} alt=""  srcset="" height={30} width={30} />
     </OverlayTrigger>
        </div>
       
        <div style={{width:100}}>
        <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={deserts}
    >
         <img className='icon ' onClick={(e)=>filterData(e.target.name)} value="Desert" src={desert} alt="" name="Desert" srcset="" height={30} width={30} />
         </OverlayTrigger>
        </div>
        <div style={{width:100}}>
        <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={pool}
    >
         <img className='icon' name="Pool" onClick={(e)=>filterData(e.target.name)}  src={pools} alt="" srcset="" height={30} width={30} />
         </OverlayTrigger>
        </div>
        <div style={{width:100}}>
        <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={castle}
    >
       <img className='icon' name="Castle" onClick={(e)=>filterData(e.target.name)} src={Mansion} alt="" srcset="" height={30} width={30} />
       </OverlayTrigger>
        </div>
        <div style={{width:100}}>
        <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={treehouses}
    >

       <img className='icon' onClick={(e)=>filterData(e.target.name)} name="TreeHouse" src={treehouse} alt="" srcset="" height={30} width={30} />
        
       </OverlayTrigger>
        </div>
        <div style={{width:100}}>

        <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={views}
    >

        <img className='icon' name="View" onClick={(e)=>filterData(e.target.name)} src={view} alt="" srcset="" height={30} width={30} />
        
        </OverlayTrigger>
        </div>
        <div style={{width:100}}>
        <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={luxury}
    >
        <img className='icon' name="Luxury" onClick={(e)=>filterData(e.target.name)}  src={lux} alt="" srcset="" height={30} width={30} />
        </OverlayTrigger>
        </div>
        <div style={{width:100}}>
        <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={beach}
    >

        <img className='icon' src={lakefront} onClick={(e)=>filterData(e.target.name)} name="Beach Front" alt="" srcset="" height={30} width={30} />
        </OverlayTrigger>
        </div>
        <div style={{width:100}}>
        <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={farmhouse}
    >

         <img className='icon' src={farm} onClick={(e)=>filterData(e.target.name)} alt="" name="Farm House" srcset="" height={30} width={30} />
         </OverlayTrigger>
        </div>
        <div style={{width:100}}>
        <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={houseboat}
    >

        <img className='icon' src={Houseboat} onClick={(e)=>filterData(e.target.name)} name="House Boat"  alt="" srcset="" height={30} width={30} />
        </OverlayTrigger>
        </div>
        <div style={{width:100}}>
        <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={surfingg}
    >
        <img className='icon' src={surfing} onClick={(e)=>filterData(e.target.name)} name="Surfing" alt="" srcset="" height={30} width={30} />
        </OverlayTrigger>
        </div>
        <div style={{width:100}}>
        <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={islands}
    >
       <img className='icon' src={island} onClick={(e)=>filterData(e.target.name)} name="Island" alt="" srcset="" height={30} width={30} />
       </OverlayTrigger>
        </div>
        <div style={{width:100}}>
        <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={artic}
    >
       <img className='icon' src={Artic} onClick={(e)=>filterData(e.target.name)} name="Artic" alt="" srcset="" height={30} width={30} />
       </OverlayTrigger>
        </div>
        <div style={{width:100}}>
        <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={countryside}
    >

       <img className='icon' src={Countryside} onClick={(e)=>filterData(e.target.name)} name="Country Side"  alt="" srcset="" height={30} width={30} />
        
       </OverlayTrigger>
        </div>

       

       
       
    </div>
    
    </div>
   
    <hr className="hr shadow-3"  />
    </>
  )
}

export default Options