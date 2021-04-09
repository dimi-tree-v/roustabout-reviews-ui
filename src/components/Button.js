export const IconButton = ({ icon, active }) => {
    return <Button className="iconButton" content={icon} active={active}/>
}

export const TextButton = ({ text, active }) => {
    return <Button className="textButton" content={text} active={active}/>
}


const Button = ({ content, active }) => {
  return <button
          className='btn'
          disabled={active}
          >
            {content}

          </button>

}
