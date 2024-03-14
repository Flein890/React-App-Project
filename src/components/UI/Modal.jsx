import React from 'react'
import { Overlay,ModalContainer, HeaderModal,CloseBtn,Content } from './ModalStyles'
import { IoClose } from "react-icons/io5";
// import { toggleModal } from '../../redux/modalSlice';
import { useDispatch } from 'react-redux'
// import { toggleProductModal } from '../../redux/productModal';
import { closeModalCheck } from '../../redux/modalSlice';
import { closeModalProduct } from '../../redux/productModal';
function Modal({children}) {
    const dispatch = useDispatch()
  return (
    <>
    <Overlay>
        <ModalContainer>
            <HeaderModal>
                <h3>Cart</h3>
            </HeaderModal>
            <CloseBtn onClick={()=> dispatch(closeModalCheck()) && dispatch(closeModalProduct())}><IoClose/></CloseBtn> 
            <Content>{children}</Content>
          
        </ModalContainer>
    </Overlay>
    </>
  )
}

export default Modal