import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./feature/Users";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewusername] = useState("");

  return (
    <div className="App">
      {""}
      <div className="container">

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(
                addUser({
                  id: userList[userList.lenght - 1].id + 1,
                  name,
                  username,
                })
              );
            }}
          >
            {" "}
            Add User
          </button>
        </div>

        <div className="list">
          {userList.map((user) => {
            return (
              <div key={user.id} className="card bg-transparent mb-3">
                <div className="mb-1">
                  <strong>{user.name}</strong>
                </div>
                <div className="mb-2">@{user.username}</div>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="New username"
                    onChange={(event) => {
                      setNewusername(event.target.value);
                    }}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      dispatch(
                        updateUsername({
                          id: user.id,
                          username: newUsername,
                        })
                      );
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      dispatch(
                        deleteUser({
                          id: user.id,
                        })
                      );
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
