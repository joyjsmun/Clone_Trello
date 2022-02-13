import {Droppable} from "react-beautiful-dnd";
import DraggableCard from "./Components/DraggableCard";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ITodo } from "./atoms";


const Wrapper = styled.div`
  
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius:3px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
`
const Title = styled.h2`
text-align: center;
font-weight: 600;
margin-bottom: 10px;
font-size: 18px;
`
interface IAreaProps{
    isDraggingOver:boolean;
    isDraggingFromThis:boolean;
}

const Area = styled.div<IAreaProps>`
    background-color: ${(props) =>(
        props.isDraggingOver ? 
        "#dfe6e9" 
        : props.isDraggingFromThis 
        ? "#b2bec3"
        :"transparent")};
    flex-grow: 1;
    padding:20px;
    transition: background-color 0.3s ease-in-out;

`

const Form = styled.form`
    width: 100%;
`


interface IBoardProps{
    toDos:ITodo[];
    boardId:string;
}

interface IForm{
    toDo:string;
}



function Board({toDos,boardId}:IBoardProps){
    const {register,setValue,handleSubmit} = useForm<IForm>();
    const onValid = (toDo:IForm) =>{
        setValue("toDo","");
         
    }
    return (
    <Wrapper>
        <Title>{boardId}</Title>
        <Form onSubmit={handleSubmit(onValid)}>
            <input {...register("toDo",{required:true})}type="text" placeholder={`Add Tesk on ${boardId}`} />
        </Form>
        <Droppable droppableId={boardId}>
        {(magic,snapshot) => 
        <Area isDraggingOver={snapshot.isDraggingOver} isDraggingFromThis = {Boolean(snapshot.draggingFromThisWith)} ref={magic.innerRef} {...magic.droppableProps}>
            
          {toDos.map((toDo,index) =>
          (<DraggableCard key={toDo.id} index={index} toDoId={toDo.id} toDoText={toDo.text} />
          ))}   
          {magic.placeholder}
          </Area>}
      </Droppable>
    </Wrapper>
    )
}


export default Board;