import { useDispatch, useSelector } from "react-redux";
import { PopUp, Set_Updated_value } from "../Redux/Features/TodoSlice";
import { useState } from "react";



function UpdateTodo() {
  // const ID=useSelector((state)=>state.todo.UpdatedElementId)
  const Title=useSelector((state)=>state.Todo.UpdatedTitle)
  const Discription =useSelector((state)=>state.Todo.UpdatedDiscription)

  const [Utitle, setUtitle] = useState(Title)
  const [Udiscription, setUdiscription] = useState(Discription)

    const dispatch = useDispatch()



    const submitHandle=(e)=>{
     e.preventDefault()
     console.log("updated ", Utitle , Udiscription) 
     dispatch(Set_Updated_value({Utitle , Udiscription}))
     setUtitle("")
     setUdiscription("")

     dispatch(PopUp(false))
     }

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

      {/* Popup Card */}
      <div className="w-full max-w-md bg-white rounded-xl p-5 sm:p-6 shadow-2xl
        animate-[popup_0.25s_ease-out]">

        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Update Task
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          Edit your task details below.
        </p>

        <div className="space-y-4">

         <form onSubmit={(e)=>{
          submitHandle(e)
         }}>

 {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Task Title
            </label>

            <input
            value={Utitle}
            onChange={(e)=>{
                setUtitle(e.target.value)
            }}
              type="text"
              placeholder="Enter task title"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-gray-900"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>

            <textarea
              value={Udiscription}
            onChange={(e)=>{
            setUdiscription(e.target.value)
            }}
              rows="4"
              placeholder="Enter description"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none resize-none focus:border-gray-900"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 border-t border-gray-100 pt-4">

            <button
            onClick={()=>{
                dispatch(PopUp(false))
            }}
             className="px-4 py-2 text-sm text-gray-600 hover:text-black">
              Cancel
            </button>

            <button type="submit"
            className="px-4 py-2 text-sm bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
              Update Task
            </button>

          </div>

         </form>

        </div>
      </div>

      <style>{`
        @keyframes popup {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(15px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

    </div>
  );
}

export default UpdateTodo;