# MERN Stack Website with OpenAI Integration

This project is a web application built using the MERN stack. It integrates the OpenAI API and uses Tailwind with React to provide a modern, responsive UI.

## Link to the demo: https://openai-dalle-text-to-image.netlify.app/

## Table of Contents

- [Features](#features)
- [Installation & Setup](#installation--setup)
- [Running the App](#running-the-app)
- [Directory Structure](#directory-structure)
- [Contribution](#contribution)
- [License](#license)

## Features

- **OpenAI API Integration**: Utilizes the OpenAI API for advanced features.
- **Responsive Design**: Styled using Tailwind CSS.
- **MERN Stack**: Built on MongoDB, Express.js, React, and Node.js.

## Project Structure:
- `client`: This is the main folder containing all frontend-related files for the React application.
    * `dist`: Distribution folder.
    * `public`: Contains public assets.
    * `src`: Root folder containing source files.
        - `assets`: Static assets like images.
        - `components`: Contains reusable React components.
        - `constants`: Constants used across the application.
        - `pages`: Contains different page components.
        - `utils`: Utility functions and files.
        - `App.css`: Styles specific to the main application.
        - `App.jsx`: The main React component.
        - `index.js`: Entry point for the React application.
        - `main.jsx`: Main JSX file.
    * `postcss.config.js`: Configuration file for PostCSS.
    * `tailwind.config.js`: Configuration file for Tailwind CSS.
    * `vite.config.js`: Configuration file for Vite.

- `server`: This folder contains all backend-related files.
    * `mongodb`: Contains files related to MongoDB connection and configuration.
    * `models`: Data model definitions.
    * `routes`: Contains API route definitions.
    * `index.js`: Entry point for the backend server.

- `README.md`: Documentation for the project.

## Installation & Setup

To run this project locally, follow these steps:

1. Clone the repository to your local machine using the command `git clone https://github.com/hritvikgupta/dalle_clone.git`.
2. Navigate into the project directory using `cd dalle_clone`.
3. Install all the necessary dependencies using the command `npm install`.
4. Start the application using the command `npm start`. The application will now be running on http://localhost:3000.

## Contributing

Contributions to the project are welcome. If you find a bug, please open an issue and describe the bug in detail. If you wish to add a new feature, feel free to fork the repository and create a pull request with your changes.
1. Bug In the signUp portal where active tab is not changing.
2. Adding items to cart but some items id is not rendering and therefore not adding inside cart.
3. Add the about section

## License

This project is licensed under the MIT License.
