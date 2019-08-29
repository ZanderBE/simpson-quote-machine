import React from 'react';

class Author extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p id="author">-{this.props.author}</p>       
        )
    }
}


export default Author;
