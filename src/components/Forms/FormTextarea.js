import React from 'react';
import styled from 'styled-components';

const FormTextareaWrapper = styled.div`
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

const Textarea = styled.textarea`
  height: 50px;
  padding: 10px;
  resize:vertical;
  outline: none;
  font-size: 14px;
  box-sizing: border-box;
  color: #666;
  border: 1px solid #e3e3e3;
`;

export const FormTextarea = ({ label, placeholder, input, meta, ...props }) => (
    <FormTextareaWrapper>
        <Label>{label}</Label>
        <Textarea {...input} placeholder={placeholder} {...props}/>
        {meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
    </FormTextareaWrapper>
);
