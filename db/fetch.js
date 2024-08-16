import axios from "axios";
import { DB_url } from "./constants";

// export const registerFuncTest = axios.post(`${DB_url}/auth/register`,(data)=>{
//         name: data.name;
//         email:data.email;
//         password:data.password;   
// }).then(function(res){
//     console.log(res)
// }).catch(function(error){
//     console.log(error)
// })

export const registerFunc = async(name,email,password) =>{
    try {
        await axios.post(`${DB_url}/auth/register`,{
            name,
            email,
            password,
        });
        const user = await loginFunc(email,password);
        return user;
    } catch (error) {
        return alert(error.response.data.errors[0].msg)
    }
}

export const loginFunc = async(email,password)=>{
    try {
        const response = await axios.post(`${DB_url}/auth/login`,{
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return alert(error.response.data.msg)
    }
}

export const verifyUserFunc = async (email,code) =>{
    try {
        const res = await axios.patch(`${DB_url}/auth/verify`,{
            email,
            code
        });
        console.log("User verified")
        return res.data
    } catch (error) {
        console.error(error)
    }
}