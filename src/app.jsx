class ComponentDemo extends React.Component{
    render(){
        const title = 'This is a React Demo';
        const subTitle = 'This is a sub title';
        const options = ['Thing one','Thing two', 'Thing four'];
        return (
            <div>
               <Header title={title} subTitle={subTitle}/> 
               <Action/>
               <Options options={options}/>
               <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h2>{this.props.title}</h2>
                <h3>{this.props.subTitle}</h3>
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
        console.log();
        return (
            <div style={{marginTop:'10px'}}>
                <ul>
                {
                    this.props.options.map((option) => <Option key={option} option={option} />) 
                }
                </ul>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
                <li>Option : {this.props.option}</li>
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