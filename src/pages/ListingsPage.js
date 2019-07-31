import React from 'react';
import axios from 'axios';
import '../App.css';
import TellItPT from '../assets/TellItPT.jpg';
import AnnabellePT from '../assets/AnnabellePT.jpg';
import OnceUponPT from '../assets/OnceUponPT.jpg';
import DoraLS from '../assets/DoraLS.jpg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import FilmInfo from './FilmInfo';

export default class ListingsPage extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8000/films`)
        .then(response => {
            this.setState({
                films: response.data,
                isLoaded: true,
            });
        })
        console.log(this.state.films);
    }

    render() {
        return (
            <div>
                { this.state.films.map(item => {
                    return (
                        <div key={item._id}>
                            <img src={item.image} link to={item.route} />
                            <h1>{item.title}</h1>
                            <h2>Directed by {item.director}</h2>
                            <h2>Release Date: {item.releaseDate}, cert: {item.cert}</h2>
                            <Link to={'chooseshowing/' + item._id}><button type='button'>Book Now</button></Link>
                            <Link to={{
                                pathname: `film/${item._id}`,
                                state: {
                                    film: item,
                                }
                            }}><button type='button'>More Info</button></Link>
                        </div>
                    );
                })}
            </div>
        )
    }
}

// {
//     '_id': 'gjpowegjwpo',
//     'image': DoraLS,
//     'title': 'Dora And The Lost City Of Gold',
//     'cert': 'PG',
//     'releaseDate': '16/8/19',
//     'cast': 'Eugenio Derbez, Isabela Moner, Jeffrey Wahlberg',
//     'director': 'James Bobin',
//     'runTime': '1hr 40m',
//     'description': "Having spent most of her life exploring the jungle with her parents, nothing could prepare Dora (Isabela Moner) for her most dangerous adventure ever - high school."
// },
// {
//     '_id': 'khperokhopek',
//     'image': OnceUponPT,
//     'title': 'Once Upon A Time In Hollywood',
//     'cert': '15',
//     'releaseDate': '16/8/19',
//     'cast': 'Brad Pitt, Leonardo DiCaprio, Margot Robbie, Al Pacino',
//     'director': 'Quentin Tarantino',
//     'runTime': '2hr 45m',
//     'description': "Quentin Tarantino's Once Upon a Time in... Hollywood visits 1969 Los Angeles, where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognise anymore."
// },
// {
//     '_id': 'agnmieojgie',
//     'image': TellItPT,
//     'title': 'Tell It To The Bees',
//     'cert': '15',
//     'releaseDate': '26/7/19',
//     'cast': 'Anna Paquin, Gregor Selkirk',
//     'director': 'Annabel Jankel',
//     'runTime': '1hr 48m',
//     'description': "Dr Jean Markham (Paquin) returns to the town she left as a teenager to take over her late father's medical practice. When a school-yard scuffle lands Charlie (Gregor Selkirk) in her surgery, she invites him to visit the hives in her garden and tell his secrets to the bees, as she once did."
// },
// {
//     '_id': 'gjwepogjioej',
//     'image': AnnabellePT,
//     'title': 'Annabelle',
//     'cert': '15',
//     'releaseDate': '10/7/19',
//     'cast': 'Mckenna Grace, Patrick Wilson, Vera Farmiga',
//     'director': 'Gary Dauberman',
//     'runTime': '1hr 46m',
//     'description': "Determined to keep Annabelle from wreaking havoc, demonologists Ed and Lorraine Warren bring the possessed doll to the locked artifacts room in their house, placing her 'safely' behind sacred glass and enlisting a priest's holy blessing..."
// }