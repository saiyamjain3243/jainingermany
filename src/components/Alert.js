import React from "react"


export default function Alert(props) {
        return (
            <div className="alert alert-dark" role="alert">
                {props.alert}
            </div>
        );
}
