import React from 'react';
import PT from "prop-types";

import { ButtonWithIcon } from "../../components/Buttons/ButtonWithIcon";

import {
  Product,
  ProductLeft,
  ProductRight,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductDescription,
} from './styles';

const ProductSceneView = ({
  product,
  itemsInCart,
  onActionAddButtonClick,
  onActionRemoveButtonClick,
}) => {
  const { image, title, price, description } = product;
  return (
    <Product>
      <ProductLeft>
        <ProductImage src={image}/>
      </ProductLeft>
      <ProductRight>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>{price}</ProductPrice>
        <ProductDescription>{description}</ProductDescription>

        {
           (itemsInCart.includes(product.id)) ?
              <ButtonWithIcon
                onClick={ () => onActionRemoveButtonClick(product) }
                buttonBackgroundColor='#cf0000'
                iconUrl='/assets/images/close.svg'
              >
                Remove from Cart
              </ButtonWithIcon>
            :
               <ButtonWithIcon
                 onClick={() => onActionAddButtonClick(product)}
                 buttonBackgroundColor='#0089cf'
                 iconUrl='/assets/images/add-to-cart-white.svg'
               >
                 Add to cart
               </ButtonWithIcon>
        }



      </ProductRight>
    </Product>
  );
};

ProductSceneView.propTypes = {
  product: PT.object.isRequired,
  itemsInCart: PT.array.isRequired,
  onActionAddButtonClick: PT.func.isRequired,
  onActionRemoveButtonClick: PT.func.isRequired,
};

export default ProductSceneView;
