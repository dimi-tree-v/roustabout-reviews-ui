const Button = ( props ) => {
  console.log(props)
  const {
    text,
    color,
    active,
  } = props;
  return <button style={{ backgroundColor: (active ? color : 'grey') }}
          className='btn'>
            {text}
          </button>

}

export default Button
