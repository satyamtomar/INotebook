import React from 'react'

const Alert = (props) => {
    return (
        <div>
            <div className="alert alert-primary my-3" role="alert">
 {props.message}
</div>
        </div>
    )
}

export default Alert
