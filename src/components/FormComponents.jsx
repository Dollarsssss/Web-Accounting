import React,{useState} from 'react'
import './FormComponents.css'
import { v4 as uuidv4 } from 'uuid';

function FormComponents({onAddItem}) {

    const [title , setTitle] = useState('')
    const [amout , setAmout] = useState(0)

    function inputTitle(event){
        setTitle(event.target.value)
       
    }

    function inputAmout(event){
        setAmout(event.target.value);
    }

    function saveItem(event){
        event.preventDefault()
        const ItemData = {
            id:uuidv4(),
            title:title,
            amout:Number(amout)
        }
        onAddItem(ItemData)
        setTitle('')
        setAmout(0)
    }
    return (
        <>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>Name List</label>
                    <input type="text" placeholder='Assign Name List' onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>Quantity Money</label>
                    <input type="text" placeholder='Assign Quantity Money' onChange={inputAmout} value={amout}/>
                </div>
                <div className='button-info'>
                    <button type='submit' on>Add Info</button>
                </div>
            </form>
        </>
    )
}

export default FormComponents