import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';
import Modal from 'react-modal';

export default class ComponentDemo extends React.Component{
    constructor(props) {
        super(props); 
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAppOptionMethod = this.handleAppOptionMethod.bind(this);
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
        this.state = {
            options : props.options
        };
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }

    handleClearSelectedOption(){
        this.setState(() => ({selectedOptions:undefined}));
    };

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options:[],
                selectedOptions: undefined
            }
        })
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option);

        this.setState(() => {
            return {
                selectedOptions : option
            }
        });
    }

    handleAppOptionMethod(option){
        if(!option){
            return 'Enter valid value to item';
        } else if(this.state.options.indexOf(option) > -1){
            return 'this option alredy exists';
        }

        this.setState((prevState)=> {
            return {
                options: prevState.options.concat([option])
            }
        });
    }
    render(){
        const title = 'This is a React Demo';
        const subTitle = 'This is a sub title';
        //const options = ['Thing one','Thing two', 'Thing four'];
        return (
            <div>
               <Header subTitle={subTitle}/> 
               <Action handlePick={this.handlePick} hasOptions = {this.state.options.length > 0}/>
               <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
               <AddOption handleAppOption={this.handleAppOptionMethod}/>
               <OptionModal selectedOptions={this.state.selectedOptions}
               handleClearSelectedOption = {this.handleClearSelectedOption}/>
            </div>
        );
    }
}

ComponentDemo.defaultProps = {
    options: ['karan','raghu']
}

// const Header = (props) =>{
//     return (
//         <div>
//             <h2>{props.title}</h2>
//             {/* {props.subTitle ? <h3>{props.subTitle}</h3>: 'havent sub title'} */}
//             {props.subTitle && <h3>{props.subTitle}</h3>}
//         </div>
//     );
// }

// const AddOption = () =>{
//     function constructor(props){
//         super(props);
//         this.handleAppOption = this.handleAppOption.bind(this);  
//         this.state = {
//             error:undefined
//         }  
//     }
//     function handleAppOption(e){
//         e.preventDefault();

//         const option = e.target.inputValue.value.trim();
//         const error = this.props.handleAppOption(option);
    
//         this.setState(()=>{
//             return {
//                 error
//             };
//         })
//         e.target.inputValue.value = "";
//     }
// }



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
