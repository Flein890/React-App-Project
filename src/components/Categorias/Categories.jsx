import React from 'react'
import Categorie from './Categorie'
import { useSelector } from 'react-redux'
import {CategoriesContainer} from './CategoriesStyles'

function Categories() {

const {categories} = useSelector(state => state.categories)
// console.log(categories)

  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <Categorie key={category.id} {...category} />
      ))}
    </CategoriesContainer>
  )
}

export default Categories