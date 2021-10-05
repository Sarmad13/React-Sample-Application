import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ControlledInputs from "./ControlledInputs";
import ShortCircuit from "./short-circuit";
import SimpleForm from "./SimpleForm";
import FormUseReducer from "./UseReducer/FormUseReducer";
import RouteReact from "./RouteReact";

function App() {
  return (
    <div
      style={
        {
          // backgroundImage:
          //   'url("https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
          // width: "100%",
        }
      }
    >
      <>
        <RouteReact></RouteReact>
        {/* <FormUseReducer></FormUseReducer> */}
        {/* <ControlledInputs/> */}
        {/* <ShortCircuit/> */}
        {/* <SimpleForm/> */}
      </>
    </div>
  );
}

export default App;
