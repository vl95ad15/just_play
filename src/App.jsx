import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home';
import Library from './components/Pages/Library';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/library" component={ Library } />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
