// About
import { Link } from 'react-router-dom';

const About = () => (

  <section className="about-section">

    <Link to={'/'} className="go-back">&#5176; Back</Link>

    <h2>About MoviesGo</h2>
    <p><b>MoviesGo</b> is a movie database site hoping to satisfy the cinema needs of movie
        buffs. Whether you are planning to watch a new upcoming release, or want to
        learn more about solid block-buster classics, MoviesGo aims to provide a
        beautiful and seamless experience for all.</p>
    <p>Please feel free to browse through our selections. If there are any movies that
        interest you, go ahead and add them to your Favorites.</p>

    <div class="tmdb-logo">
      <a href="https://www.themoviedb.org/documentation/api"><img src="/../assets/images/tmdb-logo.png" className="no-hover"></img></a>
    </div>
    <p>This product uses the <a href="https://www.themoviedb.org/documentation/api">TMDb API</a> but is not endorsed or certified by TMDb. For educational purposes only.</p>

    <h3>About the Team</h3>
    <p>Created by <a href="https://mbui.bcitwebdeveloper.ca/">Mina Bui</a> and <a href="https://vnguyen.bcitwebdeveloper.ca/">Vinson Nguyen</a>. Made for the BCIT <a href="https://bcitwebdeveloper.ca/">Technical Web Designer</a> Program.</p>

  </section>

);

export default About; 