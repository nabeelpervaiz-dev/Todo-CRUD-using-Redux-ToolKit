import { createSlice, current, nanoid } from "@reduxjs/toolkit";
export const TodoSlice =createSlice({

    name:'Todo',
    initialState:{
    TodoList:[
        {
            id:1,
            title:"Create login",
            discription:"using react and tailwind Css"
        }
    ],
    popup:false,

    UpdatedElementId:"",
    UpdatedTitle:"",
    UpdatedDiscription:"",
    },
    reducers:{
///// function that will add a todo to the data
     AddTodo:(state ,actions)=>{
    const NewNote={
        id:nanoid(),
        title:actions.payload.title,
        discription:actions.payload.discription
    }
    state.TodoList.push(NewNote)
    
    },
      /// function that will remove data from todo list 
    DeleteTodo:(state , actions)=>{
      
        const NewList= state.TodoList.filter((elem)=>{
            return elem.id !== actions.payload
        })

        state.TodoList=NewList;
    },
    //function that will update the todo list ...
    //basically edit button ..
    UpdateTodo:(state ,actions)=>{

     const Element_to_Edit=current(state.TodoList.find((elem)=>{
    return elem.id === actions.payload
     }))

    state.UpdatedElementId=Element_to_Edit.id
    console.log(state.UpdatedElementId)
   state.UpdatedTitle=Element_to_Edit.title
   state.UpdatedDiscription=Element_to_Edit.discription
   

    },

    /// use to open dilogue to edit the form... when click on edit
    PopUp:(state , actions)=>{
      state.popup = actions.payload
    },

    Set_Updated_value:(state , actions)=>{
     console.log(state.UpdatedElementId)
  const ApplyChanges=state.TodoList.find((elem)=>{
    return elem.id === state.UpdatedElementId
  })
  console.log(ApplyChanges)
   if (ApplyChanges) {
    ApplyChanges.title = actions.payload.Utitle;
    ApplyChanges.discription = actions.payload.Udiscription;
  }
    }


}
   

})
export const {AddTodo, DeleteTodo , UpdateTodo ,PopUp , Set_Updated_value} = TodoSlice.actions
export default TodoSlice.reducer