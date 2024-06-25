import { commenAPI } from "./CommenApi"
import { SERVER_URL } from "./Server_Url"

export const registerAPI=async(users)=>{

    return await commenAPI("POST",`${SERVER_URL}/user/register`,users,"")
}

export const loginAPI=async(users)=>{

    return await commenAPI("POST",`${SERVER_URL}/user/login`,users,"")
}

export const AddLocationdata=async(reqBody,reqHeader)=>{

    return await commenAPI("POST",`${SERVER_URL}/index/addlocation`,reqBody,reqHeader)
}
// export const uploadimg=async(reqBody,reqHeader)=>{

//     return await commenAPI("POST",`${SERVER_URL}/upload`,reqBody,reqHeader)
// }

export const getUseraddedLocation=async(reqHeader)=>{
    return await commenAPI("GET",`${SERVER_URL}/index/addedhistory`,"",reqHeader)
}

// get single data for editing

export const getEditingData=async(id)=>{
    return await commenAPI("GET",`${SERVER_URL}/index/addedhistory/${id}`,"","")
}

//edit single  location details 
export const handleUpdateLocation=async(id,reqBody,reqHeader)=>{
    return await commenAPI("PUT",`${SERVER_URL}/index/addedhistory/edit/${id}`,reqBody,reqHeader)
}
//delete single data
export const handledeleteLocation=async(id,reqHeader)=>{
    return await commenAPI("DELETE",`${SERVER_URL}/index/addedhistory/delete/${id}`,{},reqHeader)
}
//fetch home data all
export const handlefetchhomedata=async(searchkey)=>{
    return await commenAPI("GET",`${SERVER_URL}/index/home?search=${searchkey}`,"","")
}
//fetch single page details 
export const fetchSinglePageDetails=async(id)=>{
    return await commenAPI("GET",`${SERVER_URL}/place/${id}`,"","")
}
//booking
export const handlebook=async(reqBody,reqHeader)=>{
    return await commenAPI("POST",`${SERVER_URL}/place/book`,reqBody,reqHeader)
}
//get booking user History
export const getAllBookings=async(reqHeader)=>{
    return await commenAPI("GET",`${SERVER_URL}/mybookings`,"",reqHeader)
}
//delete a single booking data

export const dropBooking=async(id,reqHeader)=>{
    return await commenAPI("DELETE",`${SERVER_URL}/delete/${id}`,{},reqHeader)
}

//adminLogin
export const AdminLogin=async(admin)=>{
    return await commenAPI("POST",`${SERVER_URL}/admin`,admin,"")
}
//adminregister

export const AdminRegister=async(admin)=>{
    return await commenAPI("POST",`${SERVER_URL}/admin/register`,admin,"")
}

//fetch All user

export const FetchAllUser=async()=>{
    return await commenAPI("GET",`${SERVER_URL}/admin/dashboard`,"","")
}
//drop single  user

export const dropSingleUser=async(id,reqHeader)=>{
    return await commenAPI("DELETE",`${SERVER_URL}/admin/dashboard/${id}`,{},reqHeader)
}
//get all posts
export const GetAllLocation=async()=>{
        return await commenAPI("GET",`${SERVER_URL}/admin/packages`,"","")

}
//get all bookings
export const GetAllBooking=async()=>{
    return await commenAPI("GET",`${SERVER_URL}/admin/reveniew`,"","")
}



