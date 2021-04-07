import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button text='Login' color='green' active={true} />
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
