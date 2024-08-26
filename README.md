CNAPP Dashboard
Overview
This project is a React-based dashboard for monitoring and managing various widgets related to cloud security, workload alerts, and image security issues. It uses Material-UI for the user interface and Chart.js with react-chartjs-2 for data visualization.

Features
Dynamic Widgets: Add, edit, and remove widgets dynamically.
Charts: Visualize data using various chart types including Doughnut, Pie, and Bar charts.
Editable Widget Data: Modify widget names, data, and colors through a dialog.
Installation
To get started with this project, you need to install the required npm packages. Follow these steps:

Clone the Repository

git clone https://github.com/your-username/your-repository.git
cd your-repository
Install Dependencies

Run the following command to install all necessary packages:
npm install react react-dom
npm install @mui/material @emotion/react @emotion/styled
npm install chart.js
npm install react-chartjs-2
npm install @mui/icons-material
npm install react react-dom @mui/material @emotion/react @emotion/styled chart.js react-chartjs-2 @mui/icons-material

Start the Development Server

Once the dependencies are installed, start the development server using:

npm start
This will start the development server and open the application in your default browser.

Usage
Add Widgets: Click the "+ Add Widget" button to add a new widget to the dashboard.
Edit Widgets: Click the edit icon (pencil) on a widget to open the edit dialog where you can change the widget's name, data, and colors.
Remove Widgets: Click the delete icon (trash) to remove a widget from the dashboard.
Project Structure
src/: Contains the source code for the project.
components/: Contains React components for the dashboard.
App.js: Main application component.
index.js: Entry point of the React application.

Contributing
Feel free to open issues or submit pull requests if you have any improvements or bug fixes.