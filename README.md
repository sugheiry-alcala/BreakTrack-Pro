<p align="center">
  <img src="assets/banner/github-banner.png" alt="BreakTrack Pro Banner" width="100%">
</p>

<h1 align="center">BreakTrack Pro</h1>

<p align="center">
Employee Break Management Platform
</p>

<p align="center">
<b>Smarter Break Management for Better Operations</b>
</p>

<p align="center">

![Version](https://img.shields.io/badge/version-1.0.1-blue)
![Status](https://img.shields.io/badge/status-Production-success)
![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-Enabled-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![HTML5](https://img.shields.io/badge/HTML5-orange)
![CSS3](https://img.shields.io/badge/CSS3-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

</p>

---

## 📖 Overview


BreakTrack Pro is an employee break management platform designed to digitize, automate, and simplify the operational control of employee breaks.

The platform was created to replace manual tracking processes with a centralized digital workflow that improves operational visibility, ensures consistent application of business rules, and provides real-time information for supervisors and operational leaders.

Employees can quickly register the start and end of their breaks through an intuitive web interface, while the system automatically validates each operation, calculates break duration, classifies compliance status, and records every activity for future analysis.

In addition to daily break registration, BreakTrack Pro provides operational dashboards, historical records, automated rankings, and performance indicators that support monitoring, traceability, and data-driven decision making.

This repository presents the public demonstration version of the platform, preserving the architecture, workflow, and core functionality of the original operational solution while omitting organization-specific information.

---
## 🎯 The Challenge

In many retail environments, employee break management is often handled through manual processes, making it difficult to monitor break durations, enforce company policies, and maintain accurate operational records.

Without a centralized system, supervisors face limited visibility into active breaks, delayed returns, compliance levels, and historical data. This lack of real-time information can lead to inconsistent monitoring, reduced operational efficiency, and limited support for informed decision-making.

BreakTrack Pro was created to address these challenges by replacing manual tracking with a structured digital workflow that automates break registration, enforces business rules, and provides real-time operational insights through centralized reporting and performance indicators.

---
## 💡 The Solution

BreakTrack Pro transforms employee break management into a structured, automated, and traceable process by combining an intuitive web interface with centralized business logic and real-time operational reporting.

Employees can quickly register the start and end of their breaks using their employee identification number. Every operation is automatically validated to prevent duplicate records, multiple active breaks, and unauthorized actions, ensuring data consistency throughout the workflow.

As each break is completed, the platform calculates its duration, classifies the result according to predefined compliance rules, updates operational statistics, and generates performance indicators without requiring manual intervention.

Through integrated dashboards, historical records, and automated rankings, supervisors gain immediate visibility into daily operations, allowing them to monitor compliance, identify exceptions, and support operational decision-making with reliable, real-time information.

---


## ✨ Key Features

### 🔍 Employee Identification

- Search employees using their identification number.
- Display employee information before any operation is performed.
- Validate registered employees against the centralized database.

### ☕ Break Registration

- Register break start and end events.
- Record timestamps automatically.
- Calculate break duration in real time.

### ✅ Business Rule Validation

- Prevent duplicate break registrations.
- Prevent multiple active breaks.
- Validate employee records before processing.
- Apply compliance rules automatically.

### 📊 Operational Dashboard

- Monitor daily break activity.
- Track employees currently on break.
- View compliance percentages.
- Identify tolerance and exceeded cases.
- Access real-time operational metrics.

### 🏆 Performance Ranking

- Generate automatic employee rankings.
- Track compliance history.
- Calculate individual performance indicators.
- Highlight top-performing employees.

### 📁 Historical Records

- Store every registered break.
- Maintain operational traceability.
- Support historical analysis and reporting.

### ⚙️ Administration

- Access operational dashboards.
- Review historical records.
- Monitor performance rankings.
- Manage system configuration.

---
## 🏗️ Architecture

BreakTrack Pro follows a lightweight multi-layer architecture that separates the user interface, business logic, and data management into independent components.

```text
┌───────────────────────────────┐
│        Web Interface          │
│   HTML • CSS • JavaScript     │
└──────────────┬────────────────┘
               │
               │ google.script.run
               ▼
┌───────────────────────────────┐
│     Google Apps Script        │
│    Business Logic Layer       │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│        Google Sheets          │
│  Operational Data Storage     │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│ Dashboard • Logs • Ranking    │
│ Configuration & Reports        │
└───────────────────────────────┘
```

The presentation layer provides an intuitive interface for employees to register their breaks and interact with the platform.

Business logic is handled by Google Apps Script, where all operational rules are executed, including employee validation, duplicate prevention, break status verification, duration calculation, compliance classification, statistics generation, and automatic ranking updates.

Google Sheets acts as the centralized data repository, storing employee information, operational logs, dashboard metrics, ranking data, and system configuration, enabling real-time monitoring without requiring a traditional database server.
