import React from 'react';
import {formatRoute} from "react-router-named-routes";

import { ProductList } from "../../components/Products/ProductList";
import ProductItem from "../../components/Products/ProductItem/ProductItemContainer";
import { routes } from "../../routes/constants";

import PT from 'prop-types';


const HomeSceneView = ({
   products,
   itemsInCart,
   removeFromCart,
   addToCart,
}) => (

  <ProductList>

    { products.map((item) => {
      if (itemsInCart.includes(item.id)) {
        return(
          <ProductItem
            key={item.id}
            item={item}
            productLink={formatRoute(routes.singleProduct, {id: item.id})}
            buttonBackgroundColor='#cf0000'
            iconUrl='/assets/images/close.svg'
            onActionButtonClick={removeFromCart}
            actionButtonTitle="Remove"
          />
        )
      }
      return(
        <ProductItem
          key={item.id}
          item={item}
          productLink={formatRoute(routes.singleProduct, {id: item.id})}
          buttonBackgroundColor='#0089cf'
          iconUrl='/assets/images/add-to-cart-white.svg'
          onActionButtonClick={addToCart}
          actionButtonTitle="Add to cart"
        />
      )
    }) }

  </ProductList>
);

HomeSceneView.propTypes = {
  products: PT.array.isRequired,
  itemsInCart: PT.array.isRequired,
  removeFromCart: PT.func.isRequired,
  addToCart: PT.func.isRequired,
};

export default HomeSceneView;

