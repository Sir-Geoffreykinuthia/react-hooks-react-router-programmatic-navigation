import React from "react";
import { Redirect } from "react-router-dom";
// the user is redirected to the login page if a user is not logged in 
function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Redirect to="/login" />;
// if not it its default to home page 
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

export default Home;
