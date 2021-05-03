import React from "react";

function Dashboard({ handleLogout, loggedUser }) {
  return (
    <div>
      Dashboard
      <button onClick={() => handleLogout(loggedUser.id)}>Logout</button>
      <p>{loggedUser.id}</p>
      <p>{loggedUser.username}</p>
    </div>
  );
}

export default Dashboard;
