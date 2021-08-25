import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [expanded, toggleState] = React.useState(false);

  function expandfunction() {
    !expanded && toggleState(true);
  }

  const [titleVar, updateTitle] = React.useState("");
  const [noteVar, updateNote] = React.useState("");

  function addingTitle(event) {
    updateTitle(event.target.value);
  }

  function addingNote(event) {
    updateNote(event.target.value);
  }

  function buttonClick(event) {
    props.addFunction({ title: titleVar, content: noteVar });
    updateTitle("");
    updateNote("");
    toggleState(!expanded);
    event.preventDefault();
  }

  return (
    <div onClick={expandfunction}>
      <form className="create-note">
        {expanded && (
          <input
            onChange={addingTitle}
            value={titleVar}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onChange={addingNote}
          value={noteVar}
          name="content"
          placeholder="Take a note..."
          rows={expanded ? "3" : "1"}
        />
        {expanded && (
          <Zoom in={expanded}>
            <button onClick={buttonClick}>
              <AddIcon />
            </button>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
