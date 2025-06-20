import {Loader} from 'lucide-react'


function Buttons({isSubmitting,label}) {
  return (
    <button 
    disabled={isSubmitting}
    type="submit"
    className="bg-slate-500 p-2 text-white rounded-md hover:bg-slate-900 hover:scale-105 hover:cursor-pointer" 
    >
      {isSubmitting 
      ? <div className='flex gap-2'><Loader className='animate-spin'/><p>Loading</p></div> 
      : label}
    </button>
  );
}

export default Buttons;
