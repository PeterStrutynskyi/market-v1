import React from 'react';
import PT from 'prop-types';

import styled from 'styled-components';
import { Form, Field } from 'react-final-form'

import { FormTextarea } from "../../Forms/FormTextarea";
import { Button } from "../../Buttons/Button";
import { isNumber, required } from "../../Forms/validators";
import AdminMainSceneView from "../../../scenes/AdminMain/AdminMainSceneView";
import {ResError} from "../../Forms/FormsStyles";


const Container = styled.div`
  max-width: 400px;
  margin: 50px auto 0 auto;
`;

const FormBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;



const ProductForm = ({
   product,
   leftButtonBackgroundColor,
   rightButtonBackgroundColor,
   leftButtonTitle,
   rightButtonTitle,
   onClickLeftButton,
   onClickRightButton,
}) => {

  let init = {};

  if ( product ) {
    init = {
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
    };
  }

  return (
    <Container>
      <Form
        initialValues={ init }
        onSubmit={ onClickLeftButton }
        render={ ( { handleSubmit, submitError } ) => (
          <div>
            <Field
              name="title"
              validate={ required }
            >
              {({ input, meta }) => (
                <FormTextarea
                  {...input}
                  meta={meta}
                  type='text'
                  placeholder='Title...'
                  label='Title'
                />
              )}
            </Field>

            <Field
              name="description"
              validate={ required }
            >
              {({ input, meta }) => (
                <FormTextarea
                  {...input}
                  meta={meta}
                  type='text'
                  placeholder='Description...'
                  label='Description'
                />
              )}
            </Field>

            <Field
              name="image"
              validate={ required }
            >
              {({ input, meta }) => (
                <FormTextarea
                  {...input}
                  meta={meta}
                  type='text'
                  placeholder='Image...'
                  label='Image (url)'
                />
              )}
            </Field>

            <Field
              name="price"
              validate={ isNumber }
            >
              {({ input, meta }) => (
                <FormTextarea
                  {...input}
                  meta={meta}
                  type='text'
                  placeholder='Price...'
                  label='Price (uah)'
                />
              )}
            </Field>

            {submitError && <ResError>{ submitError }</ResError>}
            <FormBottom>
              <Button
                buttonBackgroundColor={leftButtonBackgroundColor}
                onClick={ handleSubmit }
              >
                {leftButtonTitle}
              </Button>

              <Button
                buttonBackgroundColor={rightButtonBackgroundColor}
                onClick={ onClickRightButton }
              >
                {rightButtonTitle}
              </Button>

            </FormBottom>
          </div>
        )}
      />
    </Container>
  );
};


AdminMainSceneView.propTypes = {
  product: PT.object.isRequired,
  leftButtonBackgroundColor: PT.string.isRequired,
  rightButtonBackgroundColor: PT.string.isRequired,
  leftButtonTitle: PT.string.isRequired,
  rightButtonTitle: PT.string.isRequired,
  onClickLeftButton: PT.func.isRequired,
  onClickRightButton: PT.func.isRequired,
};


export default ProductForm;