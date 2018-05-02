
import React from  'react';
import ReactDOM from 'react-dom';

const ComponentOne = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.options}
            <p>Footer</p>
        </div>
    );
};

const template = (
    <div>
        This is test
    </div>
);

//export default ComponentOne;
// ReactDOM.render(<ComponentOne  options={template}/>,document.getElementById('app'));