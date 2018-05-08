import React from  'react';
import {Link} from 'react-router-dom';


const EditComponent = (props) => {
    console.log(props);
    return (
        <div>
            <p>This is edit Component {props.match.params.id}</p>
            <Link to="/edit/1">Item 1</Link>
        </div>
    );
}

export default EditComponent;