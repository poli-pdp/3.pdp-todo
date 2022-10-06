import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos, setEdit }) => {
	const deleteTodo = ({ id }) => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	const completedTodo = todo => {
		const newTodos = todos.map(item =>
			item.id === todo.id ? { ...todo, completed: !item.completed } : item
		);
		setTodos(newTodos);
	};

	return (
		<div>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					deleteTodo={deleteTodo}
					completedTodo={completedTodo}
					setEdit={setEdit}
				/>
			))}
		</div>
	);
};

export default TodoList;
