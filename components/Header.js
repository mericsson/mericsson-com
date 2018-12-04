import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

  render() {
    return (
      <header className="site-header">
        <div className="wrapper">
          <Link to={'/'}>
            <span className="site-title">Marcus Ericsson</span>
          </Link>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired
};

export default Header;
