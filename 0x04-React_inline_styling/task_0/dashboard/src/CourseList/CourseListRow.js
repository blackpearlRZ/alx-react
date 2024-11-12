import React from 'react';
import PropTypes from 'prop-types';

const headerStyle = {
    backgroundColor: '#deb5b545'
};

const rowStyle = {
    backgroundColor: '#f5f5f5ab'
};

const CourseListRow = ({ isHeader = false, textFirstCell, textSecondCell = null }) => {
    return (
        <tr style={rowStyle}>
            {isHeader ?
                (textSecondCell === null ?
                    <th style={headerStyle} colSpan={2}>{textFirstCell}</th> :
                    <>
                        <th style={headerStyle}>{textFirstCell}</th>
                        <th style={headerStyle}>{textSecondCell}</th>
                    </>
                )
                : <><td>{textFirstCell}</td><td>{textSecondCell}</td></>}
        </tr>
    )
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string || PropTypes.number
}

export default CourseListRow