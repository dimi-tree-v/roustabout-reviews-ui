import PropTypes from 'prop-types'
import { ArrowRight } from 'react-bootstrap-icons';
import { IconButton, TextButton } from './Button'


const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <IconButton icon=<ArrowRight/> color='green' active={true} />
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
