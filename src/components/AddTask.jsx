import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../Redux/Features/TodoSlice";

function AddTask() {
const [title, settitle] = useState("")
const [discription, setdiscription] = useState("")

const dispatch = useDispatch()


const SubmitHandle = (e)=>{
  e.preventDefault();
  console.log("form submitted")
 dispatch(AddTodo({title,discription}))
 settitle('')
 setdiscription('')
}
  return (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

      <h2 className="text-lg font-semibold text-gray-900">
        Add a new task
      </h2>

      <p className="text-sm text-gray-500 mt-1 mb-6">
        Fill in the details below to create a task.
      </p>

      <form onSubmit={(e)=>{
        SubmitHandle(e)
      }}
      className="space-y-4">

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Task title
          </label>

          <input
             value={title}
             onChange={(e)=>{
                settitle(e.target.value)
             }}
            type="text"
            placeholder="e.g. Complete React project"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-gray-900 transition"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>

          <textarea
           value={discription}
             onChange={(e)=>{
                setdiscription(e.target.value)
             }}
            rows="4"
            placeholder="Write a short description..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none resize-none focus:border-gray-900 transition"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-gray-900 text-white text-sm font-medium py-2.5 active:scale-95 rounded-lg hover:bg-gray-800 transition"
        >
          + Add Task
        </button>

      </form>
    </div>
  );
}

export default AddTask;