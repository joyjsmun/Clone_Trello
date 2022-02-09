import React, { useState } from "react";
import {useForm} from "react-hook-form";

interface IForm {
    toDo:string;
}
    
function ToDoList(){
    const {register,handleSubmit,setValue} = useForm<IForm>();
    const handleValid = (data:IForm) => {
        console.log('add to do : ',data.toDo);
        setValue("toDo","");
    }
    return <div>
        <h1>LifeisJoy's Todos</h1>
        <hr />
        <form onSubmit={handleSubmit(handleValid)}>
            <input 
            {...register("toDo",{
                required:"Please write a To Do",
            })} 
            placeholder="Write Todo" />
            <button>Add</button>
        </form>
    </div>
}

export default ToDoList;