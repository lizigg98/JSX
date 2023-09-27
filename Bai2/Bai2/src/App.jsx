import { useState } from "react";

function App() {

const [text, setText] = useState("");

  const handleOnChange = (event) => {
    console.log(event);
    const value = event.target.value;
    setText(value);
  };
 return (
 <div>
  <input type="text" onChange={handleOnChange} />
  <p>{text}</p>
 </div>
 );
}
export default App;