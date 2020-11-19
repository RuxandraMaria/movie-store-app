import React from 'react';
import { Dialog } from 'material-ui';
import posterPlaceholder from '../resources/bkg.jpg';
import customAxios from "../httpRequests/customAxios";

const REQUEST_HEADER_WITH_CREDENTIAL = { headers: { "Content-Type":"application/json", "Accept":"application/json"}, origin: "https://localhost:8090"};

const styles = {
    // Can use functions to dynamically build our CSS
    dialogContent: (backgroundUrl) => ({
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        height: '100%',
        minHeight: 400,
        color: '#003399',
        minWidth: 700,
        width: '100%',
    }),

    info: {
        width: '50%',
        float: 'left',
        padding: '0px 10px'
    },
}

export default class MovieModalContainer extends React.Component {
    // Triggered right after a property is changed
    componentWillReceiveProps(nextProps) {
        // If we will receive a new movieId
        if (nextProps.movieId && this.props.movieId !== nextProps.movieId) {
            nextProps.getMovieDetails(nextProps.movieId);
        }
    }

     async onAddToFavourites(){
         await  customAxios.put('/favourites', this.props.movie.id, REQUEST_HEADER_WITH_CREDENTIAL);

     }

    render() {
        const {isModalOpened, closeMovieModal, movie} = this.props;
        const actors = (movie && movie.actors) ? movie.actors.map(genre => genre).join(', ') : '';
        const genres = (movie && movie.genres) ? movie.genres.map(genre => genre).join(', ') : '';
        const year = (movie && movie.release) ? movie.release.toString().substring(0, 4) : ' ';

        return (
            <Dialog
                autoScrollBodyContent={true}
                title={null}
                modal={false}
                open={isModalOpened}
                onRequestClose={closeMovieModal}
            >
                { isModalOpened && <div  style={styles.dialogContent({posterPlaceholder})}>
                    <div style={styles.info}>
                    <h1>{movie.title}({year})</h1>
                    <p>{movie.description}</p>
                    <h5>Cast</h5>
                    <p>{actors}</p>
                    <h5>Genres</h5>
                    <p>{genres}</p>
                    <h5>Rating</h5>
                    <p>{movie.averageRating}%</p>
                    <button type="button" className="btn btn-primary"  onClick={this.onAddToFavourites.bind(this)} color="#ff6600">Add to favorites</button>
                    </div>
                    <div  style={styles.info}><img src={movie.imageUri}></img></div>
                    </div>}
            </Dialog>
        );
    }
}