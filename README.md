# log-mate  
**A flexible and powerful logging library for Node.js**  
log-mate makes logging effortless & powerful—log to console, files, databases, or cloud with structured logs, encryption, real-time streaming, and auto-rotation. It’s plug & play, supports multi-transport logging, and boosts performance with async, lazy logging, and batching. Plus, it keeps your data secure with masking & encryption—perfect for everything from debugging to production!

[![npm](https://img.shields.io/npm/v/log-mate.svg)](https://www.npmjs.com/package/log-mate)  [![License](https://img.shields.io/npm/l/log-mate.svg)](LICENSE)  [![Downloads](https://img.shields.io/npm/dt/log-mate.svg)](https://www.npmjs.com/package/log-mate) 

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
const log = require('log-mate');

log.trace("This is a trace message");
log.debug("Debugging details here");
log.info("Informational message");
log.warn("This is a warning!");
log.error("Something went wrong!", { code: 500, details: "Internal Server Error" });
log.fatal("Critical failure! Shutting down...");
```

### **Logging to a File**  
```javascript
log.toFile("logs/app.log", { rotation: true });
log.info("This will be logged to a file.");
```

### **Logging to a Database**  
```javascript
log.toDatabase({ type: "mongo", uri: "mongodb://localhost:27017/logs" });
log.info("This log entry is saved in the database.");
```

### **Streaming Logs in Real-Time**  
```javascript
log.enableStreaming(3000); // Streams logs over WebSocket at port 3000
log.info("Streaming logs in real-time...");
```

---

## **📜 API Reference**  

### **1️⃣ Core Logging Functions**  
| **Function**                 | **Description** |
|------------------------------|----------------|
| `log.trace(message, ...args)` | Logs a trace message (detailed debugging). |
| `log.debug(message, ...args)` | Logs a debug message. |
| `log.info(message, ...args)`  | Logs an informational message. |
| `log.notice(message, ...args)` | Logs a notice message. |
| `log.warn(message, ...args)`  | Logs a warning message. |
| `log.error(message, ...args)` | Logs an error message. |
| `log.fatal(message, ...args)` | Logs a fatal error message. |
| `log.custom(level, message, ...args)` | Logs with a custom log level. |

---

### **2️⃣ Log Output & Transport**  
| **Function**                      | **Description** |
|------------------------------------|----------------|
| `log.toConsole(enable = true)`     | Enables/disables console logging. |
| `log.toFile(filepath, options)`    | Logs messages to a file. |
| `log.toDatabase(dbConfig)`         | Logs messages to a database. |
| `log.toCloud(service, options)`    | Sends logs to AWS, GCP, Azure, etc. |
| `log.toWebhook(url, options)`      | Sends logs to a webhook URL. |

---

### **3️⃣ Formatting & Encryption**  
| **Function**                      | **Description** |
|------------------------------------|----------------|
| `log.setFormat(type)`              | Sets log format (`json`, `yaml`, `text`). |
| `log.maskSensitive(keys)`          | Masks sensitive data (e.g., passwords). |
| `log.encrypt(key)`                 | Encrypts logs using AES-256. |

---

### **4️⃣ Log Rotation & Performance**  
| **Function**                      | **Description** |
|------------------------------------|----------------|
| `log.enableRotation(options)`     | Enables automatic log rotation. |
| `log.setBatchSize(size)`          | Sets batch size for buffered logging. |
| `log.flush()`                      | Flushes all batched logs immediately. |

---

### **5️⃣ Namespacing & Contextual Logging**  
| **Function**                     | **Description** |
|-----------------------------------|----------------|
| `log.get(namespace)`             | Creates a namespaced logger (`log.get("auth")`). |
| `log.setContext(contextObject)`  | Adds metadata/context to logs. |

---

### **6️⃣ Advanced Features**  
| **Function**                      | **Description** |
|------------------------------------|----------------|
| `log.enableStreaming(port)`       | Streams logs in real-time via WebSocket. |
| `log.lazy(() => message)`         | Lazy logging (evaluates message only if needed). |
| `log.retry(attempts, delay)`      | Retries failed log writes automatically. |

---

### **7️⃣ CLI & Plugins**  
| **Function**                     | **Description** |
|-----------------------------------|----------------|
| `log.use(plugin)`                | Loads a plugin (e.g., Slack, Sentry). |
| `log.cli()`                       | Provides CLI commands (`log-mate view`, `log-mate clear`). |

---

## **🛠 Configuration Example**  
```javascript
log.setConfig({
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