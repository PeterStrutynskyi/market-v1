import React from 'react';
import {ProductList} from "../../components/Products/ProductList";
import ProductItem from "../../components/Products/ProductItem/ProductItemContainer";
import {formatRoute} from "react-router-named-routes";
import {routes} from "../../routes/constants";


import styled from 'styled-components';

import PT from 'prop-types';
import {ButtonWithIcon} from "../../components/Buttons/ButtonWithIcon";
import Container from "../../components/SceneCommonStyles/Container";


const AdminMainSceneView = ({
   products,
   history,
}) => (

  <Container>
    <NewProduct>
      <ButtonWithIcon
        onClick={() => history.push(routes.adminNewProduct)}
        buttonBackgroundColor='#0089cf'
        iconUrl='/assets/images/plus.svg'
      >
        Add new Product
      </ButtonWithIcon>
    </NewProduct>

    <ProductList>
      { products.map((item) =>
        <ProductItem
          key={item.id}
          item={item}
          productLink={formatRoute(routes.adminProduct, { id: item.id })}
          buttonBackgroundColor='#0089cf'
          iconUrl='/assets/images/edit.svg'
          onActionButtonClick={() => history.push(formatRoute(routes.adminProduct, { id: item.id }))}
          actionButtonTitle="Edit"
        />
      ) }
    </ProductList>
  </Container>
);

AdminMainSceneView.propTypes = {
  products: PT.array.isRequired,
  history: PT.object.isRequired,
};

export default AdminMainSceneView;



const NewProduct = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;