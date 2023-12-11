# MockAPI-powered_Task_Manager
This is a simple task management website that allows users to log in, and manage their tasks. The application uses MockAPI.io to store and retrieve task data.

## Getting Started

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/task-manager.git
    ```

2. **Navigate to the Project Directory:**

    ```bash
    cd task-manager
    ```

3. **Install Dependencies:**

    If you're using npm:

    ```bash
    npm install
    ```

    If you're using yarn:

    ```bash
    yarn install
    ```

4. **Configure API Base URL:**

    Update the `API_BASE_URL` variable in the `app.js` file with your MockAPI.io endpoint:

    ```javascript
    const API_BASE_URL = 'https://6566cae364fcff8d730f1083.mockapi.io/task';
    ```

## Running the Project

1. **Start the Development Server:**

    If you're using npm:

    ```bash
    npm start
    ```

    If you're using yarn:

    ```bash
    yarn start
    ```

2. **Open the Website:**

    Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## User Authentication

- **Log In:**
    - Enter your username and password and click "Login."

- **Log Out:**
    - Click on the "Logout" button in the task manager interface.

## Task Management

- **View Tasks:**
    - Once logged in, you will see a list of tasks.
    - Tasks are displayed with their title, description, and deadline.

- **Create a New Task:**
    - In the task manager interface, under "Create a new task," fill in the task title, description, and deadline.
    - Click "Add Task" to create a new task.
      
- **Mark Task as Complete/Incomplete:**
    - Click on the "Mark as Complete" or "Mark as Incomplete" button next to a task.

- **Delete a Task:**
    - Click on the "Delete" button next to a task.

## Additional Information

- **Responsive Design:**
    - The task manager is designed to work well on various devices.

- **Error Handling:**
    - If an error occurs during API requests or incorrect user input, an error message will be displayed.

Feel free to explore and manage your tasks efficiently using this task management website! If you encounter any issues, refer to the error messages or the "An error occurred. Please try again later."

Happy task managing!
