import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

const url = "http://localhost:4000";

function App() {
  const [noteArray, updateNoteArray] = React.useState([]);

  React.useEffect(() => {
    axios.get(url+"/")
      .then((res) => {
        // console.log(res.data);
        updateNoteArray(res.data)
      })
      .catch((err) => console.error(err));
  }, []);

  function addFunction(obj) {
    
    updateNoteArray([...noteArray, obj]);
    
    axios.post(url+"/add", obj)
      .catch((err) => console.log(err));
  }

  function deleteFunction(obj) {

    updateNoteArray(noteArray.filter((_, index) => index !== obj.id));
    
    axios.post(url+"/delete", {title: obj.title, content: obj.content})
      .catch((err) => console.log(err));
  }

  function notesMapping(currNote, index) {
    return (
      <Note
        key={index}
        id={index}
        title={currNote.title}
        content={currNote.content}
        deleteFunction={deleteFunction}
      />
    );
  }

  return (
    <div>
      <Header />
      <CreateArea addFunction={addFunction} />
      {noteArray.map(notesMapping)}
      <Footer />
    </div>
  );
}

export default App;
