import {atom} from "recoil";

export interface ITodo{
    text:string;
    id:number,
    category:"To_Do" | "Doing" |"Done";

}

 
export const toDoState = atom<ITodo[]>({
    key:"toDo",
    default: [],

});

