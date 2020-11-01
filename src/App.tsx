import React from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

// Se ejecuta antes de poner el parametro en la funcion del componente.
function map(state: any, props: any) {
  props.state = state;
  console.log("M a p i n g");
  return { store: state };
}

interface Props {
  state: { counter: number };
  dispatch: (a: any) => void;
}

function App({ state, dispatch }: Props) {
  console.log("R e n d e r");
  console.log("state: ", state);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span
          className="App-link"
          onClick={() => {
            dispatch({ type: "INCREMENT" });
            //dispatch({ type: "USER_FETCH_REQUESTED" });
          }}
        >
          Learn React [{state ? state.counter : 0}]
        </span>
      </header>
    </div>
  );
}

export default connect(map)(App);
