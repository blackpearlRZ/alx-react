import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Footer = ({ user }) => {

  return (
    <>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {user && (
        <a href="#">Contact us</a>
      )}
    </>
  );
};

Footer.propTypes = {
  user: PropTypes.object
};

Footer.defaultProps = {
  user: null
}

export const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user'),
  };
};

export { Footer };

export default connect(mapStateToProps)(Footer);