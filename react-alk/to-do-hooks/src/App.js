import React, { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("Wprowadź nazwę..."); //po usunięciu tutaj wartości zadziała placeholder
  //todos: Array<{name: string, isCompleted: boolean}> // => [{name: 'Zadanie 1', isCompleted: false}]

  const [todos, setTodos] = useState([
    { name: "Zadanie 1", isCompleted: false },
    { name: "Zadanie 2", isCompleted: false },
    { name: "Zadanie 3", isCompleted: false },
  ]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    if (inputValue !== "") {
      // mutowanie stanu [!!!!]
      // todos.push({ name: inputValue, isCompleted: false });

      setTodos([...todos, { name: inputValue, isCompleted: false }]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    // kopiuje stara tablice
    const newTodos = [...todos]; // usuwam element w nowej tablicy
    newTodos.splice(index, 1); // ustawiam w stanie nowa tablice
    setTodos(newTodos);
  };

  return (
    <section>
            
      <input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Wprowadź nazwę..."
      />
            <button onClick={handleAdd}>Add</button>
            <div>Wartość w inpucie: {inputValue}</div>
            
      <ul>
                
        {todos.map((el, index) => (
          <li key={index} onClick={() => handleDelete(index)}>
                        {el.name}
                      
          </li>
        ))}
              
      </ul>
          
    </section>
  );
};

export default App;
