# State Machine Controller

## 📌 Overview

State Machine Controller is a Node.js application that demonstrates the implementation of a **Finite State Machine (FSM)** for managing conversation flow in an interview simulation system. The project processes user inputs, performs state transitions based on predefined rules, and provides responses according to the current state.

This project showcases the practical use of state machines in workflow automation, conversational systems, process control, and event-driven applications.

---

## 🎯 Objectives

- Understand the concept of Finite State Machines (FSM).
- Implement state-based workflow management.
- Handle dynamic state transitions based on user actions.
- Build a modular and scalable architecture.
- Demonstrate event-driven programming principles.

---

## 🏗️ Project Architecture

The application follows a state-driven architecture where each state represents a stage in the interview process.

### States

| State | Description |
|---------|-------------|
| START | Initial state of the application |
| TECHNICAL | Technical interview round |
| HR | Human Resources interview round |
| END | Final state indicating completion |

### State Transition Flow

```text
START
   │
   ▼
TECHNICAL
   │
   ▼
HR
   │
   ▼
END
```

---

## 🚀 Features

- Finite State Machine implementation
- State-based conversation management
- Dynamic state transitions
- Structured logging system
- Modular and reusable code
- Easy-to-extend architecture
- Console-based interaction
- Event-driven workflow handling

---

## 🛠️ Technologies Used

- Node.js
- JavaScript (ES6+)
- Finite State Machine Design Pattern

---

## 📂 Project Structure

```text
state-machine-controller/
│
├── src/
│   ├── demo.js
│   ├── StateMachine.js
│   ├── states/
│   │   ├── StartState.js
│   │   ├── TechnicalState.js
│   │   ├── HRState.js
│   │   └── EndState.js
│   │
│   └── controllers/
│
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/madhurpatil/state-machine-controller.git
```

### 2. Navigate to the Project Directory

```bash
cd state-machine-controller
```

### 3. Install Dependencies

```bash
npm install
```

---

## ▶️ Running the Application

Start the application using:

```bash
npm start
```

Alternatively:

```bash
node src/demo.js
```

---

## 💻 Sample Execution

```text
[INFO]: Initial State: START

[INFO]: Processing message in state: START
[INFO]: User: Hello interviewer

[SUCCESS]: Transition: START → TECHNICAL

Welcome to the technical interview round.

[INFO]: Processing message in state: TECHNICAL
[INFO]: Technical Input: JavaScript

[SUCCESS]: Transition: TECHNICAL → HR

Welcome to the HR interview round.

[INFO]: Processing message in state: HR
[INFO]: HR Input: Ready

[SUCCESS]: Transition: HR → END

Interview completed successfully.
```

---

## 🔍 How It Works

1. The application starts in the **START** state.
2. User input is processed by the current state handler.
3. Based on predefined transition rules, the state machine determines the next state.
4. The controller updates the current state.
5. The process continues until the **END** state is reached.

---

## 📖 Applications of State Machines

This implementation can be extended for:

- Chatbots
- Interview simulators
- Workflow automation systems
- Order processing systems
- Approval workflows
- Game state management
- Interactive applications
- Business process automation

---

## 🧪 Testing

To verify functionality:

1. Run the application.
2. Provide valid inputs for each interview stage.
3. Observe state transition logs.
4. Confirm that the application reaches the END state correctly.

---

## 🔮 Future Enhancements

- Web-based user interface
- REST API integration
- Database support
- User authentication
- Multiple interview workflows
- AI-assisted interview evaluation
- State persistence using MongoDB
- Graphical state visualization

---

## 🎓 Learning Outcomes

Through this project, the following concepts are demonstrated:

- Finite State Machines (FSM)
- Design Patterns
- Event-Driven Programming
- Modular Software Design
- Workflow Automation
- State Transition Management
- Backend Development with Node.js

---

## 👨‍💻 Author

**Madhur Patil**

Bachelor of Technology (B.Tech) – Information Technology  
Vidyalankar Institute of Technology, Mumbai

GitHub: https://github.com/madhurpatil

---

## ⭐ Support

If you found this project useful, consider giving it a star on GitHub to support the project and future improvements.

---

## 📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute this project for educational and learning purposes.