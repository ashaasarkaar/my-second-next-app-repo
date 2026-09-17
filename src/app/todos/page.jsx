

const TodosPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await res.json();
    console.log(todos)
    return (
        <div>
            <h1>To-Dos: {todos.length}</h1>
        </div>
    );
};

export default TodosPage;
