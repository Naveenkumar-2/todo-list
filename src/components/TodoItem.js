import Tick from '../assets/tick.png';
import NotTick from '../assets/not_tick.png';
import Delete from '../assets/delete.png'

export default function TodoItem ({text, id, isComplete, deleteTodo,toggle}){
    return <div className='flex my-3 gap-2'>

        <div onClick={()=>{toggle(id)}} className='flex flex-1 cursor-pointer'>
        
         <img src={isComplete ? Tick : NotTick} alt='' className='relative w-[20px] h-[20px] mt-1'/>
         <p className={`ml-4 text-slate-700  text-[17px] ${isComplete ? "line-through ": ""}`}>{text}</p>
        </div>

        <img onClick={()=>deleteTodo(id)} src={Delete} className='w-[15px] h-4 mt-2 cursor-pointer '  alt=''/>
    </div>
}