# HylandHelpersServer

Steps to run the server:
1. clone this repo
2. run 'npm install'
3. run 'npm start'
4. profit

Server Endpoints:
- GET '/api/users': returns a list of users
- GET '/api/users/:id': returns the uer with the matching id
- POST '/api/users': Adds the user in the body of the request to the list of users
- PUT '/api/users/:id': Replaces the current user with matching id with the user in the body of the request
- DELETE '/api/users/:id': Deletes the user with the specified id
