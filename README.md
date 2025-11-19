# 🗂️ TOTLE Topic Retrieval API (Backend Assignment)

A simple, fast, and reliable Node.js + Express API for topic retrieval with search and sorting functionality.  
This project is part of the **TOTLE Backend Developer Internship Round 1 Coding Submission**.

---

## 🚀 Project Overview

- Provides a RESTful API endpoint to retrieve topics from a local JSON data source.
- Supports case-insensitive search by topic name using URL query parameters.
- Returns filtered results instantly with appropriate status codes for success and error handling.
- Bonus: Supports optional sorting by topic name.

---

## ✨ Features

- **🔍 Search API**  
  `GET /api/topics?search=<query>` filters topics by name, case-insensitive.

- **⚡ Fast & Lightweight**  
  Reads data from local JSON file, returns JSON responses.

- **📊 Sorting Capability**  
  Optional `sort=name` query parameter to sort topics alphabetically.

- **🔒 Error Handling**  
  Handles missing query parameters and file read errors gracefully.

- **🌐 CORS Enabled**  
  Allows frontend apps on other domains to access API easily.

---

## 🗂 Folder Structure

topic-retrieval-api/
├── data/
│ └── topics.json
├── index.js
├── package.json
├── package-lock.json
└── README.md


---

## ⚙️ Setup & Run Instructions

1. **Clone the repository:**
git clone https://github.com/Bhavesh04A/topic-retrieval-api.git
cd topic-retrieval-api

2. **Install dependencies:**
npm install

3. **Start the development server:**
npm run dev

The API will be available at: `http://localhost:5000/api/topics`

---

## 🧩 API Usage Examples

Retrieve topics matching "thermo":
GET http://localhost:5000/api/topics?search=thermo

Retrieve and sort by name:
GET http://localhost:5000/api/topics?search=calc&sort=name


---

## 🎥 Demo Video

A short walkthrough explanation video (demo.mp4) is included in the repository, demonstrating setup, usage, and code highlights.  
You can also [view the video online](YOUR_VIDEO_LINK_HERE) if uploaded.

---

## 🔗 Project Repository

[https://github.com/Bhavesh04A/topic-retrieval-api](https://github.com/Bhavesh04A/topic-retrieval-api)

---

## 👨‍💻 Developed By

**Bhavesh Alawane**  
FullStack Developer & Problem Solver | [GitHub Profile](https://github.com/Bhavesh04A)