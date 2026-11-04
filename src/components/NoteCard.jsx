import { useDispatch } from "react-redux";
import { DeleteTodo, PopUp, UpdateTodo } from "../Redux/Features/TodoSlice";






function NoteCard({NoteId , NoteTitle , NoteDiscription}){
const dispatch = useDispatch()


  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-5 shadow-sm">

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {NoteTitle}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed mb-5">
       {NoteDiscription}
      </p>

      {/* Buttons */}
      <div className="flex items-center justify-end gap-3 border-t border-gray-100 pt-4">

        <button
        onClick={()=>{
       
     dispatch(PopUp(true))
      dispatch(UpdateTodo(NoteId))
          
          
        }}
          className="text-sm font-medium text-gray-600 hover:text-black transition"
        >
          Edit
        </button>

        <button
       onClick={()=>{
       dispatch(DeleteTodo(NoteId))
      

       }}
          className="text-sm font-medium text-red-500 hover:text-red-700 transition"
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default NoteCard;