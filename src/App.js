import logo from './logo.svg';
import './App.css';
import HomePage from './Routes/commom-page/HomePage';
import LoginPage from './component/login/LoginPage';
import MenuAdmin from './component/admin/layout/MenuAdmin';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    // <LoginPage/>
    <Router>
      <Switch>
        <Route exact path="/admin">
          <MenuAdmin/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
