import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    bodySection: {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
    },

    bodySectionH2: {
        width: "100%",
    },
});


class BodySection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={css(styles.bodySection)}>
                <h2 className={css(styles.bodySectionH2)}>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}

BodySection.propTypes = {
    title: PropTypes.string
};

BodySection.defaultProps = {
    title: ''
};

export default BodySection;