import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap/';
import MoviesList from '../components/movieList';
import MovieModal from '../components/movieModal';
import customAxios from '../httpRequests/customAxios';
import * as movieListUtils from '../components/utils/movieListUtils';


const REQUEST_HEADER_WITH_CREDENTIAL = { headers: { "Content-Type":"application/json", "Accept":"application/json"}, origin: "https://localhost:8090"};

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            isModalOpened: false,
            movies: null,
            title: ''
        };
        // Binds the handleScroll to this class (MovieBrowser)
        // which provides access to MovieBrowser's props
        // Note: You don't have to do this if you call a method
        // directly from a lifecycle method or define an arrow function
         this.handleScroll = this.handleScroll.bind(this);
    }

    async componentDidMount() {
        let url = 'media-service/v1/GetMedia?title=' + this.props.location.state.title;
        let movies = await customAxios.get(url, REQUEST_HEADER_WITH_CREDENTIAL);

        this.setState({...this.state, movies: movies.data});
    }


     handleScroll() {
         const {topMovies} = this.props;
         if (this.state.movies) {
             let percentageScrolled = movieListUtils.getScrollDownPercentage(window);
             if (percentageScrolled > .8) {
                 const nextPage = this.state.currentPage + 1;
                 this.props.getTopMovies(nextPage);
                 this.setState({currentPage: nextPage});
             }
         }
     }

    openModal(movie){
        this.setState({...this.state, isModalOpened: true, movie: movie} )
    }

    closeModal(){
        this.setState({...this.state, isModalOpened: false} )
    }

    render() {
        return (
            <div style={{marginTop: '100px'}}>
                <Container>
                    <Row>
                       <MoviesList movies={this.state.movies} openModal={this.openModal.bind(this)}/>
                    </Row>
                </Container>
                <MovieModal closeMovieModal={this.closeModal.bind(this)} movie={this.state.movie}
                            isModalOpened={this.state.isModalOpened}/>
            </div>
        );
    }
}