import {atom,selector} from "recoil";


export const muinuteState = atom({
    key:"minutes",
    default:0,
})


export const hoursSelector = selector({
    key:"hours",
    get:({get}) =>{
        const mins = get(muinuteState);
        return mins/60;
    }

})