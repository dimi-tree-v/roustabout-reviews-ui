export const IconButton = ({ icon, color, active }) => {
    return <Button content={icon} color={color} active={active}/>
}

export const TextButton = ({ text, color, active }) => {
    return <Button content={text} color={color} active={active}/>
}


const Button = ({ content, color, active }) => {
  return <button
          style={{ backgroundColor: (active ? color : 'grey') }}
          className='btn'>
            {content}

          </button>

}
