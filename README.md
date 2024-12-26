# 📝 My TO-DO App

My 📝 TO-DO App is a simple and interactive 🛠️ task management application built with ⚛️ React and 🌈 Tailwind CSS. It allows users to ➕ add, 🕵️ track, and 🛠️ manage tasks efficiently with features like ✅ task completion, ❌ deletion, and a 👁️‍💨 visual indicator for task statuses.

## ✨ Features

- **➕ Add Tasks**: Add a new task with a 💢 title and 🖼️ description.
- **🔍 Track Tasks**:
  - Separate counters for ✅ completed and ⏳ pending tasks.
  - 👁️‍💨 Visual indicator (color-coded) for task statuses.
- **✅ Mark Task as Completed**: Mark tasks as completed to update the counters and visual indicators.
- **❌ Delete Tasks**: Remove tasks permanently from the list.
- **✏️ Edit Tasks**: Modify the 💢 title and 🖼️ description of existing tasks.

## 🛠️ Tech Stack

- **Frontend**: ⚛️ React, 🌈 Tailwind CSS
- **State Management**: ⚛️ React useState Hook

## ⚙️ Installation and Setup

1. 📂 Clone the repository:
   ```bash
   git clone https://github.com/prakash-ydv/to-do
   ```

2. 📁 Navigate to the project directory:
   ```bash
   cd to-do
   ```

3. 📦 Install dependencies:
   ```bash
   npm install
   ```

4. ▶️ Start the development server:
   ```bash
   npm start
   ```

5. 🌐 Open the application in your browser at:
   ```
   http://localhost:3000
   ```

## 🧩 Components

### 🛠️ App Component
- **📜 Description**: The main component that manages the overall state of the application and renders the 📂 task list and form.
- **🛠️ State Variables**:
  - `Title`: Holds the 💢 title of the task being added.
  - `Desc`: Holds the 🖼️ description of the task being added.
  - `Tasks`: 📋 Array containing all tasks.
  - `pendingTasks`: ⏳ Counter for pending tasks.
  - `completedTasks`: ✅ Counter for completed tasks.

### 🧩 Task Component
- **📜 Description**: A reusable component for displaying individual tasks.
- **📡 Props**:
  - `Title`: 💢 Task title.
  - `Desc`: 🖼️ Task description.
  - `completed`: Function to mark the task as ✅ completed.
  - `delete`: Function to ❌ delete the task.
  - `edit`: Function to ✏️ edit the task.

## 🛠️ How It Works

1. **➕ Adding Tasks**:
   - Users can input a 💢 task title and 🖼️ description in the form.
   - Click the "➕ Add Task" button to add the task to the 📋 list.

2. **🛠️ Managing Tasks**:
   - ✅ Mark tasks as done using the "✅ Done" button. This updates the ✅ completed and ⏳ pending counters.
   - ✏️ Edit tasks by clicking the "✏️ Edit" button and entering new details.
   - ❌ Delete tasks using the "❌ Delete" button, which also updates the counters.

## 🔮 Future Enhancements

- Persistent storage using 💾 localStorage or a 🗂️ backend database.
- 📦 Drag-and-drop reordering of tasks.
- 🕒 Add due dates and reminders for tasks.
- 🌇 Dark mode for better accessibility.


Feel free to 🤝 contribute to this project or 🐛 report issues!
