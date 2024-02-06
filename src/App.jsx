import { useState } from 'react'
import './App.css'
import Transection from './components/Transection';
import FormComponents from './components/FormComponents';
import DataContext from './data/DataContext';
import Report from './components/Report';


function App() {

  const [items, setItems] = useState([])

  function onAddNewItem(newItem) {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    });
    console.log('Info form Components ', newItem);
  }


  return (
    <DataContext.Provider value={"Hello React"}>
      <div className="container">
        <h1 style={{ color: 'red', textAlign: 'center' }}>แอพรายรับ - รายจ่าย</h1>
        <Report/>
        <FormComponents onAddItem={onAddNewItem} />
        <Transection items={items} />
      </div>
    </DataContext.Provider>

  );
}

export default App;
