// copypasta'd from michael's code

// FavouriteButtons
import useGlobal from '../../store/globalAppState';
import heartEmpty from '../../images/heart-empty.png';
import heartFull from '../../images/heart-full.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function FavouriteButton({ props, checkFav }) {

    const [globalState, globalActions] = useGlobal();

    function isFav(id) {

        if (globalState.favs.length === 0) {
            return false;
        }
        // checks whether the movie is in the favs movie
        // array...
        return globalState.favs.some((props) => props.id === id);

    }

    return (
        <div className="favourite">
            {!checkFav ?
                <button className="btn-favourite"
                    onMouseDown={(e) => { e.preventDefault(); }}
                    onClick={() => { globalActions.removeFav(props.id); }}>
                    <img src={heartFull} alt="Full Heart" />
                </button> :
                <button className="btn-favourite"
                    onMouseDown={(e) => { e.preventDefault(); }}
                    onClick={() => { globalActions.addFav(props); }}>
                    <img src={heartEmpty} alt="Empty Heart" />
                </button>
            }
        </div>
    );
}

FavouriteButton.defaultProps = {
    checkFav: true
}

export default FavouriteButton;