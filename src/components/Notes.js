import React, { useContext, useEffect,useRef } from "react";
import NoteItem from "./NoteItem";
import NoteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
import { EmojiFoodBeverageTwoTone } from "@material-ui/icons";
const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getallNotes } = context;
  useEffect(() => {
    getallNotes();
    // eslint-disable-next-line
  }, []);

  const ref=useRef(null)

  const updatenote = (note) => {
      ref.current.click()
  };

  return (
    <>
      <AddNote />

      <button ref={ref} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.length > 0 &&
          notes.map((note) => {
            return (
              <NoteItem key={note._id} updatenote={updatenote} note={note} />
            );
          })}
      </div>
    </>
  );
};

export default Notes;
