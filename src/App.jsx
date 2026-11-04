
import AddTask from './components/AddTask'
import NoteCard from './components/NoteCard'
import { useSelector } from "react-redux";
import UpdateTodo from './components/UpdateTodo';
const App = () => {
  const AllTodos= useSelector((state)=>state.Todo.TodoList) 
  const Pop =useSelector((state)=>state.Todo.popup)   // for know the popup is false when it become true  will be appear..
    return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-10">

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="heading bg-blue-600 rounded-xl p-3 flex flex-col justify-center items-center" >
      <h1 className='text-center text-xl sm:text-4xl text-white font-bold'>Todo CRUD Using Redux ToolKit</h1>
      <h3 className='text-center text-sm sm:text-xl text-white'>By Nabeel Pervaiz</h3>
    </div>

    {/* Left Side - Add Task Form */}
    <div className="md:col-span-1">
      <AddTask/>
    </div>
    {/* Right Side - Task Cards */}
    <div className="md:col-span-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {AllTodos.map((elem , idx)=>
        {
            return <NoteCard
            key={idx}
            NoteId={elem.id}
            NoteTitle={elem.title}
            NoteDiscription={elem.discription}
        
            />
          })}

          {Pop? <UpdateTodo /> :null}
          
      </div>
    </div>

  </div>
</div>
  )
}

export default App
