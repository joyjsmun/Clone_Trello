import {atom,selector} from "recoil";


export const muinuteState = atom({
    key:"minutes",
    default: 0,
})


export const hoursSelector = selector<number>({
    key:"hours",
    get:({get}) =>{
        const mins = get(muinuteState);
        return mins/60;
    },
    set:({set},newValue) => {
        const mins = Number(newValue) * 60;
        set(muinuteState,mins);
    },
})