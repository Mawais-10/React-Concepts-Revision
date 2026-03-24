import { useState } from "react";
import Buttons from "./Components/Buttons";
// import { Conditionalrendering } from "./Components/Conditional-rendering";
import Profile from "./Components/Profile";
import RenderingList from "./RenderingList";
import Statee from "./State";

function App() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>All components will be rendered here</h1>
      <Buttons value={count} onClick={handleClick}/>
      <Buttons value={count} onClick={handleClick}/>
      <Profile />
      {/* <Conditionalrendering /> */}
      <RenderingList/>
      <Statee/>
     
    </div>
  );
}

export default App;
