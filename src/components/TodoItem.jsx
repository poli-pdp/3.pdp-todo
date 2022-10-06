import { FaTrash, FaEdit, FaCheckCircle } from 'react-icons/fa';
const TodoItem = ({ todo, deleteTodo, completedTodo, setEdit }) => {
	return (
		<li className='list'>
			<div className={`listItem ${todo.completed ? 'complete' : ''}`}>
				{todo.title}
			</div>
			<div>
				<button onClick={() => completedTodo(todo)}>
					<FaCheckCircle />
				</button>
				<button onClick={() => setEdit(todo)}>
					<FaEdit />
				</button>
				<button onClick={() => deleteTodo(todo)}>
					<FaTrash />
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
