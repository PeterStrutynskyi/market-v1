import React from 'react';
import styled from 'styled-components';

const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const ErrorMessage = styled.div`
  color: #ff3c2f;
  margin-top: 5px;
`;

const Input = styled.input`
  height: 40px;
  padding: 10px;
  outline: none;
  font-size: 14px;
  box-sizing: border-box;
  color: #666;
  border: 1px solid #e3e3e3;
`;

export const FormInput = ({ label, placeholder, type, input, meta, ...props }) => (
    <FormInputWrapper>
        <Label>{label}</Label>
        <Input {...input} type={type} placeholder={placeholder} {...props}/>
        {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
    </FormInputWrapper>
);
