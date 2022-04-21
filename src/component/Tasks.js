import React, {useState} from 'react'


export default function Tasks(props) {
  const [Todos, setTodos] = useState('Code')
  const [input, setInput] = useState('')

function handleInput(e){
    setInput(e.target.value)
    
}

function handleSelect(e){
    setTodos(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    console.log(input)
    console.log(Todos)
    setInput("")
    setTodos("Code")
props.setNewtodo({text: input, category: Todos})
}

function handleRemove(e){
 console.log(e.target.tasks.text)
 
}
  
    return (
    <div className='tasks' >
        <h5>Tasks</h5>
        <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInput} />
        <select value={Todos} onChange={handleSelect}>
            <option>Code</option>
            <option>Food</option>
            <option>Money</option>
            <option>Misc</option>
        </select>
        <button type="submit">Add task</button>
        </form>
        {props.newCat === "All" ? props.tasks.map((task, index) => 
        <div key={index} style={{position: "relative"}} className="task"><div className="label">{task.category}</div><div className="text">{task.text}<button onClick={handleRemove} style={{position: "absolute", right: "3px"}}>X</button></div></div>) : 
        props.tasks.filter(task => task.category === props.newCat).map((task, index) => 
        <div key={index} style={{position: "relative"}} className="task"><div className="label">{task.category}</div><div className="text">{task.text}<button onClick={handleRemove} style={{position: "absolute", right: "3px"}}>X</button></div></div>)}
        
    </div>
  )
}
