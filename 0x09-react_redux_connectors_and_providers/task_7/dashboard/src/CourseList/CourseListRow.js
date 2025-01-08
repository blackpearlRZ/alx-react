import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#deb5b545'
    },
    rowStyle: {
        backgroundColor: '#f5f5f5ab'
    },
    th: {
        borderBottom: "2px solid lightgray",
        fontSize: "1rem"
    },
    thCol2: {
        textAlign: "center"
    },
    td: {
        fontSize: "1rem"
    },
    rowChecked: {
        backgroundColor: "#e6e4e4",
    },
});

const headerStyle = {
    backgroundColor: '#deb5b545'
};

const rowStyle = {
    backgroundColor: '#f5f5f5ab'
};

class CourseListRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            isHeader = false,
            textFirstCell,
            textSecondCell = null,
            isChecked = false,
            onChangeRow = () => { },
            id = 0
        } = this.props;
        return (
            <tr className={isHeader ? css(styles.headerStyle) : css(styles.rowStyle)}>
                {isHeader ?
                    (textSecondCell === null ?
                        <th className={css(styles.thCol2)} colSpan={2}>{textFirstCell}</th> :
                        <>
                            <th className={css(styles.th)}>
                                {textFirstCell}
                            </th>
                            <th className={css(styles.th)}>{textSecondCell}</th>
                        </>
                    )
                    : <>
                        <td className={css(isChecked ? styles.rowChecked : styles.td)}>
                            <input type="checkbox" checked={isChecked} onChange={() => {
                                onChangeRow(id, isChecked);
                            }} />
                            {textFirstCell}
                        </td>
                        <td className={css(isChecked ? styles.rowChecked : styles.td)}>
                            {textSecondCell}
                        </td>
                    </>
                }
            </tr>
        );
    }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string || PropTypes.number,
    isChecked: PropTypes.bool,
    onChangeRow: PropTypes.func,
    id: PropTypes.string
}

CourseListRow.defaultProps = {
    isHeader: false,
    isChecked: false,
    textFirstCell: '',
    textSecondCell: '',
    onChangeRow: () => { },
}

export default CourseListRow