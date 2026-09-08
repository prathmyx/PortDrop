# PortDrop

**PortDrop** is a lightweight, zero-dependency text transfer tool that lets you instantly send and display messages between devices connected to the same Wi-Fi network.

Built as a learning project, PortDrop uses **only native Node.js modules** to explore how core Node.js features can be used to build a real-time web application without third-party frameworks.

## ✨ Features

* 📡 Transfer text between devices on the same Wi-Fi network
* ⚡ Real-time message delivery using **Server-Sent Events (SSE)**
* 🪶 Zero third-party dependencies
* 📱 Supports laptops, phones, tablets, and other devices
* 🧩 Built entirely with native Node.js modules

## 🧠 Key Learning Concepts

This project was created to understand and practice fundamental Node.js concepts:

* **HTTP (`http`)** — Handling requests, routing, parsing request bodies, serving static files, and managing HTTP headers manually.
* **Event Emitter (`events`)** — Implementing a simple publish/subscribe pattern to broadcast incoming messages.
* **Server-Sent Events (SSE)** — Maintaining real-time streaming connections with multiple connected devices over standard HTTP.
* **File System (`fs`)** — Reading and serving HTML/CSS files directly from the filesystem.

## 📋 Prerequisites

Before running PortDrop, make sure you have:

* [Node.js](https://nodejs.org/) **v14 or higher** installed on your primary machine.
* Two or more devices connected to the **same Wi-Fi network**.

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/prathmyx/PortDrop.git
cd PortDrop
```

### 2. Start the Server

```bash
npm start
```

The server will start on the configured port.

### 3. Open PortDrop

On the machine running the server, open the application in your browser using:

```text
http://localhost:<5000>
```

To access PortDrop from another device on the same Wi-Fi network, use the server machine's local IP address:

```text
http://<YOUR_LOCAL_IP>:<5000>
```


Now you can send messages between connected devices in real time.

## 🔧 How It Works

PortDrop follows a simple architecture:

1. A device sends a message to the Node.js server using HTTP.
2. The server receives and processes the message.
3. An `EventEmitter` broadcasts the message to connected clients.
4. Connected devices receive the message instantly through an **SSE connection**.
5. Static frontend files are served directly using Node.js's native `fs` module.

## 📁 Project Structure

```text
PortDrop/
├── src/
|   ├──server.js
|   ├── routes/
|       ├── apiHandler.js
|       └── ...
├── public/
│   ├── index.html
│   └── ...
└── README.md
```

> The exact structure may vary depending on the current version of the project.

## 📦 Dependencies

PortDrop has **no external npm dependencies**.

It relies entirely on Node.js built-in modules such as:

```text
http
events
fs
```

## 🎯 Purpose

PortDrop is primarily a **learning project** focused on understanding how much can be built using Node.js without relying on frameworks or external packages.

The project is especially useful for learning:

* How HTTP servers work under the hood
* Request and response handling
* Event-driven programming
* Real-time communication with SSE
* Serving static files
* Basic networking between devices on a local network

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.
