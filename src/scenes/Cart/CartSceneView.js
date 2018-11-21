import React from 'react';
import { formatRoute } from "react-router-named-routes";
import PT from 'prop-types';
import styled from "styled-components";

import { routes } from "../../routes/constants";

import { ProductCartList } from "../../components/Products/ProductCartList";
import { ProductCartItemView } from "../../components/Products/ProductCartItem/ProductCartItemView";
import { ButtonWithIcon } from "../../components/Buttons/ButtonWithIcon";


const BottomCart = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const CartSceneView = ({
   items,
   totalPrice,
   onChange,
   removeFromCart,
}) => (

  <>
    <ProductCartList>
      { items.map((item) =>
        <ProductCartItemView
          key={item.id}
          item={item}
          productLink={formatRoute(routes.singleProduct, { id: item.id })}
          onActionRemoveButtonClick={removeFromCart}
          onChange={onChange}
        />
      ) }
    </ProductCartList>

    <hr/>
    <BottomCart>
      Total Price: { totalPrice }
    </BottomCart>

    <BottomCart>
      <ButtonWithIcon
        iconUrl='/assets/images/buy.svg'
        buttonBackgroundColor='#0089cf'
      >
        Buy
      </ButtonWithIcon>
    </BottomCart>
  </>
);

CartSceneView.propTypes = {
  items: PT.array.isRequired,
  totalPrice: PT.number.isRequired,
  onChange: PT.func.isRequired,
  removeFromCart: PT.func.isRequired,
};

export default CartSceneView;