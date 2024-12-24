import React, { useEffect, useState } from "react";
import Axios from "axios";

const TodoList = () => {
  const [data, setData] = useState(""); // Get TodoList
  const [inputText, setInputText] = useState("");
  const [editText, setEditText] = useState("");
  const [editingId, setEditingId] = useState(null); // ID of the item being edited

  // Fetch Data
  const getData = async () => {
    const response = await Axios.get("http://localhost:3000/Todolist");
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleInputChange = (event) => setInputText(event.target.value);
  const handleEditChange = (event) => setEditText(event.target.value);

  // Add New Item
  const handleNewClick = async (event) => {
    event.preventDefault();
    if (inputText.trim() === "") return; // Prevent empty submissions
    await sendTextToBackend(inputText);
    setInputText(""); // Clear input field
    getData(); // Refresh data
  };

  const sendTextToBackend = async (text) => {
    try {
      await fetch("http://localhost:3000/Todolist/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Edit Item
  const handleButtonClick = async (event, id) => {
    event.preventDefault();
    if (editText.trim() === "") return; // Prevent empty submissions
    await sendEditToBackend(editText, id);
    setEditingId(null); // Exit edit mode
    getData(); // Refresh data
  };

  const sendEditToBackend = async (text, id) => {
    try {
      await fetch("http://localhost:3000/Todolist/edit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, id }),
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Delete Item
  const handleDeleteClick = async (event, id) => {
    try {
      await deleteFromBackend(id);
      await getData(); // Refresh data
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Failed to delete the item. Please try again.");
    }
  };

  const deleteFromBackend = async (id) => {
    try {
      await fetch("http://localhost:3000/Todolist/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Toggle Edit Mode
  const toggleButtonVisibility = (id, currentTitle) => {
    setEditingId(id);
    setEditText(currentTitle);
  };

  // FrontEnd

  return (
    <div className="Todolist">
      <div className="todolist-head">
        <h1>"Stay Organized, Every Day"</h1>
        <h2>Welcome to Your Smart Todo List</h2>
        <br></br>
        <h3>
          Say goodbye to cluttered notes and scattered thoughts! Our Todo List
          web app helps you manage tasks effortlessly, keeping you organized and
          productive from dawn to dusk. Whether you’re planning your day,
          tracking a project, or setting personal goals, our app has everything
          you need to streamline your life—all in one place.
        </h3>
      </div>
      <div className="listapp">
        <div>
          <div id="heading">
            <h1>{data.listTitle}</h1>
          </div>
        </div>
        <div className="box">
          {data.listItems?.map((item) => {
            return (
              <div key={item.id}>
                <div className="item">
                  <form action="TodoList/delete" method="post">
                    <input
                      type="checkbox"
                      onChange={(event) => handleDeleteClick(event, item.id)}
                      value={item.id}
                    />
                  </form>

                  <form
                    key={item.id}
                    className="edit"
                    action="http://localhost:3000/Todolist/edit"
                    method="post"
                  >
                    {editingId === item.id ? (
                      <div className="editOn">
                        <input
                          type="hidden"
                          name="updatedItemId"
                          value={item.id}
                        />
                        <input
                          id={`input${item.id}`}
                          type="text"
                          name="text"
                          value={editText}
                          autoComplete="off"
                          autoFocus={true}
                          onChange={handleEditChange}
                        />
                        <button
                          id={`done${item.id}`}
                          className="edit"
                          type="submit"
                          onClick={(event) => handleButtonClick(event, item.id)}
                        >
                          <img
                            className="icon"
                            src="check-solid.svg"
                            alt="tick"
                          />
                        </button>
                      </div>
                    ) : (
                      <div className="editOff">
                        <p>{item.title}</p>
                        <button
                          id={`edit${item.id}`}
                          onClick={(event) =>
                            toggleButtonVisibility(item.id, item.title)
                          }
                          className="edit"
                        >
                          <img
                            className="icon"
                            src="pencil-solid.svg"
                            alt="pencil"
                          />
                        </button>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            );
          })}
          <form className="item" action="/Todolist/add" method="post">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="New Item"
              autoComplete="off"
              autoFocus={true}
            />
            <button
              className="add"
              type="submit"
              name="list"
              onClick={handleNewClick}
            >
              +
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
