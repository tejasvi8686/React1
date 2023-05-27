import './App.css';
import { useEffect, useState } from 'react';

function App(){
  const [text,setText] = useState('');
  const [name, setName]= useState('love')
  
  //variation 1 -> Every Render
  // useEffect (
  //   () => {
  //     console.log("UI Rendering Done");
  //   });


    // Variation 2 -> First Render
    // useEffect ( () =>{
    //   console.log("UI Rendering Done");
    // },[]);



    //variation 3 -> whenever dependency changes
    // useEffect (
    //   ()=>{
    //     console.log("change observed");
    //   },[name]);



    //variation 4 -> to handle unmounting of a component
    useEffect (
      ()=>{
        // add event  listener
        console.log("listener added");

        
        return () =>
        {console.log("listner removed");
      }},[text]);



  function  ChangeHandler (event) {
      console.log(text);
      setText(event.target.value);
  }


  return(
    <div className="App">
    <input type = "text"onChange={ChangeHandler}></input>

    </div>
  );
}

export default App;