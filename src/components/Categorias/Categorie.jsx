import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { selectCategory } from '../../redux/categoriesSlice'
import { CategorieToSelect } from './CategoriesStyles';

function Categorie({title,category}) {
  const {selectedCategory} = useSelector(state => state.categories);
  console.log(selectedCategory)
  const dispatch = useDispatch();
  return (
    <CategorieToSelect 
     selected={category === selectedCategory}
     onClick={() => dispatch(selectCategory(category))}>
       <h2>{title}</h2>
    </CategorieToSelect>
  )
}

export default Categorie