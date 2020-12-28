import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
