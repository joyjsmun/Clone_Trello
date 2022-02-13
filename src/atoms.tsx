import {atom,selector} from "recoil";

interface IToDoState{
[key:string]:string[];
}

export const toDoState = atom<IToDoState>({
    key:"toDo",
    default:{
        "ToDo":["a","b","c","d","e"],
        Doing:["f","g"],
        Done:["h"],
        Love:[],
    }
}) 