import React from 'react';
import { Link } from "react-router-dom";
import PT from 'prop-types';

import { Product, ProductImage, Title, Price, ProductCount, CloseButton } from './styles';

export const ProductCartItemView = ({
    item,
    productLink,
    onActionRemoveButtonClick,
    onChange,
}) => {
  const { image, title, price } = item;

  return (
    <Product>
      <ProductImage src={image}/>
      <Link to={productLink}>
        <Title>
          { title }
        </Title>
      </Link>
      <ProductCount type="number" value="1" onChange={onChange}/>
      <Price>
        Price: {price} uah.
      </Price>
      <CloseButton onClick={() => onActionRemoveButtonClick(item)}>&times;</CloseButton>
    </Product>
  );
};


ProductCartItemView.propTypes = {
  item: PT.object.isRequired,
  onActionRemoveButtonClick: PT.func,
  OnChange: PT.func,
  actionButtonTitle: PT.string,
};
