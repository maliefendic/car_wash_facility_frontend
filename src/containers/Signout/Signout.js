import React,{useContext, useEffect} from 'react'
import { WashContext } from "../../context/Provider";
const actions= {
    SET_ROLE:"SET_ROLE",
  SET_USER_ID:"SET_USER_ID"
}

function Signout() {
    const {role, userId, dispatch}=useContext(WashContext)
    useEffect(() => {
        window.location.reload();
      }, []);
    return (
        <div>
            <h1>Sign Out</h1>
        </div>
    )
}

export default Signout;