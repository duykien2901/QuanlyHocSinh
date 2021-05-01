import logo from './logo.svg';
import './App.css';
import HomePage from './Routes/commom-page/HomePage';
import LoginPage from './component/login/LoginPage';
import MenuAdmin from './component/admin/layout/MenuAdmin';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Routes from './Routes';

function App() {
  return (
    // <LoginPage/>
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;
