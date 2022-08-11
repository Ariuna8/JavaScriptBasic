let tasks = [{
  "name" : "Task One",
  "project" : "Project One"
}, {
  "name" : "Task One",
  "project" : "Project Two"
}, {
  "name" : "Task Two",
  "project" : "Project One"
}, {
  "name" : "Task Three",
  "project" : "Project One"
}, {
  "name" : "Task Two",
  "project" : "Project Two"
}]

let projectNames = [];
let projects = [];
for (let i = 0; i < tasks.length; i++) {
  if (projectNames.indexOf(tasks[i].project) < 0) {
    // checks to see that it's not the projectNames list, and inserts the first entry
    projectNames.push(tasks[i].project);
    projects.push({
      project : tasks[i].project,
      tasks : {
        name : tasks[i].name
      }
    });
  } else {
    // if that project is already in the list, append the next entry
    let ind = projectNames.indexOf(tasks[i].project);
    projects[ind].tasks.push({
      name : tasks[i].name
    });
  }
}