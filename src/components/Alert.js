import React from 'react'
import PropTypes from 'prop-types'

export default function Alert(props) {
    const capitalize = (word) => {
        let first = word.toLowerCase()
        return first.charAt(0).toUpperCase() + word.slice(1);
    }
    return (
        <div style={{ height: "40px" }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                {capitalize(props.alert.type)}: {props.alert.msg}
            </div>}
        </div>
    )
}
Alert.prototype = {
    alert: PropTypes.object,
}