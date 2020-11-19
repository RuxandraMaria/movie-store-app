import React from 'react';
import {Card, CardTitle, CardMedia} from 'material-ui';
import moviePlaceholder from '../resources/placeholderVod.jpg';

// These are inline styles
// You can pass styles as objects using this convention
const styles = {
    cardTitle: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',

    },
    cardMedia: {
        maxHeight: 349,
        overflow: 'hidden'
    },
    card: {
        cursor: 'pointer',
        height: 349,
        minWidth: 262,
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%'
    }
};

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        // Track if the mouse hovering over the movie card
        this.state = {
            isMouseOver: false
        };
    }

    render() {
        const {movie, openModal} = this.props;
        // The subtitle won't render if it's null
        const subtitle = this.state.isMouseOver ? movie.description : null;

        return (
            <Card
                style={styles.card}
                onMouseOver={() => this.setState({isMouseOver: true})}
                onMouseLeave={() => this.setState({isMouseOver: false})}
                onClick= {() => openModal(movie)}
            >
                {/* <CardTitle title={<div style={styles.cardTitle}>{movie.title}</div>} /> */}
                <CardMedia
                    style={styles.cardMedia}
                    overlay={
                        <CardTitle
                            title={movie.title}
                            subtitle={subtitle}
                        />
                    }
                >
                    <img style={styles.bgImage} src={movie.imageUri} />
                </CardMedia>
            </Card>
        );
    }
}

export default MovieCard;