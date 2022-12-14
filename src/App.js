import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Todo from './components/Todo';
import Covid from './components/Covid';
import { useState, useEffect } from 'react';
import {CountDown, NewCountDown} from './components/Countdown';
const App = () => {

  let [name, setName] = useState('Duong')
  const [address, setAddress] = useState('');

  const [todos, setTodos] = useState([
    {id: 'todo1', title: 'Watching youtube', type: 'MD'},
    {id: 'todo2', title: 'Facebook', type: 'MD'},
    {id: 'todo3', title: 'gaming', type: 'mduong'},
    {id: 'todo4', title: 'music', type: 'mduong'}
  ]);

  useEffect(() => {
    console.log('run use effect')
  }, [address]);

  useEffect(() => {
    console.log('run use effect todos')
  }, [todos]);

  const handleClickEvent = (event) => {
    if (!address) {
      alert('empty input')
      return;
    }

    let todo = { id: Math.floor((Math.random() * 100000) + 1), title: address, type: 'MD'};
    setTodos([...todos, todo]);
    setAddress('');
  }
  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  }

  const deleteDataTodo = (id) => {

    let curtodos = todos.filter(item => item.id !== id);
    setTodos(curtodos);
  }

  const onTimesup = () => {
    // alert('time up')
  }


  return (
    <div className="App">
      
      <header className="App-header">
        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />

        <CountDown onTimesup ={onTimesup}/>
        <span>----------------------</span>
        <NewCountDown onTimesup={onTimesup}/>
        <h1>Hello world with {name}!</h1>

                
        <Covid/>
        {/* <Todo
          todos = {todos}
          title = {'All Todos'}
          deleteDataTodo = {deleteDataTodo} 
        />
        <Todo
          todos = {todos.filter(item => item.type === 'MD')}
          title = {`Duong's todos`}
          deleteDataTodo = {deleteDataTodo} 
        />
        <input type="text" value={address} onChange={(event) => handleOnChangeInput(event)}/>
        <button type='button' onClick={(event) => handleClickEvent(event)}>Click me</button> */}
      </header>
    </div>
  );
}

export default App;
