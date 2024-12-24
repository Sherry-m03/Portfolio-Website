import { useEffect, useState } from "react";

function PlanPack() {
  const [items, setItems] = useState([]);
  const [lists, setLists] = useState([
    {
      id: 5466478,
      listname: "Personal",
      image: "https://picsum.photos/id/56/2880/1920",
      listitems: [],
    },
  ]);
  const [selectedlist, setSelectedList] = useState(null);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [sortBy, setSortBy] = useState("input");
  const [sortedItems, setSortedItems] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [imageurl, setImageUrl] = useState("");
  const [newlistname, setNewListName] = useState("");
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const list = lists.find((l) => l.id === selectedlist);

    if (list) {
      if (sortBy === "input") {
        setSortedItems(list.listitems);
      }
      if (sortBy === "description") {
        setSortedItems(
          list.listitems
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description))
        );
      }

      if (sortBy === "packed") {
        setSortedItems(
          list.listitems
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed))
        );
      }
    } else {
      console.log("List not found!"); // Log if the list is not found
    }
  }, [sortBy, selectedlist, lists]);

  useEffect(() => {
    if (selectedlist) {
      const list = lists.find((l) => l.id === selectedlist);
      const items = list ? list.listitems : [];
      const numItems = items.length;
      const numPacked = items.filter((item) => item.packed).length;
      const percentage =
        numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;

      setDisplayText(
        numItems === 0
          ? "Start adding some items to your packing list."
          : percentage === 100
          ? "You got everything! Ready to go."
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%).`
      );
    } else {
      setDisplayText("Start adding some items to your packing list.");
    }
  }, [lists, selectedlist]);

  const addItemToList = (listId, newItem) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? { ...list, listitems: [...list.listitems, newItem] }
          : list
      )
    );
  };

  console.log(lists);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    addItemToList(selectedlist, newItem);

    setDescription("");
    setQuantity(1);
  }

  function onDeleteItem(id) {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === selectedlist
          ? {
              ...list,
              listitems: list.listitems.filter((item) => item.id !== id),
            }
          : list
      )
    );
  }

  function onToggleItem(id) {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === selectedlist
          ? {
              ...list,
              listitems: list.listitems.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
              ),
            }
          : list
      )
    );
  }
  function onClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) {
      setItems([]);
    }
  }

  function selectList(id) {
    setSelectedList(id);
    setIsAdding(false);
  }

  function AddNew() {
    setIsAdding(true);
    setSelectedList(null);
  }

  function handleNewList() {
    if (!newlistname) return;

    const defaultImage = "https://picsum.photos/id/48/5000/3333";

    const id = crypto.randomUUID();
    const newList = {
      id,
      listname: newlistname,
      image: imageurl || defaultImage,
      listitems: [],
    };
    setLists((prevLists) => [...prevLists, newList]);
    setNewListName("");
    selectList(id);
    setIsAdding(false);
  }

  return (
    <div className="plan-pack">
      <div className="pack-head">
        <h1 id="pack-head">Plan Pack</h1>
        <div className="pack-lists-display">
          {lists.map((item) => {
            return (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => selectList(item.id)}
                className={`${
                  selectedlist === item.id
                    ? "pck-list-block pck-selected"
                    : "pck-list-block"
                }`}
                key={item.id}
              >
                <img
                  style={{
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                    float: "left",
                    marginLeft: "5px",
                  }}
                  src={item.image}
                  alt=""
                ></img>
                <h3 style={{ flexGrow: "1" }}>{item.listname}</h3>
              </div>
            );
          })}
          <div
            style={{ cursor: "pointer" }}
            onClick={AddNew}
            className={
              isAdding ? "pck-selected pck-list-block" : "pck-list-block"
            }
          >
            <h3>Add New List</h3>
          </div>
        </div>
        <div className="pack-form-list">
          {selectedlist ? (
            isAdding ? (
              <div className="newlist-input">
                <div>
                  <input
                    style={{ height: "40px", fontSize: "12px" }}
                    className="pck-input"
                    type="text"
                    placeholder="New List..."
                    onChange={(e) => setNewListName(e.target.value)}
                  />
                  <input
                    style={{
                      width: "250px",
                      height: "40px",
                      fontSize: "12px",
                      marginLeft: "10px",
                    }}
                    className="pck-input"
                    type="text"
                    placeholder="Image URL..."
                    value="https://picsum.photos/id/48/5000/3333"
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
                <div>
                  <button
                    style={{
                      backgroundColor: "#4e8098",
                      color: "white",
                      height: "40px",
                      width: "200px",
                      fontSize: "18px",
                      marginTop: "20px",
                    }}
                    onClick={handleNewList}
                    className="pck-button"
                  >
                    Add
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <form className="pack-form" onSubmit={handleSubmit}>
                  <h3>What do you need for your trip?</h3>
                  <select
                    className="pck-select"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  >
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                      <option value={num} key={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <input
                    className="pck-input"
                    type="text"
                    placeholder="Item..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <button className="pck-button">Add</button>
                </form>
                <div className="pack-list">
                  <div className="pack-itemlist">
                    <ul>
                      {sortedItems.map((item) => (
                        <li key={item.id}>
                          <input
                            className="pack-checkbox pck-input"
                            type="checkbox"
                            checked={item.packed}
                            onChange={() => onToggleItem(item.id)}
                          />
                          <span
                            style={
                              item.packed
                                ? { textDecoration: "line-through" }
                                : {}
                            }
                          >
                            {item.quantity} {item.description}
                          </span>
                          <button
                            className="pack-cross pck-button"
                            onClick={() => onDeleteItem(item.id)}
                          >
                            &#9587;
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pack-actions">
                    <select
                      className="pcka-select"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="input">Sort by input order</option>
                      <option value="description">Sort by description</option>
                      <option value="packed">Sort by packed status</option>
                    </select>
                    <button
                      className="pck-button pcka-button"
                      onClick={onClearList}
                    >
                      Clear list
                    </button>
                  </div>
                </div>
              </div>
            )
          ) : (
            <div>
              <div className="pack-form"></div>
              <div className="pack-home-bg"></div>
            </div>
          )}
          <div className="pack-stats">
            <footer>
              <em>{displayText}</em>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanPack;
