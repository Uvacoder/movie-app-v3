import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header';
import Footer from '../elements/Footer';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import NotFound from '../elements/NotFound';
import Favourites from '../elements/Favourites';
import About from '../elements/About';

const App = () => {

  return (
    <BrowserRouter basename="/ReactMovieDB">
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId" component={Movie} exact />
          <Route path={'/about'}><About /></Route>
          <Route path={'/favourites'}><Favourites /></Route>
          <Route component={NotFound} />
        </Switch>
        <Footer></Footer>
      </React.Fragment>
    </BrowserRouter>
  )
}


export default App;