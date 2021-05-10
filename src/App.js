import Nav from './components/Nav';
import Home from './components/Home';
import Lists from './components/Lists';
import NewReleases from './components/NewReleases';
import Reviews from './components/Reviews';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/lists" component={Lists} />
          <Route path="/new-releases" component={NewReleases} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
