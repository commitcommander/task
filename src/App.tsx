import React from "react";
import "./styles/reset.scss";
import "./styles/fonts.scss";
import "./styles/global.scss";
import { Header, NotesList } from "./components";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <NotesList />
      </main>
    </div>
  );
}

export default App;
