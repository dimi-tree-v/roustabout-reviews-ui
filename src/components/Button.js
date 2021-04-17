import { Link } from 'react-router-dom';

export const IconLink = ({ icon, path, active }) => {
  return (
    <Link to={path}>
      <Button className="iconLink" content={icon} active={active}/>
    </Link>
  )
};

export const TextLink = ({ text, path, active }) => {
    return (
      <Link to={path}>
        <Button className="textLink" content={text} active={active}/>
      </Link>
    )
};


const Button = ({ content, active,  }) => {
  return (
      <button
        className='btn'
        disabled={active}
        >
          {content}
      </button>
  )

};
