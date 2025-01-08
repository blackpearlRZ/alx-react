import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';

const Footer = () => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <>
            <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            {context.user.isLoggedIn && (
              <a href="#">Contact us</a>
            )}
          </>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Footer;