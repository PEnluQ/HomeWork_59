import React, { Component } from 'react';

class Films extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.title !== this.props.title
    }

    render() {
        return (
            <div className='Films'>
                <input value={this.props.title} onChange={this.props.changeFilm}/>
                <button onClick={this.props.removeFilm}>X</button>
            </div>
        );
    }
 }

export default Films;