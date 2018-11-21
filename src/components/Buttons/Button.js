import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ buttonBackgroundColor }) => buttonBackgroundColor};
  color: #fff;
  position: relative;
  font-size: 14px;
  cursor: pointer;
  padding: 7px 30px 9px 30px;
  display: inline-block;
  border: none;
  
  &:hover,
  &:focus {
    background: #0077b4;
  }
`;

