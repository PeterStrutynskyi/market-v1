import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Field } from 'react-final-form'

import { FormInput } from '../../../components/Forms/FormInputView';
import { Button } from '../../../components/Buttons/Button';
import { isEmail } from "../../../components/Forms/validators";
import { Container, FormBottom, ResError } from "../../../components/Forms/FormsStyles";
import { FORM_ERROR } from "final-form";


const RememberScene = () => {

  function onSubmit() {
    return {
      [FORM_ERROR]: `Check your email, where you'll find instructions.`
    };
  }

  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit, submitError}) => (

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

            {submitError && <ResError>{submitError}</ResError>}

            <FormBottom>
              <Button
                onClick={ handleSubmit }
                buttonBackgroundColor='#0089cf'
              >
                Send
              </Button>
              <div>
                Back to
                <Link to='/'> Store</Link>
              </div>
            </FormBottom>
          </div>
        )}
      />
    </Container>
  );
};

export default RememberScene;

