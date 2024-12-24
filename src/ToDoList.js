import React, { useEffect, useRef, useState, useCallback } from "react";

function TodoList() {
  const [data, setData] = useState([
    {
      id: 4355133,
      listname: "Completed",
      listItems: [],
    },
    {
      id: 5534233,
      listname: "Personal",
      listItems: [
        { source: 5534233, id: 12353, content: "Read a chapter of a book" },
        { source: 5534233, id: 14353, content: "Read adjd" },
        { source: 5534233, id: 16357, content: "Read a fdadfsd of a book" },
        {
          source: 5534233,
          id: 18261,
          content: "Read asfyajdk chapter of a book",
        },
        {
          source: 5534233,
          id: 13124,
          content: "Read a chapter of a csfasfadfs",
        },
      ],
    },
  ]);

  const [selectedID, setSelectedId] = useState(null);
  const list = data.find((l) => l.id === selectedID);
  const [inputText, setInputText] = useState("");
  const [editText, setEditText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [isStart, setIsStart] = useState(false);
  const [viewComplete, setViewComplete] = useState(false);
  const [userName, setUserName] = useState("");
  const [newList, setNewList] = useState(false);
  const [newListName, setNewListName] = useState("");

  const inputNewEl = useRef(null);
  const inputnewUser = useRef(null);
  const inputnewList = useRef(null);
  const editInput = useRef(null);

  const handleEditChange = (event) => setEditText(event.target.value);
  const handleNewChange = (event) => setInputText(event.target.value);
  const handleUser = useCallback(
    (event) => {
      setUserName(event.target.value);
    },
    [setUserName]
  );
  const handleNewList = useCallback(
    (event) => {
      setNewListName(event.target.value);
    },
    [setNewListName]
  );

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputnewList.current) {
          if (e.code === "Enter") {
            const id = crypto.randomUUID();

            if (e) e.preventDefault();
            if (newListName.trim() === "") return;

            setData((prevData) => [
              ...prevData,
              {
                id: id,
                listname: newListName,
                listItems: [],
              },
            ]);
            setNewListName("");
            setNewList(false);
            setSelectedId(id);
          }
        }
      }

      document.addEventListener("keydown", callback);

      return () => document.removeEventListener("keydown", callback);
    },
    [newListName, newList]
  );

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputnewUser.current) {
          if (e.code === "Enter") {
            setIsHome(false);
            setSelectedId(5534233);
          }
        }
      }

      document.addEventListener("keydown", callback);

      return () => document.removeEventListener("keydown", callback);
    },
    [handleUser]
  );

  function handleDeleteItem(itemId) {
    setData((prevData) =>
      prevData.map((list) => ({
        ...list,
        listItems: list.listItems.filter((item) => item.id !== itemId),
      }))
    );
  }

  const handleButtonClick = useCallback(
    (e, id) => {
      e.preventDefault();
      if (editText.trim() === "") return;

      setData((prevData) =>
        prevData.map((list) =>
          list.id === id
            ? {
                ...list,
                listItems: list.listItems.map((item) =>
                  item.id === editingId ? { ...item, content: editText } : item
                ),
              }
            : list
        )
      );
      setEditingId(null);
      setEditText(""); // Clear the input after updating
    },
    [editText, editingId]
  );

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === editInput.current) {
          if (e.code === "Enter") {
            handleButtonClick(e, list.id);
          }
        }
      }

      document.addEventListener("keydown", callback);

      return () => document.removeEventListener("keydown", callback);
    },
    [handleButtonClick, list?.id]
  );

  const handleNewClick = useCallback(
    (e) => {
      if (e) e.preventDefault();
      if (inputText.trim() === "") return;
      const id = crypto.randomUUID();

      setData((prevData) =>
        prevData.map((list) =>
          list.id === selectedID
            ? {
                ...list,
                listItems: [
                  ...list.listItems,
                  { source: list.id, id: id, content: inputText },
                ],
              }
            : list
        )
      );
      setInputText(""); // Clear the input after updating
    },
    [inputText, selectedID] // Dependencies
  );

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputNewEl.current) {
          if (e.code === "Enter") {
            handleNewClick();
          }
        }
      }

      document.addEventListener("keydown", callback);

      return () => document.removeEventListener("keydown", callback);
    },
    [handleNewClick]
  );

  function toggleButtonVisibility(id, currentTitle) {
    setEditingId(id);
    setEditText(currentTitle);
  }

  function moveItemBetweenLists(
    data,
    itemId,
    sourceId,
    targetId,
    completedStatus
  ) {
    const sourceList = data.find((list) => list.id === sourceId);
    const targetList = data.find((list) => list.id === targetId);
    const itemToMove = sourceList.listItems.find((item) => item.id === itemId);

    return data.map((list) => {
      if (list.id === sourceId) {
        // Remove the item from the source list
        return {
          ...list,
          listItems: list.listItems.filter((item) => item.id !== itemId),
        };
      }
      if (list.id === targetId) {
        // Add the item to the target list with updated completion status
        return {
          ...list,
          listItems: [
            ...list.listItems,
            { ...itemToMove, completed: completedStatus },
          ],
        };
      }
      return list;
    });
  }

  function handleCheckboxChange(itemId, sourceId, isChecked) {
    if (isChecked) {
      // Move to the "Completed" list
      setData((prevData) =>
        moveItemBetweenLists(prevData, itemId, sourceId, 4355133, true)
      );
    } else {
      // Move back to the source list
      setData((prevData) => {
        const completedList = prevData.find((list) => list.id === 4355133);
        const itemIndex = prevData.map((list) =>
          list.listItems.findIndex((item) => item.id === itemId)
        )[0];
        console.log(itemIndex);
        console.log(completedList);

        const sourceId = completedList.listItems[itemIndex].source;

        console.log(sourceId);

        return moveItemBetweenLists(prevData, itemId, 4355133, sourceId, false);
      });
    }
  }

  function SelectList(id) {
    console.log(id);
    if (id === 4355133) {
      setViewComplete(true);
    } else {
      setViewComplete(false);
    }
    setSelectedId(id);
    setIsHome(false);
  }

  function setHome() {
    setIsHome(true);
    setSelectedId(null);
  }

  return (
    <div className="Todolist">
      <div className="todolist-head">
        <div id="tdl-head">
          <h1>QuickTick</h1>
        </div>
        <div id="tdl">
          <div
            onClick={() => setHome()}
            className={isHome ? "tdl-selected tdl-list" : "tdl-list"}
          >
            <h3>Home</h3>
          </div>
          {userName &&
            data.map((list) => {
              return (
                <div
                  onClick={() => SelectList(list.id)}
                  className={
                    list.id === selectedID
                      ? "tdl-selected tdl-list"
                      : "tdl-list"
                  }
                  key={list.id}
                >
                  <h3>{list.listname}</h3>
                </div>
              );
            })}
          {isHome ? (
            <div></div>
          ) : newList ? (
            <div
              className="tdl-start-btn"
              style={{ backgroundColor: "pink", width: "350px" }}
            >
              <input
                style={{ textAlign: "center" }}
                id="edit-input"
                type="text"
                name="text"
                autoComplete="off"
                autoFocus={true}
                placeholder="Enter List name"
                onChange={handleNewList}
                ref={inputnewList}
              />
            </div>
          ) : (
            <div className="tdl-new-list-create">
              <button
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "50%",
                  fontSize: "30px",
                  border: "0",
                }}
                onClick={() => setNewList(true)}
              >
                +
              </button>
              <h2>Create new list</h2>
            </div>
          )}
        </div>
      </div>
      <div className="listapp">
        <div className="box">
          <div className="todo-heading">
            <h1>{!isHome ? `Hello, ${userName}` : ""}</h1>
          </div>
          {isHome ? (
            !isStart ? (
              <div className="tdl-home">
                <h1 style={{ fontSize: "55px", fontFamily: "nunito" }}>
                  "Your Ultimate Task Manager"
                </h1>
                <h3
                  style={{
                    fontSize: "20px",
                    fontFamily: "noto sans",
                    fontWeight: "400",
                  }}
                >
                  Simplify your tasks and focus on what matters most
                </h3>
                <button
                  onClick={() => setIsStart(true)}
                  className="tdl-start-btn"
                >
                  <h3>Get Started</h3>
                  <img
                    style={{
                      height: "35px",
                      width: "35px",
                      marginLeft: "10px",
                    }}
                    src="arrow-right-circle.png"
                    alt=""
                  ></img>
                </button>
              </div>
            ) : (
              <div className="tdl-home">
                <div className="tdl-enter-name">
                  <h2 style={{ fontSize: "20px", color: "black" }}>
                    Enter User Name
                  </h2>
                  <input
                    style={{ textAlign: "center" }}
                    id="edit-input"
                    type="text"
                    name="text"
                    autoComplete="off"
                    autoFocus={true}
                    onChange={handleUser}
                    ref={inputnewUser}
                  />
                </div>
              </div>
            )
          ) : (
            list?.listItems.map((item) => (
              <div key={item.id} className="item">
                {editingId === item.id ? (
                  <>
                    <div id="check-btn">
                      <input
                        id="edit-input"
                        type="text"
                        name="text"
                        value={editText}
                        autoComplete="off"
                        autoFocus={true}
                        onChange={handleEditChange}
                      />
                    </div>
                    <div id="check-btn">
                      <button
                        style={{ backgroundColor: "transparent", border: "0" }}
                        id={`done${item.id}`}
                        className="edit"
                        type="submit"
                        onClick={(event) => handleButtonClick(event, list.id)}
                        ref={editInput}
                      >
                        <img
                          style={{
                            height: "25px",
                            width: "25px",
                          }}
                          className="icon"
                          src="check-icon.png"
                          alt="tick"
                        />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div id="check-btn">
                      <input
                        id="tdl-checkbox"
                        type="checkbox"
                        value={item.id}
                        checked={item.completed || false}
                        onChange={(e) =>
                          handleCheckboxChange(
                            item.id,
                            list.id,
                            e.target.checked
                          )
                        }
                      />
                      <h3
                        style={{
                          textDecoration: item.completed
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {item.content}
                      </h3>
                    </div>
                    <div id="check-btn">
                      <button
                        style={{ backgroundColor: "transparent", border: "0" }}
                        className="edit"
                        onClick={() =>
                          toggleButtonVisibility(item.id, item.content)
                        }
                      >
                        <img
                          style={{
                            height: "25px",
                            width: "25px",
                          }}
                          src="edit-icon.png"
                          alt="Edit"
                        />
                      </button>
                      <button
                        style={{ backgroundColor: "transparent", border: "0" }}
                        className="delete"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        <img
                          style={{
                            height: "25px",
                            width: "25px",
                          }}
                          src="close-icon.png"
                          alt="Delete"
                        />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
          <div>
            {isHome ? (
              <div></div>
            ) : viewComplete ? (
              <div></div>
            ) : isAdding ? (
              <div className="item">
                <div id="check-btn">
                  <input
                    id="edit-input"
                    type="text"
                    name="text"
                    placeholder="Enter Note"
                    autoComplete="off"
                    autoFocus={true}
                    value={inputText}
                    ref={inputNewEl}
                    onChange={handleNewChange}
                  />
                </div>
                <div id="check-btn">
                  <button
                    style={{ backgroundColor: "transparent", border: "0" }}
                    className="edit"
                    type="submit"
                    onClick={(e) => handleNewClick(e)}
                  >
                    <img
                      style={{
                        height: "25px",
                        width: "25px",
                      }}
                      className="icon"
                      src="check-icon.png"
                      alt="tick"
                    />
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <button>
                  <img
                    onClick={() => setIsAdding(true)} // Toggle adding state
                    id="add-new-img"
                    src="/plus-square-icon.png" // Correct path for public folder
                    alt="Add"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
