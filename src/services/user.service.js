import axios from 'axios'

export const userService = {
    addInterest
}


function addInterest(userId,tags){
    return  axios.post(`http://localhost:5000/api/users/update/${userId}`,{
        interests : tags
    })
}