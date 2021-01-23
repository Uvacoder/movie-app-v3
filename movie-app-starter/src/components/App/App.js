import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../elements/Header';
import Footer from '../elements/Footer';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import Upcoming from '../Upcoming/Upcoming';
import NowPlaying from '../NowPlaying/NowPlaying';
import TopRated from '../TopRated/TopRated';
import NotFound from '../elements/NotFound';
import Favourites from '../elements/Favourites';
import About from '../elements/About'

const App = () => {

  return (
    <BrowserRouter >
      <React.Fragment>
        <Header />
        <Switch>
          <Route 
            // shows home component, exact= MEANS URL HAS TO BE EXACTLY THIS PATH TO SHOW/render
            path="/" component={Home} exact 
          />
          <Route 
            // create variable to grab the specific movie id
            // will be sent in by the link (tells react router that we want the variable in the path)
            path="/single-movie/:movieId" component={Movie}  
          />
          <Route path="/NowPlaying" component={NowPlaying} />
          <Route path="/TopRated" component={TopRated} />
          <Route path="/Upcoming" component={Upcoming} />
          <Route path={'/about'}><About /></Route>
          <Route path="/about" component={About} />
          <Route path={'/favourites'}><Favourites /></Route>
          <Route component={NotFound} />
        </Switch>
        <Footer></Footer>
      </React.Fragment>
    </BrowserRouter>
  )
}





export default App;