import "./App.css";
import MyNewComponent from "./components/MyNewComponent";
import Messages from "./components/Messages";
import PersonCard from "./components/PersonCard";
import React from "react";

function App() {
  const [personList,setPersonList] =React.useState([
    {id: 1 ,firstName:"Doe",lastName:"Jana",age:44 ,hairColor:"Black" },
    {id: 2 ,firstName:"Smith",lastName:"John",age:84 ,hairColor:"Brown" },
    {id: 3 ,firstName:"Fillmore",lastName:"Mellarad",age:74 ,hairColor:"Brown" },
    {id: 4 ,firstName:"Smith",lastName:"Maria",age:94 ,hairColor:"Brown" }
    ])

  function handleButtonClick(id) {

    setPersonList(personList.map(p=> p.id ==id?{...p, age: p.age+1} :p ))
    console.log("button got clicked in parent id= " + id);
  }

  return (
    <div className="App">
      {personList.map((person, index) => ( <PersonCard key={person.id}
          person={person}
          handleButtonClick={handleButtonClick}

        />
      ))}
    </div>
  );
}

export default App;
