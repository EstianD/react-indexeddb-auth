import Localbase from "localbase";
import { v4 as uuidv4 } from "uuid";

let db = new Localbase("todo-db");

export async function getUsers() {
  console.log("GET USERS");

  const users = await db.collection("users").get();

  return users;
}

export async function addUser(username) {
  console.log("ADD USER");

  const user = {
    id: uuidv4(),
    username: username,
    todos: [],
    loggedIn: 1,
  };

  const inputRes = await db.collection("users").add(user);

  console.log("INPUT RES: ", inputRes);
}
