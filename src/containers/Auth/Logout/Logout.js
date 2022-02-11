import React, { Component } from 'react';
import { Navigate  } from 'react-router-dom';

function Logout (){
    return ( <Navigate  to="/" />);
}
export default Logout;
