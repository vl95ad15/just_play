import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home";
import Library from "./components/Pages/Library";

import "./App.css";

function App() {
  return (
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
  );
}

export default App;
