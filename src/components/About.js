import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import { useEffect } from "react";
const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>
        About{a.state.name} and class {a.state.class}
      </h1>
    </div>
  );
};

export default About;
