import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Articles from './pages/Articles/Articles';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/articles' component={Articles} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
