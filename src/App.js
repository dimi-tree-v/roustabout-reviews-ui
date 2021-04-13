import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
