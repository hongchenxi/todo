import AddTodo from './addTodo'
import TodoList from './todoList'

import './styles.css'

const Todos = () => {
  return (
    <div className='todos'>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default Todos