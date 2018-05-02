import React from 'react';

export default class AddOption extends React.Component {
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
    
        this.setState(()=>{
            return {
                error
            };
        })
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