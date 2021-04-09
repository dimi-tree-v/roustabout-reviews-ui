import PropTypes from 'prop-types'
import { Person } from 'react-bootstrap-icons';
import { IconButton, TextButton } from './Button'


const Header = ({ title }) => {
  return (
    <header>
      <div className='HeaderRow1'>
        <h1>{title}</h1>
        <IconButton icon=<Person/> active={true} />
      </div>
      <div className='HeaderRow2'>
        <h4>Reviews</h4>
        <h4>New Music</h4>
        <h4>Lists</h4>
      </div>
    </header>
  )
}

Header.defaultProps = {
  title: 'Roustabout Reviews',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
