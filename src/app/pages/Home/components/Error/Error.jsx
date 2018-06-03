


import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const Error = ({ message = "" }) => {
    if (message === "") return false;
    return (
        <Fragment>
            <br />
            <Alert color="danger">
                {message}
            </Alert>
        </Fragment>
    )
}

Error.propTypes = {
    message: PropTypes.string
};

export default Error;