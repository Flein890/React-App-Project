import { useState } from "react";
import { useSelector } from "react-redux";


export const addItemToCart =(cartItems, product) => {
    const productInCart = cartItems.find(item => item.id ===product.id );
//     console.log(productInCart)
//     console.log(cartItems)
    if (productInCart) {
        return  cartItems.map(item =>
            item.id===productInCart.id 
            ? {...item,quantity: item.quantity+1}
            :item
            
            );
    }

    return [...cartItems, {...product,quantity:1}]
};

export const removeItemFromCart = (cartItems,id,prodState) => {

    const productToRemove= cartItems.find(item => item.id === id.id )
    
    // const prodState = useSelector((state) => state.productModal.remove)
    // console.log(prodState)

    let toRemove = null;

    const $button = document.querySelector('.remove');
    console.log($button)

    if(productToRemove.quantity === 1){
    //   toRemove = window.confirm(`Are you sure you want to remove ${productToRemove.name} from your cart?`); //hacer que la pregunta me de confirmacion desde el DOM    
         toRemove = prodState;
} 
    console.log(toRemove)

    if(productToRemove.quantity>1 )
    return cartItems.map(item =>
        item.id ===productToRemove.id
        ?   {...item, quantity: item.quantity-1} 
        : item
        );

    if(!toRemove){
        return cartItems.map(item =>
            item.id ===productToRemove.id
            ?   {...item, quantity: item.quantity=1} 
            : item
            );
    }
   
   
    return cartItems.filter(item=> item.id !==productToRemove.id)
};


export const roundToTwoDecimal = (number) => {
  // Round the number to two decimal places
    // and convert it to a string with two decimal places
    return (Math.round(number * 100) / 100).toFixed(2);
}
