import React, { useState, useEffect } from "react";

function EatnSplit() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [selectedFriendId, setSelectedFriendId] = useState(null);
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const [isAddingFriend, setIsAddingFriend] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [Friends, setFriends] = useState([
    {
      id: 118836,
      name: "Aditya",
      image: "https://i.pravatar.cc/400?img=59",
      balance: -7,
    },
    {
      id: 933372,
      name: "Meher",
      image: "https://i.pravatar.cc/400?img=42",
      balance: 20,
    },
    {
      id: 499476,
      name: "Nikhil",
      image: "https://i.pravatar.cc/400?img=68",
      balance: 0,
    },
  ]);

  function findFriend(id) {
    const selected = Friends.find((f) => f.id === id); // Find the selected friend
    return selected;
  }

  function selectFriend(id) {
    if (selectedFriend) {
      // Clear the selection if a friend is already selected
      setSelectedFriend("");
      setSelectedFriendId(null);
    } else {
      // Set the new selected friend
      setSelectedFriendId(id);
      setSelectedFriend((prevFriend) => {
        const selected = findFriend(id); // Find the selected friend
        return selected ? selected.name : ""; // Set the selected friend's name
      });
    }
  }

  function splitBill(e, id, whoIsPaying, paidByUser, paidByFriend) {
    e.preventDefault();
    setFriends((prevFriends) =>
      prevFriends.map((friend) => {
        if (friend.id === id) {
          // Create a new object with updated balance
          const updatedBalance =
            whoIsPaying === "user"
              ? friend.balance + paidByFriend
              : friend.balance - paidByUser;

          return { ...friend, balance: updatedBalance };
        } else return friend; // Return the friend unchanged if ID doesn't match
      })
    );
  }

  function handleAddFriend(e, name, image) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    setFriends((friend) => [...friend, newFriend]);
    setIsAddingFriend(false);
  }

  useEffect(() => {
    // Reset state when `selectedFriendId` changes
    setBill("");
    setPaidByUser("");
    setWhoIsPaying("user");
  }, [selectedFriendId]);

  return (
    <div className="ens-app">
      <h1 className="ens-title">Eat 'n' Split</h1>
      <div className="ens-sidebar">
        <div className="ens-display">
          <ul>
            {Friends.map((friend) => {
              return (
                <div className="ens-friend-info" key={friend.id}>
                  <li
                    className={`${
                      selectedFriendId === friend.id ? "ens-selected" : ""
                    }`}
                  >
                    <div className="ens-friend-img">
                      <img src={friend.image} alt=""></img>
                    </div>
                    <div>
                      <h3>{friend.name}</h3>
                      {friend.balance === 0 ? (
                        <p>You and {friend.name} are even</p>
                      ) : friend.balance < 0 ? (
                        <p className="ens-red">
                          You owe {friend.name} Rs. {0 - friend.balance}
                        </p>
                      ) : (
                        <p className="ens-green">
                          {friend.name} owes you Rs. {friend.balance}
                        </p>
                      )}{" "}
                    </div>
                    <div className="ens-c">
                      <button onClick={() => selectFriend(friend.id)}>
                        {selectedFriendId === friend.id ? "Close" : "Select"}
                      </button>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        {isAddingFriend ? (
          <div className="ens-add-friend">
            <form>
              <div>
                <label>Friend's name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label>Image URL</label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <button onClick={(e) => handleAddFriend(e, name, image)}>
                Add
              </button>
            </form>
            <button onClick={() => setIsAddingFriend(false)}>Close</button>
          </div>
        ) : (
          <div>
            <button
              className="ens-add-friend-btn"
              onClick={() => setIsAddingFriend(true)}
            >
              Add Friend
            </button>
          </div>
        )}
      </div>
      <div key={selectedFriendId}>
        <form className="ens-split-bill">
          <h2>
            {selectedFriend
              ? `Split a bill with ${selectedFriend}`
              : "No Math, Just Split!"}
          </h2>

          <div>
            <label>Bill value</label>
            <input
              type="text"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Your expense</label>
            <input
              type="text"
              value={paidByUser}
              onChange={(e) =>
                setPaidByUser(
                  Number(e.target.value) > bill
                    ? paidByUser
                    : Number(e.target.value)
                )
              }
            />
          </div>

          <div>
            <label>
              {selectedFriend
                ? `${selectedFriend}'s expense`
                : "Friend's expense"}
            </label>
            <input type="text" disabled value={paidByFriend} />
          </div>

          <div>
            <label>Who is paying the bill</label>
            <select
              value={whoIsPaying}
              onChange={(e) => setWhoIsPaying(e.target.value)}
            >
              <option value="user">You</option>
              <option value="friend">{selectedFriend}</option>
            </select>
          </div>

          <button
            onClick={(e) =>
              splitBill(
                e,
                selectedFriendId,
                whoIsPaying,
                paidByUser,
                paidByFriend
              )
            }
          >
            Split bill
          </button>
        </form>
      </div>
    </div>
  );
}

export default EatnSplit;
