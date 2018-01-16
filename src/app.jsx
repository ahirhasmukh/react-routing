// Bind method examples

const obj = {
    name : 'Hasmukh',
    age : 27,
    getName(){
        return this.name + ' ' + this.age;
    }
}

//const getName = obj.getName.bind(obj);

//console.log(getName());



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
    constructor(props){
        super(props);
        this.onRemoveAll = this.onRemoveAll.bind(this);
    }
    onRemoveAll(){
        console.log(this.props.options);
    }
    render(){
        return (
            <div style={{marginTop:'10px'}}>
                <button type="button" onClick={this.onRemoveAll.bind(this)}>Remove All</button>
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
    handleAppOption(e){
        e.preventDefault();
        const option = e.target.inputValue.value.trim();
        if(option){
            console.log(option);
        }
        e.target.inputValue.value = "";
    }
    render(){
        return (
            <div style={{marginTop:'10px'}}>
                <form onSubmit={this.handleAppOption}>
                    <input type="text" name="inputValue" placeholder="Enter value"/> 
                    <button>ADD</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<ComponentDemo />,document.getElementById('app'));