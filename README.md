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

# 📖 Overview

BreakTrack Pro is an employee break management platform designed to digitize, automate, and simplify the operational management of employee breaks.

The platform replaces manual tracking processes with a centralized digital workflow that improves operational visibility, enforces business rules consistently, and provides supervisors with real-time information for better decision-making.

Employees can quickly register the start and end of their breaks through an intuitive web interface. Every operation is automatically validated, processed, and recorded, allowing the platform to calculate break duration, classify compliance status, and maintain complete operational traceability.

Beyond break registration, BreakTrack Pro provides dashboards, historical records, performance rankings, and operational indicators that help supervisors monitor daily activity, identify exceptions, and support continuous operational improvement.

This repository contains the public demonstration version of the platform, preserving the architecture, workflow, and core functionality of the original operational solution while intentionally excluding organization-specific information.

---

# 🎯 The Challenge

In many retail environments, employee break management is still performed through manual processes, making it difficult to monitor break durations, enforce operational policies, and maintain reliable historical records.

Without centralized information, supervisors have limited visibility into active breaks, delayed returns, compliance levels, and overall operational performance. This often results in inconsistent monitoring, reduced operational efficiency, and limited support for data-driven decision-making.

BreakTrack Pro was created to address these challenges by replacing manual tracking with an automated digital workflow capable of validating operations, enforcing business rules, and generating real-time operational insights.

---

# 💡 The Solution

BreakTrack Pro transforms employee break management into a structured, automated, and traceable process by combining an intuitive web interface with centralized business logic and operational reporting.

Employees simply enter their employee identification number to register the beginning and end of a break. Every request is automatically validated to prevent duplicate registrations, multiple active breaks, and invalid employee records.

Once a break is completed, the platform automatically calculates its duration, classifies the result according to predefined business rules, updates operational statistics, and refreshes performance indicators without requiring manual intervention.

Through integrated dashboards, historical records, and automated employee rankings, supervisors gain immediate operational visibility that supports monitoring, compliance tracking, and informed decision-making.

---

# ✨ Key Features

## 🔍 Employee Identification

- Employee lookup by identification number.
- Automatic employee validation.
- Display of assigned store and brand information.

## ☕ Break Registration

- Register break start.
- Register break completion.
- Automatic timestamp recording.
- Real-time duration calculation.

## ✅ Business Rule Validation

- Prevent duplicate registrations.
- Prevent multiple active breaks.
- Validate employee records.
- Automatic compliance classification.

## 📊 Operational Dashboard

- Daily break monitoring.
- Active employee tracking.
- Compliance indicators.
- Tolerance and exceeded alerts.
- Real-time operational statistics.

## 🏆 Performance Ranking

- Automatic employee ranking.
- Compliance tracking.
- Performance indicators.
- Top performer identification.

## 📋 Historical Records

- Complete break history.
- Operational traceability.
- Historical reporting support.

## ⚙️ Administration

- Dashboard access.
- Historical records.
- Performance ranking.
- System configuration.

---

# 🏗️ Architecture

BreakTrack Pro follows a lightweight multi-layer architecture that separates the user interface, business logic, and operational data into independent components.

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
│ Configuration & Reports       │
└───────────────────────────────┘
```

The presentation layer provides a simple and intuitive interface where employees register the start and end of their breaks.

Google Apps Script implements the application's business logic, including employee validation, duplicate prevention, break status verification, duration calculation, compliance classification, statistics generation, and automatic ranking updates.

Google Sheets acts as the centralized data repository, storing employee information, operational logs, dashboard metrics, rankings, and system configuration while enabling real-time operational monitoring.

---

# ⚙️ Technology Stack

BreakTrack Pro was built using technologies that provide rapid development, seamless integration with Google Workspace, and a lightweight deployment model suitable for operational environments.

| Technology             | Purpose                                                                                      |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| **HTML5**              | Structures the user interface and application layout.                                        |
| **CSS3**               | Provides responsive styling and an intuitive user experience.                                |
| **JavaScript (ES6)**   | Handles client-side interactions and communication with the backend.                         |
| **Google Apps Script** | Implements business logic, validations, and operational rules.                               |
| **Google Sheets**      | Stores employee information, operational logs, dashboards, rankings, and configuration data. |

### Design Approach

The platform follows a lightweight architecture where presentation, business logic, and operational data remain clearly separated.

This approach minimizes infrastructure requirements while providing centralized management, real-time processing, and easy deployment within Google Workspace.

---

# 🔄 System Workflow

The following workflow illustrates how BreakTrack Pro processes an employee break from registration to operational reporting.

```text
Employee
    │
    ▼
Enter Employee ID
    │
    ▼
Employee Validation
    │
    ├── Invalid ID
    │      │
    │      ▼
    │   Display Error Message
    │
    ▼
Employee Information Loaded
    │
    ▼
