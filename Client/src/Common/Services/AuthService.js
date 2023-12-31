import Parse from "parse";

// Authentication service used in AuthRegister component
export const createUser = (newUser) => {
  const user = new Parse.User();

  // Set all the necessary user information fields
  user.set("username", newUser.email);
  user.set("firstName", newUser.firstName);
  user.set("lastName", newUser.lastName);
  user.set("password", newUser.password);
  user.set("email", newUser.email);

  console.log("User: ", user);
  return user
    .signUp()
    .then((newUserSaved) => {
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// Function to log-in users, used in AuthLogin component
export const loginUser = (currUser) => {
  const user = new Parse.User();

  user.set("username", currUser.email);
  user.set("password", currUser.password);

  // Log in the user
  console.log("User: ", user);
  console.log();
  return user
    .logIn(user.email, user.password)
    .then((currUserSaved) => {

      // Extract the session token
      const sessionToken = currUserSaved.getSessionToken();

      // Returning both the user and the session token
      return {
        user: currUserSaved,
        sessionToken: sessionToken
      };
    })
    .catch((error) => {
      console.error(`Error: ${error.message}`);
      throw error;
    });
};

// Function to check if a user has been authenticated
export const checkUser = () => {
  return Parse.User.current()?.authenticated;
};

// Function to log users out
export const logoutUser = () => {
  return Parse.User.logOut()
    .then(() => {
      // Successfully logged out
    })
    .catch((error) => {
      // Show an error alert if something goes wrong during the logout process
      alert(`Error: ${error.message}`);
    });
};
