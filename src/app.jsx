class ComponentDemo extends React.Component{
    render(){
        return (
            <div>
               <Header /> 
               <Action />
               <Options />
               <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h2>React Demo</h2>
                <h3>this is sub title</h3>
            </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
                <button type="button">What should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render(){
        return (
            <div style={{marginTop:'10px'}}>
                Options component here
                <Option />
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                Option component here..
            </div>
        );
    }
}

class AddOption extends React.Component {
    render(){
        return (
            <div style={{marginTop:'10px'}}>
                Add option component here
            </div>
        );
    }
}


ReactDOM.render(<ComponentDemo />,document.getElementById('app'));