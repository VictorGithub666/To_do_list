import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ToDo() {

    // Declaration
    const [task, setTask]= useState("");

    const [tasks, setTasks] = useState([]);

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
            fetchTasks();
        })
        .catch(function(error) {
            console.error('Error:', error);
        });

    }


    function fetchTasks() {
        // Send a GET request to the server to fetch tasks from db.json using axios
        axios.get('http://localhost:4000/list')
          .then(function (response) {
            // Update the state with the fetched tasks
            setTasks(response.data);
          })
          .catch(function (error) {
            // Handle any errors
            console.error('Error fetching tasks:', error); // Log any errors
          });
      }
    
      // useEffect hook to fetch tasks when the component mounts
      useEffect(function () {
        fetchTasks();
      }, []);

      function deleteTask(id) {
        // Send a DELETE request to the server to delete a task by id using axios
        axios.delete('http://localhost:4000/list/' + id )
          .then(function(response) {
            console.log('Task deleted:', response.data);
    
            // Fetch the updated list of tasks
            fetchTasks();
          })
          .catch(function(error) {
            console.error('Error deleting task:', error);
          });
      }

    // function moveTaskDown(){

    // }

    // function moveTaskUp(){

    // }


    
  



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

                <ol class="list-group list-group-flush">
                {tasks.map(function (task, index) {
                  return <li key={index}>
                    {task.list}
                    <button onClick={function() { deleteTask(task.id); }}>&#128465;</button>
                    <button>&#128070;</button>
                    <button>&#128071;</button>
                    </li>;
                })}
                </ol>
                </div>
                

        </div>

        
        
    );
}




export default ToDo;