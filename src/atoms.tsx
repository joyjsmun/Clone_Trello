import {atom,selector} from "recoil";

export interface ITodo{
    text:string;
    id:number,
    category:"To_Do" | "Doing" |"Done";

}

export const categoryState = atom({
    key:"category",
    default:"To_Do",
});

 
export const toDoState = atom<ITodo[]>({
    key:"toDo",
    default: [],

});

export const toDoSelector = selector({
    key:"toDoSelector",
    get:({get}) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
    }
})