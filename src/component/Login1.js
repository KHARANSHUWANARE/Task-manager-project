// Import React and other dependencies
import React, { useState } from "react";
import axios from "axios";

// Define the Login component
function Login1() {
  // Use state hooks to store the username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Define the handleSubmit function that will send the login request
  const handleSubmit = (e) => {
    // Prevent the default browser behavior of form submission
    e.preventDefault();

    // Define the base URL of the Spring Boot API
    const baseUrl = "https://example.com/api/login";

    // Use axios to send a POST request with the username and password
    axios
      .post(baseUrl, {
        username: username,
        password: password,
      })
      .then((response) => {
        // Handle the response from the API
        console.log(response.data);
        // You can also store the token or redirect the user here
      })
      .catch((error) => {
        // Handle the error from the API
        console.log(error);
        // You can also show an error message or retry the request here
      });
  };

  // Return the JSX code for the login form
  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

// Export the Login component
export default Login1;
