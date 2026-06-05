import React , {useState} from "react";

const AddTodo = () => {
    const [todo, setTodo] = useState("This is new state");
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e)
        console.log(todo)
    }

    return (
          <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={todo}
                onChange={(e)=> setTodo(e.target.value)}
            />

            <button type="submit">Add Todo</button>
           </form>
    );
};


export default AddTodo;