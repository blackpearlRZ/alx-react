import React from 'react';
import PropTypes from 'prop-types';


class BodySection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bodySection">
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}

BodySection.propTypes = {
    title: PropTypes.string
}

BodySection.defaultProps = {
    title: ''
}

export default BodySection;