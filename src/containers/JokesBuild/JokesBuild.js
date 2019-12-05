import React, {Component} from 'react';
import './Joke.css';

class JokesBuild extends Component {
    state = {
        jokes: []
    };

    async componentDidMount() {
        this.Change()
    }

   async Change() {
        const response = await fetch('https://api.chucknorris.io/jokes/random');

        if(response.ok){
            const jokes = await response.json();

            this.setState({jokes});
        }
    }

    render() {
        return (
            <div className='JokesBuild'>
                <p className='text'>{this.state.jokes.value}</p>
            </div>
        );
    }
}

export default JokesBuild;