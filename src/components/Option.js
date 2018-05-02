import React from 'react';

// export default class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                 <li>Option : {this.props.option}</li>
//             </div>
//         );
//     }
// }

const Option = (props) => (
    <div>
        <li>Option : {props.option}</li>
    </div>
);

export default Option;