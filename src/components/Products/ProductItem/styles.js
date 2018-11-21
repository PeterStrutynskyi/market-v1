import styled from 'styled-components';


export const Product = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  width: 184px;
  border-top: 1px solid white;
  border-bottom: 1px solid white; 
  padding: 10px;
  box-sizing: border-box; 
`;

export const ProductImage = styled.img`   
    width: auto;
    height: 140px;
    object-fit: cover ;
`;

export const Title = styled.div`   
  overflow: hidden;
  height: 40px;
  vertical-align: middle; 
  font-weight: 500;
  line-height: 1.19;
  text-decoration: none;
  color:#000;
  margin-top: 10px;
`;

export const Price = styled.div`   
  font-size: 17px;
  color: #2f9ad0; 
  height: 44px;
  vertical-align: middle;
  padding-top: 22px;
  margin-bottom: -11px;
`;

export const Button = styled.button`   
    background: #0089cf;
    color: #fff;
    position: relative;
    font-size: 14px;
    cursor: pointer;
    padding: 7px 10px 9px 40px;
    display: inline-block;
    border: none;
  
  &:after {
    content: '';
    background-image: url(/assets/images/add-to-cart-white.svg);
    background-repeat: no-repeat;
    margin: 0 5px;
    left: 5px;
    top: 7px;
    position: absolute;
    width: 18px;
    height: 18px;
    display: inline-block;
  }
`;
