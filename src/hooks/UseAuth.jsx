import React, { useContext } from 'react';
import { UserContext } from '../AuthProvider/AuthProvider';

const UseAuth = () => {
  const auth= useContext(UserContext);
  return auth ; 
};

export default UseAuth;