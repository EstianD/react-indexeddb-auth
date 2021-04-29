import "./App.css";
import Signup from "./Components/Signup";
import { getUsers, addUser } from "./Services/users";

function App() {
  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
