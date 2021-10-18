import Nav from './components/Nav';
import Home from './components/Home';
import Lists from './components/Lists';
import NewReleases from './components/NewReleases';
import Reviews from './components/Reviews';
import Review from './components/Review';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/Login';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/lists" component={Lists} />
          <Route path="/new-releases" component={NewReleases} />
          <Route exact path="/reviews" component={Reviews} />
          <Route path="/reviews/:id" component={Review} />
          <Route path="/login" component={LoginPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
