import React from 'react'
import { Overlay,ModalContainer, HeaderModal,CloseBtn,Content } from './ModalStyles'
import { IoClose } from "react-icons/io5";
import { toggleModal } from '../../redux/modalSlice';
import { useDispatch } from 'react-redux'

function Modal({children}) {
    const dispatch = useDispatch()
  return (
    <>
    <Overlay>
        <ModalContainer>
            <HeaderModal>
                <h3>Checkout</h3>
            </HeaderModal>
            <CloseBtn onClick={()=>dispatch(toggleModal())}><IoClose/></CloseBtn>
            <Content>{children}</Content>
          
        </ModalContainer>
    </Overlay>
    </>
  )
}

export default Modal