# log-mate  
**A flexible and powerful logging library for Node.js**  
log-mate makes logging effortless & powerful—log to console, files, databases, or cloud with structured logs, encryption, real-time streaming, and auto-rotation. It’s plug & play, supports multi-transport logging, and boosts performance with async, lazy logging, and batching. Plus, it keeps your data secure with masking & encryption—perfect for everything from debugging to production!

[![npm](https://img.shields.io/npm/v/log-mate.svg)](https://www.npmjs.com/package/log-mate)  [![License](https://img.shields.io/npm/l/log-mate.svg)](LICENSE)  

## **📖 Overview**  
**log-mate** is a lightweight yet feature-rich logging library for Node.js applications. It provides structured logging, multiple log levels, customizable transports (console, file, database, cloud), log rotation, contextual logging, encryption, and real-time log streaming.  

✅ **Highly configurable** – Customize output formats, storage, and integrations.  
✅ **Multi-transport support** – Log to console, files, databases, cloud, or webhooks.  
✅ **Structured logging** – Supports JSON and other formats.  
✅ **Contextual logging** – Add metadata, user IDs, and request contexts.  
✅ **Optimized for performance** – Lazy evaluation, batching, and async logging.  
✅ **Secure logging** – Mask sensitive data and encrypt logs.  

---

## **📦 Installation**  
Install **log-mate** via npm:  
```sh
npm install log-mate
```
or via yarn:  
```sh
yarn add log-mate
```

---

## **🚀 Usage**  
### **Basic Example**  
```javascript
const logme = require('log-mate');

logme.trace("This is a trace message");
logme.debug("Debugging details here");
logme.info("Informational message");
logme.warn("This is a warning!");
logme.error("Something went wrong!", { code: 500, details: "Internal Server Error" });
logme.fatal("Critical failure! Shutting down...");
logme.custom("info", "User logged in"); 
```

### **Logging to a File**  
```javascript
logme.toFile("logs/app.log", { rotation: true });
logme.info("This will be logged to a file.");
```

### **Logging to a Database**  
```javascript
logme.toDatabase({
    host: "localhost",
    user: "root",
    password: "password",
    database: "logs",
});
logme.info("This message will be stored in the database");
```

### **Logging to Cloud (AWS, GCP, Azure)**
```js
logme.toCloud("aws", { bucket: "my-log-bucket" });
logme.error("Logging error to the cloud");
```

### **Masking Sensitive Data**

```js
logme.maskSensitive(["password", "token"]);
logme.info("User logged in with password: 123456 and token: abcdefg");

// OUTPUT: [INFO] User logged in with password: ****** and token: ******
```

### **Streaming Logs in Real-Time**  
```javascript
logme.enableStreaming(3000); // Streams logs over WebSocket at port 3000
logme.info("Streaming logs in real-time...");
```

### **Encrypted Logging**

```js
logme.encrypt("my-secret-key");
logme.info("This log is now encrypted!");
```

### **Batch Logging**

```js
logme.setBatchSize(5);
logme.info("Log message 1");
logme.info("Log message 2");
logme.flush();  // Manually flush logs before batch size is reached
```
### **Log Rotation**

```js
logme.enableRotation({ maxSize: 1024 * 1024, maxFiles: 3 }); // Rotate at 1MB, keep 3 files
logme.info("This log will be rotated when it reaches max size");
```

### **Contextual Logging**

```js
logme.setContext({ userId: "1234", sessionId: "abcd" });
logme.info("User performed an action");

// OUTPUT: [INFO] [userId:1234] [sessionId:abcd] User performed an action
```

### **Namespace (Scoped) Logging**

```js
const authLogger = logme.get("auth");
authLogger("INFO", "User logged in");
// Output: [auth] [INFO] User logged in
```

### **Using Plugins**

```js
logme.use((message) => console.log(`[PLUGIN] ${message}`));
logme.info("This log passes through a plugin");
```

### **CLI Usage**

```sh
node index.js view logs.txt      # View log file
node index.js clear logs.txt     # Clear log file
```

---

## **📜 API Reference**  

### **1️⃣ Core Logging Functions**  
| **Function**                 | **Description** |
|------------------------------|----------------|
| `logme.trace(message, ...args)` | Logs a trace message (detailed debugging). |
| `logme.debug(message, ...args)` | Logs a debug message. |
| `logme.info(message, ...args)`  | Logs an informational message. |
| `logme.notice(message, ...args)` | Logs a notice message. |
| `logme.warn(message, ...args)`  | Logs a warning message. |
| `logme.error(message, ...args)` | Logs an error message. |
| `logme.fatal(message, ...args)` | Logs a fatal error message. |
| `logme.custom(level, message, ...args)` | Logs with a custom log level. |

---

### **2️⃣ Log Output & Transport**  
| **Function**                      | **Description** |
|------------------------------------|----------------|
| `logme.toConsole(enable = true)`     | Enables/disables console logging. |
| `logme.toFile(filepath, options)`    | Logs messages to a file. |
| `logme.toDatabase(dbConfig)`         | Logs messages to a database. |
| `logme.toCloud(service, options)`    | Sends logs to AWS, GCP, Azure, etc. |
| `logme.toWebhook(url, options)`      | Sends logs to a webhook URL. |

---

### **3️⃣ Formatting & Encryption**  
| **Function**                      | **Description** |
|------------------------------------|----------------|
| `logme.setFormat(type)`              | Sets log format (`json`, `yaml`, `text`). |
| `logme.maskSensitive(keys)`          | Masks sensitive data (e.g., passwords). |
| `logme.encrypt(key)`                 | Encrypts logs using AES-256. |

---

### **4️⃣ Log Rotation & Performance**  
| **Function**                      | **Description** |
|------------------------------------|----------------|
| `logme.enableRotation(options)`     | Enables automatic log rotation. |
| `logme.setBatchSize(size)`          | Sets batch size for buffered logging. |
| `logme.flush()`                      | Flushes all batched logs immediately. |

---

### **5️⃣ Namespacing & Contextual Logging**  
| **Function**                     | **Description** |
|-----------------------------------|----------------|
| `logme.get(namespace)`             | Creates a namespaced logger (`log.get("auth")`). |
| `logme.setContext(contextObject)`  | Adds metadata/context to logs. |

---

### **6️⃣ Advanced Features**  
| **Function**                      | **Description** |
|------------------------------------|----------------|
| `logme.enableStreaming(port)`       | Streams logs in real-time via WebSocket. |
| `logme.lazy(() => message)`         | Lazy logging (evaluates message only if needed). |
| `logme.retry(attempts, delay)`      | Retries failed log writes automatically. |

---

### **7️⃣ CLI & Plugins**  
| **Function**                     | **Description** |
|-----------------------------------|----------------|
| `logme.use(plugin)`                | Loads a plugin (e.g., Slack, Sentry). |
| `logme.cli()`                       | Provides CLI commands (`log-mate view`, `log-mate clear`). |

---

## **🛠 Configuration Example**  
```javascript
logme.setConfig({
  level: "debug",
  transports: [
    { type: "console" },
    { type: "file", path: "logs/app.log" },
    { type: "database", uri: "mongodb://localhost:27017/logs" }
  ],
  format: "json",
  maskSensitive: ["password", "email"],
  encrypt: true
});
```

---

## **📌 Features Comparison**  
| Feature                | log-mate  | Other Loggers |
|------------------------|----------|--------------|
| Log Levels            | ✅ Yes   | ✅ Yes  |
| File Logging          | ✅ Yes   | ✅ Yes  |
| Database Logging      | ✅ Yes   | ❌ No  |
| Cloud Integration     | ✅ Yes   | ❌ No  |
| Real-time Streaming   | ✅ Yes   | ❌ No  |
| Log Encryption        | ✅ Yes   | ❌ No  |
| Lazy Logging          | ✅ Yes   | ❌ No  |
| Custom Log Levels     | ✅ Yes   | ✅ Yes  |

---

## **🤝 Contributing**  
Contributions are welcome! If you have suggestions or want to add features:  
1. Fork the repo  
2. Create a new branch (`feature-name`)  
3. Commit your changes  
4. Submit a Pull Request  

---