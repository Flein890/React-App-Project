import React from "react";
import {AccountUserStyled} from "./AccountStyles"
import { useSelector } from "react-redux";


function Account(){
    
    //traemos el username del state
    const userName = useSelector((state) => state.user.currentUser.name)
    console.log(userName)

    return(
    <AccountUserStyled>
         {/* <span>{userName}</span> */}
        <i className="fa-solid fa-user"></i>
    </AccountUserStyled>
    )
}

export default Account