import PropTypes from 'prop-types';
import { Person } from 'react-bootstrap-icons';
import { IconButton, TextButton } from './Button';


const Nav = ({ title }) => {
  return (
    <nav>
      <div className='NavRow1'>
        <h1>{title}</h1>
        <IconButton icon=<Person/> active={true} />
      </div>
      <div className='NavRow2'>
        <TextButton text='Reviews' />
        <TextButton text='New Music' />
        <TextButton text='Lists' />
      </div>
    </nav>
  )
}

Nav.defaultProps = {
  title: 'Roustabout Reviews',
}

Nav.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Nav
