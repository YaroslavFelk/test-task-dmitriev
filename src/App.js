import './App.css';
import ValidateComponent from "./components/ValidateComponent/ValidateComponent";

function App() {
  return (
    <div className="App">
      <ValidateComponent>
        <div>
            <ValidateComponent/>
            <span></span>
        </div>

        <div>
            <ValidateComponent>
                <ValidateComponent/>
            </ValidateComponent>
        </div>

        <ValidateComponent/>
      </ValidateComponent>
    </div>
  );
}

export default App;
