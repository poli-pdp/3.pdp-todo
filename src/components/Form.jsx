import { useEffect } from 'react';
import uuid4 from 'uuid4';
const Form = ({ inputTodo, setInputTodo, todos, setTodos, edit, setEdit }) => {
	useEffect(() => {
		if (edit) {
			setInputTodo(edit.title);
		} else {
			setInputTodo('');
		}
	}, [edit]);

	const updateTodoTitle = todo => {
		const newTodos = todos.map(item =>
			item.id === todo.id ? { ...todo, title: inputTodo } : item
		);
		setTodos(newTodos);
		setEdit(null);
	};

	const handleInput = ({ target }) => {
		setInputTodo(target.value);
	};
	const handlerSubmit = env => {
		env.preventDefault();
		if (edit) {
			updateTodoTitle(edit);
		} else {
			const newTodo = { id: uuid4(), title: inputTodo, completed: false };
			setTodos([...todos, newTodo]);
			setInputTodo('');
		}
	};
	return (
		<form onSubmit={handlerSubmit}>
			<input
				type='text'
				placeholder='Enter to Todo'
				value={inputTodo}
				onChange={handleInput}
			/>
			<button type='submit'>{edit ? 'Edit' : 'Add'}</button>
		</form>
	);
};

export default Form;
