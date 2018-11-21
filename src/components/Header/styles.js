import styled, { css } from "styled-components";
import {Link, NavLink} from "react-router-dom";

const navLinkStyles = css`
  padding: 10px 13px;
  color: #000;
  height: 16px;
  display: inline-block;
  text-decoration: none;
  
  &:hover,
  &:focus {
    box-shadow: inset 0 2px #0095c6; 
  }
`;

export const NavList = styled.div`
  width: 100%;
  height: 40px;
  display:flex;
  justify-content: space-between;
  background: url(/assets/images/shadow.png) bottom center no-repeat;
  padding-bottom: 3px;
`;


export const MenuItem = styled.div`
  //padding: 10px 10px 10px 10px;
`;

export const NavLinkS = styled(NavLink)`
  ${navLinkStyles}
`;


export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const SearchFormText = styled.input`     
    width: 300px;
    height: 26px;   
    padding: 10px;
    outline: none;
    font-size: 12px;
    box-sizing: border-box;
    color: #666;
    border: 1px solid #e3e3e3;
`;

export const SearchFormSubmit = styled.input`      
    background: url(/assets/images/search-bt.png) no-repeat;
    width: 43px;
    height: 26px;  
    border: none;
    cursor: pointer;
`;

export const BottomHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px; 
`;

export const Cart = styled(Link)`
  position: relative;
  border: 1px dashed #b4b4b4;
  padding: 0px 13px 0 35px;
  height: 36px;
  line-height: 36px;
  color: #666666;
  font-size: 13px;
  text-decoration: none;
  
  &:hover,
  &:focus {
     border-color: #41afe8;
  }
  
  &:after {
    content: '';
    background: url(/assets/images/basket.svg) center left no-repeat;
    width: 21px;
    height: 21px;
    position: absolute;
    left: 10px;
    top: 7px;    
  }
`;

export const Logout = styled.button`
  ${navLinkStyles};
  font-size: 16px;
  border: none;
  background: none;
`;

export const User = styled.div`
  padding-top: 10px;
  text-transform: uppercase;
  color: blue;
`;
