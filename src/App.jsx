import {useState} from 'react';
import './App.css';

function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')
  const Remove=(id)=>{
    setToDos(toDos.filter((obj2)=>obj2.id!==id));
  };

const addList=()=>{
  const regexp = /^([\W])+/
  if(regexp.test(toDo) || toDo.trim() === ''){
    alert('Only Words are allowed!')
  }else{
    const findindex = toDos.find(item=>
      item.text.toLowerCase()===toDo.toLowerCase())
      if(findindex){
        alert("Exist")
      }else{
        setToDos([...toDos,{id:Date.now(),text:toDo,status:false}]);
        setToDo('')
      }
  }
}

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop,it's {new Date().toLocaleDateString("en-US",{weekday:"long"})}🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={addList} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => (
    <div className="todo" key={obj.id}>
      <div className="left">
        <input
          onChange={(e) => {
            setToDos(
              toDos.map((obj2) => {
                if (obj2.id === obj.id) {
                  obj2.status = e.target.checked;
                }
                return obj2;
              })
            );
          }}
          value={obj.status} type="checkbox" name=""id=""/>
        <p>{obj.text}</p>
      </div>
      <div className="right">
        <i onClick={()=>Remove(obj.id)} className="fas fa-times"></i>
      </div>
    </div>

  ))}
  {toDos.map((obj) => {
    if (obj.status) {
      return <h1 key={obj.id}>{obj.text}</h1>;
    }
    return null;
  })}
 
</div>
    </div>
  );
}

export default App;
