import React, { useState, useEffect } from "react";

const styles = {
  container: {
    minHeight: "100vh",
    padding: "2rem",
    background: "linear-gradient(135deg, #f0f7ff 0%, #e8eaff 100%)",
    fontFamily: "system-ui, sans-serif"
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem"
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #2563eb, #4f46e5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "0.5rem"
  },
  subtitle: {
    color: "#4b5563",
    fontSize: "1.1rem"
  },
  error: {
    background: "#fef2f2",
    border: "1px solid #fecaca",
    color: "#dc2626",
    padding: "1rem",
    borderRadius: "0.5rem",
    marginBottom: "1.5rem",
    maxWidth: "28rem",
    margin: "0 auto 1.5rem"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  card: {
    background: "white",
    borderRadius: "1rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "1.5rem"
  },
  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "1.5rem"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    border: "1px solid #e5e7eb",
    borderRadius: "0.5rem",
    fontSize: "1rem"
  },
  textarea: {
    width: "100%",
    padding: "0.75rem",
    border: "1px solid #e5e7eb",
    borderRadius: "0.5rem",
    minHeight: "150px",
    resize: "vertical",
    fontSize: "1rem"
  },
  buttonGroup: {
    display: "flex",
    gap: "0.5rem",
    marginTop: "0.5rem"
  },
  button: {
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    fontWeight: "500",
    cursor: "pointer",
    border: "none",
    transition: "background-color 0.2s"
  },
  primaryButton: {
    backgroundColor: "#3b82f6",
    color: "white",
    flex: "1"
  },
  secondaryButton: {
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    color: "#374151"
  },
  note: {
    background: "linear-gradient(90deg, #f0f7ff, #e8eaff)",
    border: "1px solid #e5e7eb",
    borderRadius: "0.5rem",
    padding: "1rem",
    marginBottom: "1rem",
    transition: "box-shadow 0.2s"
  },
  noteTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#2563eb",
    marginBottom: "0.5rem"
  },
  noteBody: {
    color: "#4b5563",
    whiteSpace: "pre-wrap"
  },
  noteActions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "0.5rem",
    marginTop: "1rem"
  },
  deleteButton: {
    backgroundColor: "#ef4444",
    color: "white"
  },
  emptyState: {
    textAlign: "center",
    color: "#6b7280",
    padding: "2rem"
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh"
  },
  spinner: {
    width: "48px",
    height: "48px",
    border: "4px solid #e5e7eb",
    borderTop: "4px solid #3b82f6",
    borderRadius: "50%",
    animation: "spin 1s linear infinite"
  }
};

function App() {
  const [notes, setNotes] = useState(null);
  const [createForm, setCreateForm] = useState({ title: "", body: "" });
  const [updateForm, setUpdateForm] = useState({ _id: null, title: "", body: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://localhost:3000/notes");
      const data = await res.json();
      setNotes(data.notes);
    } catch (err) {
      setError("Failed to fetch notes. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;
    setCreateForm({ ...createForm, [name]: value });
  };

  const createNote = async (e) => {
    e.preventDefault();
    if (!createForm.title || !createForm.body) {
      setError("Please fill in all fields");
      return;
    }
    
    try {
      const res = await fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(createForm),
      });
      const data = await res.json();
      setNotes([...notes, data.note]);
      setCreateForm({ title: "", body: "" });
      setError("");
    } catch (err) {
      setError("Failed to create note. Please try again.");
    }
  };

  const deleteNote = async (_id) => {
    try {
      await fetch(`http://localhost:3000/notes/${_id}`, { method: "DELETE" });
      setNotes(notes.filter((note) => note._id !== _id));
    } catch (err) {
      setError("Failed to delete note. Please try again.");
    }
  };

  const handleUpdateFieldChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm({ ...updateForm, [name]: value });
  };

  const toggleUpdate = (note) => {
    setUpdateForm({ title: note.title, body: note.body, _id: note._id });
  };

  const cancelUpdate = () => {
    setUpdateForm({ _id: null, title: "", body: "" });
  };

  const updateNote = async (e) => {
    e.preventDefault();
    if (!updateForm.title || !updateForm.body) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/notes/${updateForm._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: updateForm.title, body: updateForm.body }),
      });
      const data = await res.json();
      setNotes(notes.map((note) => 
        note._id === updateForm._id ? data.note : note
      ));
      setUpdateForm({ _id: null, title: "", body: "" });
      setError("");
    } catch (err) {
      setError("Failed to update note. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div style={styles.loader}>
        <div style={styles.spinner} />
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Notes App</h1>
        <p style={styles.subtitle}>Your personal space for thoughts and ideas</p>
      </header>

      {error && <div style={styles.error}>{error}</div>}

      <div style={styles.grid}>
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>
            {updateForm._id ? "Update Note" : "Create Note"}
          </h2>
          <form onSubmit={updateForm._id ? updateNote : createNote} style={styles.form}>
            <input
              style={styles.input}
              onChange={updateForm._id ? handleUpdateFieldChange : updateCreateFormField}
              value={updateForm._id ? updateForm.title : createForm.title}
              name="title"
              placeholder="Title"
            />
            <textarea
              style={styles.textarea}
              onChange={updateForm._id ? handleUpdateFieldChange : updateCreateFormField}
              value={updateForm._id ? updateForm.body : createForm.body}
              name="body"
              placeholder="Write your note here..."
            />
            <div style={styles.buttonGroup}>
              <button
                style={{ ...styles.button, ...styles.primaryButton }}
                type="submit"
              >
                {updateForm._id ? "Update Note" : "Create Note"}
              </button>
              {updateForm._id && (
                <button
                  type="button"
                  onClick={cancelUpdate}
                  style={{ ...styles.button, ...styles.secondaryButton }}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>Your Notes</h2>
          {notes && notes.length > 0 ? (
            <div>
              {notes.map((note) => (
                <div key={note._id} style={styles.note}>
                  <h3 style={styles.noteTitle}>{note.title}</h3>
                  <p style={styles.noteBody}>{note.body}</p>
                  <div style={styles.noteActions}>
                    <button
                      style={{ ...styles.button, ...styles.deleteButton }}
                      onClick={() => deleteNote(note._id)}
                    >
                      Delete
                    </button>
                    <button
                      style={{ ...styles.button, ...styles.primaryButton }}
                      onClick={() => toggleUpdate(note)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={styles.emptyState}>
              <p>No notes yet. Create one to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;