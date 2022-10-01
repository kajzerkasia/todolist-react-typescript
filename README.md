###  TODO list (React + TypeScript)

A simple to-do list with an animation of crossing out completed tasks.

- Data is downloaded and saved at JSON server

For more info about using JSON Server, visit website:
https://www.npmjs.com/package/json-server

###  Available functionalities:
- adding new tasks
- marking tasks as completed (animation of crossing out)
- showing completed tasks by marking checkbox next to the "Show completed tasks" or hiding them by marking checkbox again
- possibility to change your mind - completed task may return to the to-do list by marking checkbox of completed task again
- You can also change your mind about marking a task as completed while the task's crossing out animation is running. If you click the checkbox next to the task during this time again, the animation will break and the task will not be marked as completed.

###  How to start a project?
- make a git clone
- run npm i

1. if you don't have installed JSON server, type in your IDE terminal (in main directory: project-manager) command: npm install -g json-server
2. go to the directory /mocks in your terminal and type there command: json-server --watch db.json --port 8000
3. open second terminal in your IDE and type there command: npm start
4. now you can use Project Manager, try the available functionalities.
