import React from 'react';

class Quotebox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p id="text">{this.props.quotetext}</p>
        )
    }
}

export default Quotebox;