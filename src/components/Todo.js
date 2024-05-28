import React, { useState } from 'react';
import axios from 'axios';


function ToDo() {

    // Declaration
    const [task, setTask]= useState("");

    // Functions

    function handleInput(e){
        setTask(e.target.value); 
    }

    function addTask(e){
        e.preventDefault();
        // Tasks to be sent will be lists
        const data = { list: task };

        // Now I will post my task
        axios.post('http://localhost:4000/list', data)
        .then(function (response){
            console.log('Success:', response.data);
            // Clear Input Section
            document.getElementById("taskInput").value= "";
        })
        .catch(function(error) {
            console.error('Error:', error);
        });
    }


    // inline style

    const style = {
        width: "36rem",
        alignSelf: "center",
    }

    return (
        <div class="bd">
            
            <div class="card" style={style}>


                <div class="card-header">
                    <h3>TO DO APP</h3>
                </div>


                <input id='taskInput' onChange={handleInput} />


                <button type="button" class="btn btn-success" onClick={addTask}>Add Task</button>
                <p>{task}</p>

                <ul class="list-group list-group-flush">
                    

                </ul>
                </div>
                

        </div>

        
        
    );

}

export default ToDo;