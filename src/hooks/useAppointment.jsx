import React from 'react';
import UseAuth from './UseAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAppointment = () => {


    const {user,loading} = UseAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data:appointments =[], refetch } = useQuery({
        queryKey: ['appointments', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure(`/appointments?email=${user.email}`)
            console.log("res from axios", res);
            return res.data ; 
        }
    })

    return [appointments,refetch]
};

export default useAppointment;