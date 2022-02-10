import {atom,selector} from "recoil";

export interface ITodo{
    text:string;
    id:number,
    category:"To_Do" | "Doing" |"Done";

}

 
export const toDoState = atom<ITodo[]>({
    key:"toDo",
    default: [],

});

export const toDoSelector = selector({
    key:"toDoSelector",
    get:({get}) => {
        const toDos = get(toDoState)
       return [
           toDos.filter((toDo) => toDo.category === "To_Do"),
           toDos.filter((toDo) => toDo.category === "Done"),
           toDos.filter((toDo) => toDo.category === "Doing"),
    ];
    }
})