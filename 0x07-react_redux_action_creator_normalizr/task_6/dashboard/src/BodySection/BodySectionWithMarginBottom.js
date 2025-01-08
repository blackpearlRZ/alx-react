import React from "react";
import BodySection from "./BodySection";
import { StyleSheet, css } from 'aphrodite'


const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: "40px"
    }
});

class BodySectionWithMarginBottom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={css(styles.bodySectionWithMargin)}>
                <BodySection {...this.props} />
            </div>
        );
    }
}

export default BodySectionWithMarginBottom;