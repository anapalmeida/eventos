import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Cadastro from './view/cadastro';
import Home from './view/home';
import Login from './view/login';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/novo" component={Cadastro}/>
      <Route exact path="/home" component={Home}/>
    </Switch>
    </Router>
  );
}

export default App;
