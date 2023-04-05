import { useState } from "react";
// import "./styles.css";
import Header from "./components/header";
import UserForm from "./components/userfrom";
import Greeting from "./components/greeting";
 function App() {
  const [name, setName] = useState("")
  ;
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <Header></Header>
      <UserForm onChange={handleInputChange}/>
      <Greeting name={name}/>
    </div>
  );
}

export default App;
