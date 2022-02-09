import React from "react";
import { ITodo, toDoState } from "../atoms";
import {useSetRecoilState} from "recoil";

function ToDo({text,category,id}:ITodo){
    const setToDos = useSetRecoilState(toDoState);
   const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    const {
        currentTarget:{name}, 
    } = event ;
   }
    return (
        <li>
            <span>{text}</span>;
            {category !== "To_Do" && <button name="To_Do" onClick={onClick}>To Do</button>}
            {category !== "Doing" && <button name="Doing" onClick={onClick}>Doing</button>}
            {category !== "Done" && <button name="Done" onClick={onClick}>Done</button>}
        </li>
    )
}

export default ToDo;