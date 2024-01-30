## Slack API Lesson
```js
// You probably want to use a database to store any user information ;)
let usersStore = {};

try {
  // Call the users.list method using the WebClient
  const result = await client.users.list();

  saveUsers(result.members);
}
catch (error) {
  console.error(error);
}

// Put users into the JavaScript object
function saveUsers(usersArray) {
  let userId = '';
  usersArray.forEach(function(user){
    // Key user info on their unique user ID
    userId = user["id"];

    // Store the entire user object (you may not need all of the info)
    usersStore[userId] = user;
  });
}
```
