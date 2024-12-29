import "./App.css";
import ButtonClickHandler from "./components/ButtonClickHandler";
import FormSubmitHandler from "./components/FormSubmitHandler";
import MouseEventHandler from "./components/MouseEventHandler";

function App() {
  return (
    <>
      <h1>React JS Event Handler</h1>
      <MouseEventHandler />
      <ButtonClickHandler />
      <FormSubmitHandler />
    </>
  );
}

export default App;
