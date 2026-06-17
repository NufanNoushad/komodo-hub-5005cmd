# Komodo Hub – Prototype

A Digital Platform for Community-Supported Animal Conservation
5005CMD Software Engineering - Individual Resit Submission
Nufan Mohamed — 16909890

## How to Run This Project

### Prerequisites
- A modern web browser (Chrome, Firefox, or Edge)
- No installation, server, or external libraries required

### Setup
1. Download or clone this repository
2. No dependencies need to be installed — this is a static front-end prototype

### Running the Application
1. Open the project folder
2. Double-click `index.html`, or right-click and choose "Open with" your browser
3. The Komodo Hub login page will load directly in your browser
4. Alternatively, if using VS Code, install the "Live Server" extension and click "Go Live" for a local server at `http://localhost:5500`

### Login Credentials

| Role    | Username   | Password     |
|---------|------------|--------------|
| Student | student01  | student123   |
| Teacher | teacher01  | teacher123   |
| Admin   | admin01    | admin123     |

### Navigating the Prototype
1. On the login page, select your role from the dropdown
2. Enter the matching username and password from the table above
3. You will be redirected to a role-specific dashboard:
   - **Student** — view programs, submit sighting reports, manage profile
   - **Teacher** — manage class, review submissions, message students
   - **Admin** — register schools/communities, view business dashboard, manage permissions
4. Click "Log out" at any time to return to the login page

### Support
For any issues accessing or testing this prototype, please contact: mohame306@coventry.ac.uk

## Project Structure
```
komodo-hub/
├── index.html          # Login page
├── css/
│   └── style.css       # All styling
├── js/
│   ├── auth.js         # Login authentication logic
│   └── dashboard.js     # Dashboard session handling
└── pages/
    ├── student.html
    ├── teacher.html
    └── admin.html
```

## Notes
This is a front-end prototype built to demonstrate the Komodo Hub system design, user roles, and access control as documented in the accompanying project report. Authentication is simulated using hardcoded credentials for evaluation purposes and does not connect to a live database.
