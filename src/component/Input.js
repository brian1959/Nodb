import React from 'react';
import './input.css'

export default function list(props) {
    return (
        <div className="button_mine" onChange={props.action}>
        {props.children}
        </div>
    )
}