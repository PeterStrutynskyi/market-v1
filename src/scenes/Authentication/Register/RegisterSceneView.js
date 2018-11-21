import React from 'react';
import { Link } from "react-router-dom";
import PT from 'prop-types';

import { Field, Form } from "react-final-form";

import { FormInput } from "../../../components/Forms/FormInputView";
import { isEmail, required, validLength } from "../../../components/Forms/validators";
import { Container, FormBottom, ResError } from "../../../components/Forms/FormsStyles";
import { Button } from "../../../components/Buttons/Button";


const RegisterSceneView = ({
  onSubmit,
  buttonBackgroundColor
}) => (

  <Container>
    <Form
      onSubmit={ onSubmit }
      render={ ( { handleSubmit, submitError } ) => (
        <div>
          <Field
            name="firstName"
            validate={ required }
          >
            {({ input, meta }) => (
              <FormInput
                {...input}
                meta={meta}
                type='text'
                placeholder='What is your First Name?'
                label='First Name'
              />
            )}
          </Field>

          <Field
            name="lastName"
            validate={ required }
          >
            {({ input, meta }) => (
              <FormInput
                {...input}
                meta={meta}
                type='text'
                placeholder='What is your Last Name?'
                label='Last Name'
              />
            )}
          </Field>

          <Field
            name="email"
            validate={ isEmail }
          >
            {({ input, meta }) => (
              <FormInput
                {...input}
                meta={meta}
                type='text'
                placeholder='What is your email?'
                label='Email'
              />
            )}
          </Field>

          <Field
            name="password"
            validate={ (value) => validLength(value, 8) }
          >
            {({ input, meta }) => (
              <FormInput
                {...input}
                meta={meta}
                type='password'
                placeholder='Enter your password...'
                label='Password'
              />
            )}
          </Field>

          {submitError && <ResError>{submitError}</ResError>}

          <FormBottom>
            <Button
              onClick={ handleSubmit }
              buttonBackgroundColor={buttonBackgroundColor}
            >
              Register
            </Button>



            <div>
              Registered?
              <Link to='/login'> Login</Link>
            </div>
          </FormBottom>
        </div>
      )}
    />
  </Container>
);

RegisterSceneView.propTypes = {
  onSubmit: PT.func.isRequired,
  buttonBackgroundColor: PT.string.isRequired,
};

export default RegisterSceneView;


