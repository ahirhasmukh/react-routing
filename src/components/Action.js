import React from 'react';

export default class Action extends React.Component {
    render(){
        return (
            <div>
                <button type="button" onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should i do?</button>
            </div>
        );
    }
}