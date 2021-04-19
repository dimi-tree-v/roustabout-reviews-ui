import PropTypes from 'prop-types';
import { Person } from 'react-bootstrap-icons';
import { IconLink, TextLink } from './Button';


const Nav = ({ title }) => {
  return (
    <nav>
      <div className="nav-row-1">
        <h1 className="title-header"><TextLink text={title} path='/' /></h1>
        <IconLink icon={<Person/>} path='/login'/>
      </div>
      <div className="nav-row-2">
        <TextLink text="Reviews" path="/reviews" />
        <TextLink text="New Releases" path="/new-releases"/>
        <TextLink text="Lists" path="/lists"/>
      </div>
    </nav>
  )
}

Nav.defaultProps = {
  title: "Roustabout Reviews",
}

Nav.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Nav
