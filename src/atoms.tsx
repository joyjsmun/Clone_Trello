import {atom,selector} from "recoil";

export enum Categories{
    "To_Do" = "TODO",
    "Doing" = "DOING",
    "Done" = "DONE"
}


export interface ITodo{
    text:string;
    id:number,
    category:Categories;

}

export const categoryState = atom<Categories>({
    key:"category",
    default:Categories.To_Do,
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