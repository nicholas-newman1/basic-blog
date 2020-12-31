import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import Articles from './pages/Articles/Articles';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/articles' component={Articles} />
          <Route exact path='/articles/:id' component={ArticlePage} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
