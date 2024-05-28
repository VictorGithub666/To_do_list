import React, { useState } from 'react';


function ToDo() {

    // Declaration
    const [data, setData]= useState("");

    // Functions

    function handleInput(e){
        setData(e.target.value);
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


                <input onChange={handleInput} />


                <button type="button" class="btn btn-success">Add Task</button>
                <p>{data}</p>

                <ul class="list-group list-group-flush">
                    

                </ul>
                </div>
                

        </div>

        
        
    );

}

export default ToDo;