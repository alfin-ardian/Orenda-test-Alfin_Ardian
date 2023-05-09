import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import DenseTable from "./components/DenseTable";
import MainLayout from "./layouts/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
      <MainLayout />
    </>
  );
}

export default App;
