import PropTypes from 'prop-types';
import { Person } from 'react-bootstrap-icons';
import { IconLink, TextLink } from './Button';


const Nav = ({ title }) => {
  var user = window.localStorage.user;

  return (
    <nav>
      <div className="nav-row-1">
        <h1 className="title-header">
          <TextLink text={title} path='/' />
        </h1>
        <div className="nav-items">
          <TextLink text="Reviews" path="/reviews" />
          <TextLink text="New Releases" path="/new-releases"/>
          <TextLink text="Lists" path="/lists"/>
          <div className="account-icon">
            <IconLink icon={ <Person/> } path={ user ? '/user/{id}': '/login' } label="this"/>
          </div>
        </div>
      </div>
    </nav>
  )
};

Nav.defaultProps = {
  title: "ЯR RoustaboutReviews",
}

Nav.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Nav;
