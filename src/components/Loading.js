import { Spinner } from 'reactstrap';

const Loading = () => {
  return (
    <div className="loading-body">
      <Spinner type="grow"  color="danger"/>
    </div>
  )
};

export default Loading;
