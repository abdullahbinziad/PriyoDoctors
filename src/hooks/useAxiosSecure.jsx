import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';


const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
})

const useAxiosSecure = () => {

const {handleSignOut} = useContext(UserContext);
const nevigate = useNavigate();


useEffect(()=>{
    axiosSecure.interceptors.request.use((config)=>{
        const token = localStorage.getItem('access-token');
        if(token){
            config.headers.Authorization = ` Bearer ${token}`;
        }
        return config;
    });

    axiosSecure.interceptors.response.use(
        (response)=> response, 
        async( error)=>{
if(error.response && (error.response.status === 401 || error.response.status === 403)){
    await handleSignOut();
    nevigate('/login')
}

return Promise.reject(error);
        }
    )
},[handleSignOut,nevigate]);



    return [axiosSecure];
};

export default useAxiosSecure;