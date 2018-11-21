import React from 'react';
import { Link } from "react-router-dom";
import PT from 'prop-types';

import { Field, Form } from "react-final-form";

import { FormInput } from "../../../components/Forms/FormInputView";
import { Container, FormBottom, ResError } from "../../../components/Forms/FormsStyles";
import { isEmail, validLength } from "../../../components/Forms/validators";
import { Button } from "../../../components/Buttons/Button";



const LoginSceneView = ({
  onSubmit,
  buttonBackgroundColor,
}) => (

  <Container>
    <Form
      onSubmit={ onSubmit }
      render={ ( { handleSubmit, submitError } ) => (

        <div>
          <Field
            name="email"
            validate={ isEmail }
          >
            {({ input, meta }) => (
              <FormInput
                {...input}
                meta={meta}
                type='text'
                placeholder='Enter your email...'
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

          {submitError && <ResError>{ submitError }</ResError>}

          <FormBottom>


            <Button
              onClick={ handleSubmit }
              buttonBackgroundColor={buttonBackgroundColor}
            >
              Login
            </Button>


            <div>
              <p>
                Haven't account? <Link to='/register'> Register</Link>
              </p>
              <p>
                Forgot Password? <Link to='/auth/restore'> Restore</Link>
              </p>

            </div>
          </FormBottom>
        </div>
      )}
    />
  </Container>
);

LoginSceneView.propTypes = {
  onSubmit: PT.func.isRequired,
  buttonBackgroundColor: PT.string.isRequired,
};

export default LoginSceneView;


