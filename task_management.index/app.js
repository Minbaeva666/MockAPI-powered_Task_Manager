const API_BASE_URL = 'https://6566cae364fcff8d730f1083.mockapi.io/task';

function handleApiError(error) {
  console.error(error);
  alert('An error occurred. Please try again later.');
}

async function fetchTasks() {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch tasks. Status: ${response.status}, Message: ${response.statusText}`);
    }

    const tasks = await response.json();
    renderTaskList(tasks);
  } catch (error) {
    handleApiError(error);
  }
}

function updateTaskStatus(taskId, completed) {
  fetch(`${API_BASE_URL}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      completed: completed,
    }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to update task status. Status: ${response.status}, Message: ${response.statusText}`);
      }
      return response.json();
    })
    .then(fetchTasks)
    .catch(handleApiError);
}

function deleteTask(taskId) {
  fetch(`${API_BASE_URL}/${taskId}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to delete task. Status: ${response.status}, Message: ${response.statusText}`);
      }
      return response.json();
    })
    .then(fetchTasks)
    .catch(handleApiError);
}


function createTask(taskData) {
  fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to create task. Status: ${response.status}, Message: ${response.statusText}`);
      }
      return response.json();
    })
    .then(fetchTasks)
    .catch(handleApiError);
}


function renderTaskList(tasks) {
  const taskListContainer = document.getElementById('taskListContainer');
  taskListContainer.innerHTML = `
    <ul>
      ${tasks.map(task => `
        <li>
          <strong>Title:</strong> ${task.titel}<br>
          <strong>Description:</strong> ${task.description}<br>
          <strong>Deadline:</strong> ${task.deadline}<br>
          <button onclick="updateTaskStatus('${task.id}', ${!task.completed})">
            ${task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
          </button>
          <button onclick="deleteTask('${task.id}')">Delete</button>
        </li>
      `).join('')}
    </ul>
  `;
}


function renderAuthForm() {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `
    <div class="container">
      <h2>Login</h2>
      <form id="loginForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  `;


  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    authenticateUser(username, password);
  });
}

function renderTaskManager(user) {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `
    <div class="container" id="taskManagerContainer">
      <h2>Welcome, ${user.username}!</h2>
      <div id="taskListContainer">
        <!-- Task list will be rendered here -->
      </div>
      <h3>Create a new task:</h3>
      <form id="taskForm">
        <label for="taskTitle">Task Title:</label>
        <input type="text" id="taskTitle" name="taskTitle" required>
        <label for="taskDescription">Task Description:</label>
        <textarea id="taskDescription" name="taskDescription" required></textarea>
        <label for="taskDeadline">Task Deadline:</label>
        <input type="text" id="taskDeadline" name="taskDeadline" required>
        <button type="submit">Add Task</button>
      </form>
      <button id="logoutBtn">Logout</button>
    </div>
  `;

 
  fetchTasks();

  
  const taskForm = document.getElementById('taskForm');
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskData = {
      createAt: new Date().toISOString(),
      titel: document.getElementById('taskTitle').value,
      description: document.getElementById('taskDescription').value,
      deadline: document.getElementById('taskDeadline').value,
      id: Math.random().toString(), 
    };

   
    createTask(taskData);
  });

  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn.addEventListener('click', () => {
   
    localStorage.removeItem('user');
    renderAuthForm();
  });
}


function authenticateUser(username, password) {
 
  const userData = {
    id: 1,
    username: username,
  };

  
  localStorage.setItem('user', JSON.stringify(userData));

  renderTaskManager(userData);
}


renderAuthForm();
