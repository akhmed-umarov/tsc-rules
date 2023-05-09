import { useState  , useEffect , useRef } from 'react'

import { ITodo } from '../../types/data';

const App:React.FC = () =>{
  const [value, setValue] = useState('');
  const [todos , setTodos] = useState<ITodo[]>([])

  const addTodos = ():void=>{ 
    if (value) { 
      const newTodo:ITodo = { 
        id: Date.now(), 
        title: value,
        complete: false,
      }
      setTodos([...todos , newTodo]);
      setValue('');
    }
  }
  return (
      <div>
          <div>
                <input type="text" value={value} onChange={e=>setValue(e.target.value)}/>
                <button onClick={addTodos}>Add</button>
          </div>
      </div>
  )
}

export default App
