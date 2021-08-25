import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  
  function deleteNote() {
	props.deleteFunction({
      id: props.id,
      title: props.title,
      content: props.content
    });
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNote}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
