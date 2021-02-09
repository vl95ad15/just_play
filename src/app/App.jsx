import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home";
import Library from "../pages/Library";
import State from '../context/state';

import "./App.css";

function App() {
  return (
    <State>
      <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/library" component={Library} />
        </Switch>

        <Footer />
      </Router>
    </div>
    </State>
  );
}

export default App;
