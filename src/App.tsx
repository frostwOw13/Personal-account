import './App.scss';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

const App: React.FC = () => (
  <Router>
    <div className="App">
      <Header />
      <Route component={RegistrationForm} exact path="/registration"/>
      <Route component={LoginForm} exact path="/login"/>
    </div>
  </Router>

);

export default App;
