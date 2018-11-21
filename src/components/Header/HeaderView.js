import React from 'react';
import { Link } from "react-router-dom";
import PT from 'prop-types';

import { NavList, MenuItem, NavLinkS, BottomHeaderWrapper, SearchForm, SearchFormText, SearchFormSubmit, Cart, User, Logout } from './styles';
import { routes } from "../../routes/constants";
import * as Api from "../../api/Api";


const staticNavLinks = [
  {
    label: 'Home',
    to: routes.home
  },
  {
    label: 'About',
    to: routes.about
  },
  {
    label: 'Contact',
    to: routes.contact
  },
  {
    label: 'Terms and Conditions',
    to: routes.termsAndConditions
  },
  {
    label: 'Privacy Policy',
    to: routes.privacyPolicy
  },
];

const HeaderView = ({
   cartItemsCount,
   currentUser,
   resetUser,
}) => {

  return(
    <>
      <NavList>
        {
          staticNavLinks.map(( { label, to } ) => (
              <MenuItem key = { label } >
                <NavLinkS
                  exact
                  to={ to }
                  activeStyle={{
                    boxShadow: "inset 0 2px #0095c6"
                  }}
                >
                  { label }
                </NavLinkS>
              </MenuItem>
            )
          )
        }

        {
           Object.keys(currentUser).length === 0 ?
            <MenuItem>
              <NavLinkS
                exact
                to={ routes.login }
                activeStyle={{
                  boxShadow: "inset 0 2px #0095c6"
                }}
              >
                Login
              </NavLinkS>
            </MenuItem>
            :
            <>
            <User>
              {currentUser.firstName} {currentUser.lastName}
            </User>

            <MenuItem/>
            <Logout
              onClick={() => {
              resetUser();
              Api.removeToken();
            }}
            >
              Logout
            </Logout>
            </>
        }
      </NavList>


      <BottomHeaderWrapper>
        <Link to={ routes.home }>
          <img src="https://tehnoezh.ua/bitrix/templates/techno-ezh-new/img/2015/logo.svg" alt='logo'/>
        </Link>
        <SearchForm >
          <SearchFormText type="text" placeholder="Search..." />
          <SearchFormSubmit type="submit" value="" />
        </SearchForm>
        <Cart
          to={ {
            pathname: routes.cart,
            state: { modal: true }
          } }
        >
          Cart ({ cartItemsCount })
        </Cart>
      </BottomHeaderWrapper>
    </>
  )
};

HeaderView.propTypes = {
  cartItemsCount: PT.number.isRequired,
  currentUser: PT.object.isRequired,
  resetUser: PT.func.isRequired,
};

export default HeaderView;