Start Break
    │
    ▼
Business Rule Validation
    │
    ├── Active Break
    ├── Duplicate Registration
    └── Valid Request
    │
    ▼
Break Registered
    │
    ▼
Employee Returns
    │
    ▼
End Break
    │
    ▼
Duration Calculation
    │
    ▼
Compliance Classification
    │
    ├── 🟢 Compliant
    ├── 🟡 Tolerance
    └── 🔴 Exceeded
    │
    ▼
Update Logs
    │
    ▼
Update Dashboard
    │
    ▼
Update Performance Ranking
```

Every completed operation automatically updates operational logs, dashboard metrics, and employee performance rankings, ensuring supervisors always have access to accurate, real-time information.

---

# 📂 Project Structure

The repository is organized to separate source code, project documentation, and visual assets, making the project easier to understand and maintain.

```text
BreakTrack-Pro/
│
├── 📁 assets/
│   ├── 🖼️ banner/
│   ├── 🎨 icons/
│   ├── 🅱️ logo/
│   └── 📸 screenshots/
│
├── 📁 documentation/
│
├── 📁 images/
│
├── 📁 source/
│
└── 📄 README.md
```

| Folder             | Description                                                            |
| ------------------ | ---------------------------------------------------------------------- |
| **assets/**        | Project visual assets including banner, logo, icons, and screenshots.  |
| **documentation/** | Technical documentation, manuals, and supporting documents.            |
| **images/**        | Additional images used throughout the repository.                      |
| **source/**        | Frontend files, Google Apps Script backend, and project configuration. |
| **README.md**      | Main project documentation.                                            |

---

# 🚀 Platform Experience

BreakTrack Pro has been designed around two primary user experiences:

- **Employees**, who register and complete their daily breaks through a fast and intuitive workflow.
- **Supervisors**, who monitor operational performance using real-time dashboards, historical records, and automated performance indicators.

The following walkthrough illustrates the platform from both perspectives.

---

# 👤 Employee Journey

### 🏠 Home Screen

The Home Screen is the primary entry point of BreakTrack Pro.

Employees can quickly identify themselves using their employee ID, verify their assigned information, and register the start or end of a break through a simple and intuitive interface designed for everyday operational use.

<p align="center">
    <img src="assets/screenshots/home.png" alt="BreakTrack Pro Home Screen" width="850">
</p>

---

### 🔍 Employee Validation

Before processing any operation, BreakTrack Pro validates the employee ID against the centralized employee database.

If the entered ID does not exist, the system immediately rejects the request and displays an informative validation message, preventing unauthorized or incorrect records from being created.

This validation guarantees that every registered break belongs to a valid employee.

<p align="center">
    <img src="assets/screenshots/invalid-id.png" alt="Invalid Employee Validation" width="850">
</p>

---

### ⚠️ Active Break Validation

BreakTrack Pro automatically prevents employees from registering multiple active breaks.

Before creating a new break record, the platform verifies whether an unfinished break already exists. If an active break is detected, the request is rejected and the employee receives immediate feedback.

This validation enforces business rules and preserves the consistency of operational data.

<p align="center">
    <img src="assets/screenshots/duplicate-break.png" alt="Active Break Validation" width="850">
</p>

---

### ✅ Successful Break Completion

When an employee returns from their break, BreakTrack Pro automatically records the end time and processes the operation without requiring manual calculations.

The platform immediately calculates the total break duration, evaluates compliance according to predefined business rules, and confirms the successful registration.

<p align="center">
    <img src="assets/screenshots/break-completed.png" alt="Successful Break Completion" width="850">
</p>

---

### 🟡 Automatic Compliance Classification

After every completed break, the platform automatically classifies the result according to the configured business rules.

BreakTrack Pro evaluates the elapsed time and assigns one of three compliance levels:

- 🟢 Compliant
- 🟡 Tolerance
- 🔴 Exceeded

This automatic classification provides immediate operational feedback while supplying supervisors with reliable performance indicators.

<p align="center">
    <img src="assets/screenshots/tolerance-break.png" alt="Automatic Compliance Classification" width="850">
</p>

---

# 👨‍💼 Supervisor Journey

BreakTrack Pro provides supervisors with dedicated operational tools to monitor employee break activity, review compliance metrics, and access historical information in real time.

The administration workflow has been designed to provide immediate operational visibility while maintaining a simple and intuitive user experience.

---

### 🔐 Administrator Access

Administrative features are protected through a dedicated authentication step.

Only authorized personnel can access operational statistics, dashboards, historical records, and performance reports.

<p align="center">
    <img src="assets/screenshots/admin-login.png" alt="Administrator Login" width="850">
</p>

---

### 📈 Real-Time Statistics

Once authentication is completed, BreakTrack Pro retrieves the latest operational data and prepares the administration panel.

This ensures supervisors always work with up-to-date information.

<p align="center">
    <img src="assets/screenshots/loading-statistics.png" alt="Loading Statistics" width="850">
</p>

---

### 📊 Operational Snapshot

The administration panel presents a real-time overview of daily break activity.

Supervisors can instantly monitor:

- Registered breaks
- Active breaks
- Compliance levels
- Tolerance cases
- Exceeded limits
- Latest activity

This consolidated view enables faster operational decisions.

<p align="center">
    <img src="assets/screenshots/operations-summary.png" alt="Operations Summary" width="850">
</p>

---

# 📊 Operational Management

### 📈 Operations Dashboard

The Operations Dashboard centralizes operational metrics into a single view.

It provides supervisors with real-time visibility of daily performance, compliance indicators, and operational trends.

<p align="center">
    <img src="assets/screenshots/dashboard.png" alt="Operations Dashboard" width="900">
</p>

---

### 👥 Employee Database

The Employee Database serves as the master repository for all employee information used by the platform.

It stores employee identification, names, assigned brands, and store information used during every validation and registration process.

<p align="center">
    <img src="assets/screenshots/employee-database.png" alt="Employee Database" width="900">
</p>

---

### 📋 Break History

Every completed operation is automatically stored in the historical log.

Each record includes timestamps, calculated duration, compliance status, and employee information, providing complete operational traceability.

<p align="center">
    <img src="assets/screenshots/break-history.png" alt="Break History" width="900">
</p>

---

### 🏆 Performance Ranking

The Performance Ranking automatically evaluates employee compliance based on completed break records.

Using operational indicators such as compliant breaks, tolerance cases, exceeded limits, and compliance percentage, supervisors can quickly identify performance trends.

<p align="center">
    <img src="assets/screenshots/performance-ranking.png" alt="Performance Ranking" width="900">
</p>

---

# 🚀 Getting Started

This repository contains the public demonstration version of **BreakTrack Pro**, preserving the architecture, workflow, and core functionality of the original operational solution.

## Prerequisites

Before deploying the application, make sure you have:

- A Google Account
- Google Sheets
- Google Apps Script
- A modern web browser

---

## Project Setup

1. Create a new Google Spreadsheet.
2. Open **Extensions → Apps Script**.
3. Copy the project source files into the Apps Script editor.
4. Create the required worksheets:

- `EMPLOYEE_DATABASE`
- `BREAK_LOGS`
- `DASHBOARD`
- `PERFORMANCE_RANKING`
- `CONFIGURATION`

5. Deploy the project as a **Web App**.
6. Grant the required Google Apps Script permissions.
7. Open the generated Web App URL.

---

## Initial Configuration

Populate the employee database with:

- Employee ID
- Employee Name
- Brand
- Store

Once configured, employees can immediately begin registering their breaks.

---

# 🗺️ Roadmap

## Current Version

- ✅ Employee identification and validation
- ✅ Break registration
- ✅ Business rule validation
- ✅ Automatic compliance classification
- ✅ Operational dashboard
- ✅ Performance ranking
- ✅ Historical records
- ✅ Google Workspace integration

---

## Future Enhancements

- 🔲 Authentication and role management
- 🔲 Multi-store support
- 🔲 Email notifications
- 🔲 Advanced analytics
- 🔲 Configurable business rules
- 🔲 Mobile-first interface
- 🔲 Export operational reports

---

# 🌍 Behind the Project

BreakTrack Pro represents the public demonstration version of a solution originally developed to solve a real operational challenge in employee break management.

The original implementation replaced manual break tracking with a centralized digital workflow capable of improving operational visibility, automating business rules, and providing reliable real-time information for supervisors.

This repository preserves the architecture, workflow, and core functionality of the original solution while intentionally excluding organization-specific information.

More than demonstrating a technical implementation, BreakTrack Pro reflects a software engineering approach focused on understanding business needs, designing practical solutions, and creating measurable operational value through automation and data-driven decision-making.

---

# 👩‍💻 About the Developer

Hi, I'm **Sugheiry Alcalá**.

I'm a **Software Developer** and **Data & AI Analyst** passionate about building technology that solves real operational challenges.

My professional interests combine software development, data analysis, artificial intelligence, and product thinking to create practical solutions that improve business processes and support better decision-making.

I enjoy transforming operational needs into reliable, intuitive, and scalable digital products.

## Let's Connect

- 💼 **LinkedIn**  
  https://www.linkedin.com/in/sugheiry-alcala/

- 💻 **GitHub**  
  https://github.com/sugheiry-alcala

---

# 📄 License

This project is licensed under the MIT License.

Feel free to explore, learn from, and adapt the code for educational and personal purposes.

See the **LICENSE** file for more information.

---

<p align="center">

**Transforming operational challenges into practical software solutions.**

Built with ❤️ by **Sugheiry Alcalá**

</p>
