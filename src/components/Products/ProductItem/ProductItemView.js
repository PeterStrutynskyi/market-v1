import React from 'react';
import { Link } from "react-router-dom";
import PT from 'prop-types';

import { Product, ProductImage, Title, Price } from './styles';
import { ButtonWithIcon } from '../../Buttons/ButtonWithIcon';


export const ProductItemView = ({
  item,
  productLink,
  onActionButtonClick,
  actionButtonTitle,
  iconUrl,
  buttonBackgroundColor
}) => {
  const { image, title, price } = item;

  return (
    <Product>
      <Link to={productLink}>
        <ProductImage src={image}/>
        <Title>
          {title}
        </Title>
      </Link>
      <Price>
        Price: {price} uah.
      </Price>
      <ButtonWithIcon onClick={() => onActionButtonClick(item)} iconUrl={iconUrl} buttonBackgroundColor={buttonBackgroundColor}>
        {actionButtonTitle}
      </ButtonWithIcon>
    </Product>
  );
};



ProductItemView.propTypes = {
  item: PT.object.isRequired,
  productLink: PT.string.isRequired,
  onActionButtonClick: PT.func.isRequired,
  actionButtonTitle: PT.string.isRequired,
  iconUrl: PT.string.isRequired,
  buttonBackgroundColor: PT.string.isRequired,
};
