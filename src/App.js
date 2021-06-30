import './App.css';
import Fetch from './Example/Fetch';
import Todo from './todo/Todo';
// import Counter from './Counter/Counter';

function App() {
  const todos = [
    { id: 1, title: 'buy fruits', completed: false },
    { id: 2, title: 'read novel', completed: true },
    { id: 3, title: 'cook food', completed: false }
  ]
  return (
    <div className="App">
      <Fetch url={'https://jsonplaceholder.typicode.com/comments'} />

      {/* <Counter /> */}

      {/* {todos.map((todo) => {
        return (<Todo todo={todo} />)
      })} */}

      {/* <Todo  /> */}
    </div>
  );
}

export default App;
