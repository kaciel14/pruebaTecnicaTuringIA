import Axios from 'axios'

export const registerUser = async (username, password)=>{

    const data = {
        username,
        password,
        admin: '0'
    }
    const response = await Axios.post(`http://localhost:8080/addUser`, data)

    console.log('El message es: '+response.data.message)
    if(response.data.message){
        return true
    }else{
        return false
    }
}
