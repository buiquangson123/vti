import { Fragment } from "react";
import "./App.css";
import BodyPage from "./components/test-page/BodyPage";
import NavPage from "./components/test-page/NavPage";

function App() {
  return (
    <Fragment>
      <div className="App flex min-w-full min-h-full">
        <NavPage></NavPage>
        <BodyPage></BodyPage>
      </div>
    </Fragment>
  );
}

export default App;
