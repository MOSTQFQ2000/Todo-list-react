import React, { useState } from "react";

function NewTodoForm(props:{addTodo : Function}) {

    const [description , setDescription] = useState('');
    const [assigned , setAssigned] = useState('');

    const submitTodo = () => {
        if (assigned !== '' && description !=='' ){
            props.addTodo(description , assigned);
            setAssigned('');
            setDescription('');
        }
    }

    return (

        <div>
            <form>
                <div><br></br>
                    <label className="form-label" >Assigned</label>
                    <input 
                        type='text' 
                        className="form-control"
                        onChange={e =>setAssigned(e.target.value)}
                        ></input>
                </div>
                <div>
                    <label className="form-label" >Description</label>
                    <input 
                        type='text' 
                        className="form-control" 
                        onChange = {e => setDescription(e.target.value)}
                    ></input>
                </div>
                <button 
                type="button" 
                className="btn btn-primary mt-3"
                onClick={submitTodo}
                >add todo</button>
            </form>
        </div>
    )

}
export default NewTodoForm 