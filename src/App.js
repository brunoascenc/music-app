import Header from './components/Header/Header';
import GlobalStyle from './globalStyles';
import { Switch, Route } from 'react-router-dom';
import Search from './pages/Search/Search';
import Home from './pages/Home/Home';
import Favorite from './pages/Favorite/Favorite';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <SideMenu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search=:pathname?" component={Search} />
        <Route path="/favorites" component={Favorite} />
      </Switch>
    </div>
  );
}

export default App;
