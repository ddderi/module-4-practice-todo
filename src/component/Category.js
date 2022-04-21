import React, {useState} from 'react'
import '/home/dorken/react/module-4-practice-todo/src/App.css'


export default function Category(props) {
 const [categorie, setCategorie] = useState('All')
 const [color, setColor] = useState(false)



 function handleChange(e){
   e.preventDefault()
   setCategorie(e.target.value)
   console.log(e.target.value)
   props.setCategorieApp(e.target.value)
   setColor(!color);
 }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {props.categories.map((cat, index) => <button className={color ? 'selected' : null} onClick={handleChange} value={cat} key={index}>{cat}</button>)}
    </div>
  )
}
