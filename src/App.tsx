import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hoursSelector, muinuteState } from "./atoms";

function App() {
  const [mins,setMins] = useRecoilState(muinuteState);
  const hours = useRecoilValue(hoursSelector);
  const onMinsChange = (event:React.FormEvent<HTMLInputElement>) =>{
    setMins(+event.currentTarget.value)
  }
  return (
   <div>
     <input value={mins} onChange={onMinsChange} type="number" placeholder="Minutes" />
     <input value={hours} type="number" placeholder="Hours"  />

   </div>
  );
}

export default App;