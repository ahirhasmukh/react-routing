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
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAppOptionMethod = this.handleAppOptionMethod.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : ['Thing one','Thing two', 'Thing four']
        };
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({options}))
            }
        } catch(e){
            // Do nothing at all
        }
    }

    componentDidUpdate(props,state){
        if(state.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }   
        
    }

    handleDeleteOptions(){
        // this.setState(() => {
        //     return {
        //         options:[]
        //     }
        // })
        this.setState(() => ({options:[]}))
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState,prevProps)=>({
            options: prevState.options.filter((option)=>{
                return optionToRemove !== option
            })
        }));

        // this.setState((prevState,prevProps)=>({
        //     options: prevState.options.filter((option)=> optionToRemove !== option)
        // }));
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option);
    }

    handleAppOptionMethod(option){
        if(!option){
            return 'Enter valid value to item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'this option alredy exists';
        }

        // this.setState((prevState)=> {
        //     return {
        //         options: prevState.options.concat([option])
        //     }
        // });

        this.setState((prevState)=> ({options: prevState.options.concat([option])}));
    }
    render(){
        const title = 'This is a React Demo';
        const subTitle = 'This is a sub title';
        //const options = ['Thing one','Thing two', 'Thing four'];
        return (
            <div>
               <Header title={title} subTitle={subTitle}/> 
               <Action handlePick={this.handlePick} hasOptions = {this.state.options.length > 0}/>
               <Options handleDeleteOption={this.handleDeleteOption} options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
               <AddOption handleAppOption={this.handleAppOptionMethod}/>
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
                <button type="button" onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        //this.onRemoveAll = this.onRemoveAll.bind(this);
    }
    // onRemoveAll(){
    //     console.log(this.props.options);
    // }
    render(){
        return (
            <div style={{marginTop:'10px'}}>
                <button type="button" onClick={this.props.handleDeleteOptions}>Remove All</button>
                {this.props.options.length === 0 && <p>Please add on options to get started.</p>}
                <ul>
                {
                    this.props.options.map((option) => (
                        <Option 
                        handleDeleteOption={this.props.handleDeleteOption} 
                        key={option} 
                        option={option} />
                    )
                )}
                </ul>
            </div>
        );
    }
}

class Option extends React.Component{
    constructor(props){
        super(props);
        //this.onRemoveAll = this.onRemoveAll.bind(this);
    }
    render(){
        return (
            <div style={{marginTop:'10px'}}>
                <li>{this.props.option +" "} 
                    <button 
                        type="button" 
                        onClick={() => {
                                this.props.handleDeleteOption(this.props.option)
                            }
                        }
                        >
                    Remove
                    </button>
                </li>
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAppOption = this.handleAppOption.bind(this);  
        this.state = {
            error:undefined
        }  
    }
    handleAppOption(e){
        e.preventDefault();

        const option = e.target.inputValue.value.trim();
        const error = this.props.handleAppOption(option);
    
        this.setState(()=>({error}))
        e.target.inputValue.value = "";
    }
    render(){
        return (
            <div style={{marginTop:'10px'}}>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAppOption}>
                    <input type="text" name="inputValue" placeholder="Enter value"/> 
                    <button>ADD</button>
                </form>
            </div>
        );
    }
}

// const StateLessFunc = (props) =>{
//     return (
//         <div>
//             <p>Name: {props.userDetails.name}</p>
//             <p>Age: {props.userDetails.age}</p>
//         </div>
//     );
// };

// let body ={
//     name:'Hasmukh',age:27
// }

ReactDOM.render(<ComponentDemo />,document.getElementById('app'));