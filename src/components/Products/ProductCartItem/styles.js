import styled from "styled-components";

export const Product = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  box-sizing: border-box;
`;

export const ProductImage = styled.img`
    width: auto;
    height: 70px;
    object-fit: cover ;
`;

export const Title = styled.div`
  font-weight: 500;
  line-height: 1.19;
  text-decoration: none;
  color:#000;
`;

export const Price = styled.div`
  font-size: 17px;
  color: #2f9ad0;
`;

export const ProductCount = styled.input`
  color: #2f9ad0;
  width: 50px;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: relative;
  font-size: 40px;
  background: transparent;
  border: sienna;
  color: #afacac;
  height: 30px;
  line-height: 0;
  cursor: pointer;
`;
