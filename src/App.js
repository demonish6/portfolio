import './App.css';
import Topnav from './components/Topnav';
import Intro from './components/Intro';
import Contact from './components/Contact';
import Blog from './components/Blog';
import About from './components/About';
import { 
  BrowserRouter as Router,
  Route,
  Switch ,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Topnav></Topnav>
      <Switch>
      <Route exact path="/" component={() => (<Redirect to='/home' />)} />
        <Route path='/home' component={Intro} />
        <Route path='/about' exact component={About} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
    </div>
  );
}
export default App;
