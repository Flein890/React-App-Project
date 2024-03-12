import React from 'react'
import { AddModalStyles } from './AddModalStyles'
import { CiCircleCheck } from "react-icons/ci";
import { useSelector } from 'react-redux';

function AddModal() {
  const addState = useSelector ((state) => state.add.translate)

  return (
<>
   

 {<>
    {addState && <>
      <AddModalStyles>
          Succesfully added to cart! <CiCircleCheck />
    </AddModalStyles>
      </>}
      </>} 
      </>
)
}

export default AddModal