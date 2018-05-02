import React from 'react';

export default class Option extends React.Component{
    render(){
        return (
            <div>
                <li>Option : {this.props.option}</li>
            </div>
        );
    }
}