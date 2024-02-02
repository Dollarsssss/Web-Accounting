import React,{useState} from 'react'
import './FormComponents.css'

function FormComponents() {

    const [title , setTitle] = useState('')
    const [quantity , setQuantity] = useState(0)

    function inputTitle(event){
        setTitle(event.target.value)
       
    }

    function inputQuantity(event){
        setQuantity(event.target.value);
    }

    function saveItem(event){
        event.preventDefault()
        const ItemData = {
            title:title,
            quantity:Number(quantity)
        }
        console.log(ItemData);
        setTitle('')
        setQuantity(0)
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
                    <input type="text" placeholder='Assign Quantity Money' onChange={inputQuantity} value={quantity}/>
                </div>
                <div className='button-info'>
                    <button type='submit' on>Add Info</button>
                </div>
            </form>
        </>
    )
}

export default FormComponents