import Header from './components/Header/Header';
import GlobalStyle from './globalStyles';
import { Switch, Route } from 'react-router-dom';
import Search from './pages/Search/Search';
import Home from './pages/Home/Home';
import Favorite from './pages/Favorite/Favorite';
import SideMenu from './components/SideMenu/SideMenu';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import { ThemeProvider } from 'styled-components';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <ScrollToTop>
      <div className="App">
        <ThemeProvider
          theme={{
            primaryColor: '#e0d7d7',
            darkerBg: '#050505',
            mainPurple: '#745fc9',
          }}
        >
          <GlobalStyle />
          <Header />
          <SideMenu />
          <MusicPlayer />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search=:pathname?" component={Search} />
            <Route path="/favorites" component={Favorite} />
          </Switch>
        </ThemeProvider>
      </div>
    </ScrollToTop>
  );
}

export default App;
