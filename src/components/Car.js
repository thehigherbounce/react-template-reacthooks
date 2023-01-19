// import {React, Component} from 'react';

// class Car extends Component{
//     constructor(props){
//         super(props);
//         this.state = {color: 'red'};
//     }
//     changeColor = () => {
//         this.setState({
//             color: this.state.color == 'red' ? 'blue':'red'
//         });
//     }
//     render(){
//         return (
//             <div>
//                 <h1>
//                     this is a 
//                     {this.state.color} 
//                     {this.props.name} 
//                 </h1>
//                 <button
//                     onClick={this.changeColor}
//                 >
//                     Change Color
//                 </button>
//             </div>
//         );
//     }
// }
import {useState} from 'react';
import Item from './Item';
function Car(props)
{
    const [color, setColor] = useState('red');
    
    const changeColor = () => {
        let col = (color === 'red') ? 'blue' : 'red';
        setColor(col);
    }
    const items = [
        {
            id: 1,
            name: 'kim',
            age: 23
        },
        {
            id: 2,
            name: 'lee',
            age: 21
        },
        {
            id: 3,
            name: 'pak',
            age: 33
        },
        {
            id: 4,
            name: 'joe',
            age: 19
        }
    ];
    return (
        <div>
            <h1>
                this is
                {color}
                {props.name}
            </h1>
            <button
                onClick={changeColor}
            >
                Change Color
            </button>
            <ul>
                {items.map((item) => <Item 
                    key={item.id} 
                    name={item.name} 
                    age={item.age}
                />)}
            </ul>
        </div>
    );
}
export default Car;