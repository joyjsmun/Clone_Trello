import React from "react";
import { ITodo, toDoState } from "../atoms";
import {useSetRecoilState} from "recoil";

function ToDo({text,category,id}:ITodo){
    const setToDos = useSetRecoilState(toDoState);
   const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    const {
        currentTarget:{name}, 
    } = event ;
    setToDos(oldToDos => {
        const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
        const oldToDo = oldToDos[targetIndex];
        const newToDo = {text,id,category:name as any};
        return [...oldToDos.slice(0,targetIndex),newToDo,...oldToDos.slice(targetIndex+1)];
    })
   }
    return (
        <li>
            <span>{text}</span>
            {category !== "To_Do" && <button name="To_Do" onClick={onClick}>To Do</button>}
            {category !== "Doing" && <button name="Doing" onClick={onClick}>Doing</button>}
            {category !== "Done" && <button name="Done" onClick={onClick}>Done</button>}
        </li>
    )
}

export default ToDo;