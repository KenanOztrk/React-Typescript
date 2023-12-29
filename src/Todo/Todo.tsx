import React, { useState } from 'react'
import Input from '../components/Input'

const Todo:React.FC = () => {
    const [todo, setTodo] = useState<string>('')

    // const [num, setNum] useState<number[]>([])
  return (
    <div>
        <Input todo={todo} setTodo={setTodo} />
    </div>
  )
}

export default Todo