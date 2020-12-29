import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
