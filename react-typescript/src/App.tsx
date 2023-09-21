import React from "react";

import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import { PersonList } from "./components/PersonList";
import Status from "./components/status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";

function App() {
  const personName = {
    first: "Solo",
    last: "Hsu",
  };

  const nameList = [
    {
      first: "Solo",
      last: "Hsu",
    },
    {
      first: "Solo",
      last: "Mon",
    },
    {
      first: "Hsu",
      last: "Hsu",
    },
  ];
  return (
    <div className="App">
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar go to Solo Hsu</Heading>
      </Oscar>
      <Greet name="Solo" isLoggedIn={false} />
    </div>
  );
}

export default App;
