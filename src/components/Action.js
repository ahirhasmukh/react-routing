import React from 'react';

// export default class Action extends React.Component {
//     render(){
//         return (
//             <div>
//                 <button type="button" onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should i do?</button>
//             </div>
//         );
//     }
// }

const Action = (props) => (
    <div>
        <button type="button" onClick={props.handlePick} disabled={!props.hasOptions}>What should i do?</button>
    </div>
);

export default Action;