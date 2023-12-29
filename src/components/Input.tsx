import React from 'react'

type IProps = {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const Input:React.FC<IProps> = ({todo, setTodo}) => {
  return (
    <div>
        <input value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder='textt'></input>
        <button>Ekle</button>
        {todo}
    </div>
  )
}

export default Input