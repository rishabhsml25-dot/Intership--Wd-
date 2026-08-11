// =========================================
// CampusHub - Week 2 Assignment
// JavaScript: variables, conditions, loops,
// functions, DOM manipulation and events.
// =========================================

// ---------- DOM element selection ----------
const themeBtn = document.getElementById("themeBtn");
const themeStatus = document.getElementById("themeStatus");
const clock = document.getElementById("clock");
const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// ---------- Task 5: Digital Clock ----------
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);

// ---------- Task 5: Theme Toggle ----------
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Light";
        themeStatus.textContent = "Dark mode active";
    } else {
        themeBtn.textContent = "🌙 Dark";
        themeStatus.textContent = "Light mode active";
    }
});

// ---------- Basic event + DOM text change ----------
welcomeBtn.addEventListener("click", function () {
    welcomeMessage.textContent = "Hello! Welcome to CampusHub 👋";
});

// ---------- Mobile navigation ----------
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

// ---------- Task 3: Variables, data types and operators ----------
const variableBtn = document.getElementById("variableBtn");
const variableOutput = document.getElementById("variableOutput");

variableBtn.addEventListener("click", function () {
    let studentName = "Rishabh"; // String
    const marks = 85;             // Number
    let passed = marks >= 40;     // Boolean
    let extraMarks = 5;

    const total = marks + extraMarks; // Arithmetic operator
    const status = passed ? "Passed" : "Needs improvement"; // Conditional operator

    variableOutput.textContent =
        `${studentName} scored ${marks}. With ${extraMarks} bonus marks, total = ${total}. Status: ${status}.`;
});

// ---------- Task 3: User input + conditional statement ----------
const ageInput = document.getElementById("ageInput");
const ageBtn = document.getElementById("ageBtn");
const ageOutput = document.getElementById("ageOutput");

ageBtn.addEventListener("click", function () {
    const age = Number(ageInput.value);

    if (age === 0 || age < 0 || Number.isNaN(age)) {
        ageOutput.textContent = "Please enter a valid age.";
    } else if (age < 18) {
        ageOutput.textContent = "You are a minor.";
    } else {
        ageOutput.textContent = "You are an adult.";
    }
});

// ---------- Task 3: Loop + function ----------
const loopBtn = document.getElementById("loopBtn");
const loopOutput = document.getElementById("loopOutput");

function createNumberList(limit) {
    let numbers = "";

    for (let i = 1; i <= limit; i++) {
        numbers += i;
        if (i < limit) {
            numbers += ", ";
        }
    }

    return numbers;
}

loopBtn.addEventListener("click", function () {
    loopOutput.textContent = `For loop result: ${createNumberList(5)}`;
});

// ---------- Task 5: Live Character Counter ----------
const messageInput = document.getElementById("messageInput");
const charCount = document.getElementById("charCount");

messageInput.addEventListener("input", function () {
    charCount.textContent = messageInput.value.length;
});

// ---------- Task 5: Simple Calculator ----------
const calculateBtn = document.getElementById("calculateBtn");
const calcResult = document.getElementById("calcResult");

calculateBtn.addEventListener("click", function () {
    const first = Number(document.getElementById("num1").value);
    const second = Number(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    if (
        document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === ""
    ) {
        calcResult.textContent = "Result: Please enter both numbers.";
        return;
    }

    let result;

    switch (operator) {
        case "+":
            result = first + second;
            break;
        case "-":
            result = first - second;
            break;
        case "*":
            result = first * second;
            break;
        case "/":
            if (second === 0) {
                calcResult.textContent = "Result: Cannot divide by zero.";
                return;
            }
            result = first / second;
            break;
        default:
            result = 0;
    }

    calcResult.textContent = `Result: ${result}`;
});

// ---------- Task 5: To-Do List ----------
const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

function addTodo() {
    const task = todoInput.value.trim();

    if (task === "") {
        return;
    }

    const li = document.createElement("li");
    const text = document.createElement("span");
    const deleteBtn = document.createElement("button");

    text.textContent = task;
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.type = "button";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(text);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = "";
    todoInput.focus();
}

addTodoBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

// ---------- Task 4: Show / Hide Content ----------
const toggleBtn = document.getElementById("toggleBtn");
const hiddenTip = document.getElementById("hiddenTip");

toggleBtn.addEventListener("click", function () {
    if (hiddenTip.style.display === "block") {
        hiddenTip.style.display = "none";
        toggleBtn.textContent = "Show Tip";
    } else {
        hiddenTip.style.display = "block";
        toggleBtn.textContent = "Hide Tip";
    }
});

// ---------- Task 4: Form validation ----------
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name.length < 2) {
        formMessage.textContent = "Please enter your name.";
        formMessage.style.color = "#dc2626";
        nameInput.focus();
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        formMessage.textContent = "Please enter a valid email.";
        formMessage.style.color = "#dc2626";
        emailInput.focus();
        return;
    }

    formMessage.textContent = `Thanks ${name}! Form submitted successfully.`;
    formMessage.style.color = "#15803d";
    contactForm.reset();
});
