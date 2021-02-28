import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['ananto', 'borsha', 'shabana']
  const Products = [{name:'Photoshop',price:'$89'},
  {name:'Illustrator',price:'$891'},
  {name:'LightRooom',price:'$890'}]
  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>
        <Users></Users>
        
        <ul>
          {
            nayoks.map(element => <li> {element}</li>)
          }
        </ul>
        {Products.map(element=><li>{element.name}</li>)}
       
        
      </header>
    </div>
  );
}

function Users(){
const [users, setUser] = useState([]);
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then (res => res.json())
  .then (data =>setUser(data))
},[])
  return(
    <div>
      <h1>Dynamic User:{users.length}</h1>
      <ul>
        {
          users.map(element=><li>{element.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
const [count, setCount] = useState(10);

  return(
    <div>
      <h1>count : {count}</h1>
      <button onClick= {()=>setCount(count+3)}>Increase</button>
      <button onClick = {()=>setCount(count-3)}>Decrease</button>
    </div>
  )
}
function Person(props){
  return(
    <div style ={{border:'2px solid gold' }}>
      <h3>My name: {props.name}</h3>
      <p>My profassion {props.prof} </p>
    </div>
  )
}

function Product(props){
  const prodStyle = {
    border : '1 px solid gray',
    margin : '5px',
    backgroundColor : 'green'

  }
  return(
    <div style= {prodStyle}>
      <h1>Name :{props.Products.name}</h1>
      <h2>Price:{props.Products.price}</h2>
      <button>Buy Now</button>

    </div>
  )
}
export default App;
