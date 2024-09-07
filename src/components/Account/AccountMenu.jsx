import React from 'react'
import { useSelector } from 'react-redux'
import { AccountMenuStyled,Welcome,LogOutBtn } from './AccountMenuStyled'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../redux/userSlice'
import { useEffect } from 'react'



function AccountMenu() {

  const dispatch = useDispatch();
  //------PROBANDO QUE EL USUARIO SE DESLOGUEE CORRECTAMENTE-------
  useEffect(() => {
    console.log(user)
  },[dispatch])
  //________________________________________________________________

     const isCartOpen = useSelector((state) => state.cart.isCartOpen);

    const isMenuVisible = useSelector((state)=> state.user.hiddenMenu) //estado del menu (t/f)
    const user = useSelector((state)=> state.user.currentUser) //nombre de usuario

  return (
  <>
        {!isMenuVisible && !isCartOpen && user !== null && <AccountMenuStyled><Welcome>Hello!</Welcome>{user.name}
        <LogOutBtn onClick={() => dispatch({type: 'user/setCurrentUser', payload: null})}>Log Out</LogOutBtn>
        </AccountMenuStyled>}
  </>
  )
}

export default AccountMenu
