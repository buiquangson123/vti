import { Fragment, useState } from "react";
import "./App.css";
import BodyPage from "./components/test-page/BodyPage";
import NavPage from "./components/test-page/NavPage";

function App() {
  const [isTranslate, setIsTranslate] = useState(true);
  return (
    <Fragment>
      <div className="App flex min-w-full min-h-full">
        <NavPage
          isTranslate={isTranslate}
          setIsTranslate={setIsTranslate}
        ></NavPage>
        <BodyPage isTranslate={isTranslate}></BodyPage>
      </div>
    </Fragment>
  );
}

export default App;
