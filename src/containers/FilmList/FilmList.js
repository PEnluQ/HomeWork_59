import React, {Component} from 'react';
import FormFilms from "../../components/FormFIlm/FormFilms";
import Films from "../../components/Films/Films";
import nanoid from 'nanoid';
import './FilmList.css';

class FilmList extends Component {
    state = {
       films: [
           {title:'Темный рыцарь', id: nanoid()},
           {title:'Бла бла', id: nanoid()}
       ],
       formValue: '',
    };

    changeForm = event => {
        this.setState({formValue : event.target.value});
    };

    removeFilms = id => {
        const index = this.state.films.findIndex(f => f.id === id);
        const films = [...this.state.films];
        films.splice(index, 1);
        this.setState({films});
    };

    changeFilm = (event, id) => {
        const films = [...this.state.films];
        const index = this.state.films.findIndex(f => f.id === id);
        const kino = {...films[index]};
        kino.title = event.target.value;
        films[index] = kino;
        this.setState({films});
    };

    addFilms = () => {
        if(this.state.formValue === ''){
            alert('Write');
        } else {
            const films = [...this.state.films];
            let info = {title: this.state.formValue, id: nanoid()};
            films.push(info);
            this.setState({films});
        }
    };

    render() {
        return (
            <div className='FilmList'>
                <FormFilms
                    val={this.state.formValue}
                    changeForm={this.changeForm}
                    addFilm={this.addFilms}
                />
                <h3>To watch list:</h3>
                {this.state.films.map((film) => (
                    <Films
                        key={film.id}
                        title={film.title}
                        removeFilm={() => this.removeFilms(film.id)}
                        changeFilm={(event) => this.changeFilm(event, film.id)}
                    />
                ))}
            </div>
        );
    }
}

export default FilmList;