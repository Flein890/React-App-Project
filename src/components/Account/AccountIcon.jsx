import React from "react";
import {AccountUserStyled} from "./AccountIconStyles"
import { useSelector } from "react-redux";
import { toggleHiddenMenu } from "../../redux/userSlice";
import { useDispatch } from "react-redux";


function AccountIcon(){
    
    const dispatch = useDispatch()

    return(
    <AccountUserStyled onClick={() => dispatch(toggleHiddenMenu())}>
        <i className="fa-solid fa-user"></i>
    </AccountUserStyled>
    )
}

export default AccountIcon