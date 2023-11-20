# GitHub User Search Application

This application allows users to search for GitHub profiles using the GitHub username. It is a React-based application that provides a simple and responsive user interface to make API requests to GitHub and display user data.

## Features

- **Search Functionality**: Users can enter a GitHub username into the search bar and either click the "Search" button or press "Enter" to initiate the search.
- **Input Validation**: The application checks if the search input is not empty before making a request.
- **Responsive Design**: The application is built using `mdb-react-ui-kit` to ensure that the search bar and other components are responsive and adapt to different screen sizes.
- **Error Handling**: Users are alerted if they attempt to search without entering a username.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This project uses Yarn as a package manager. If you do not have Yarn installed, you can install it with npm:

```bash
npm install --global yarn
```
Installation
Clone the repository: git clone https://github.com/sourcecodeguy1/user-search-github.git

Navigate to the project directory: cd user-search-github

Install the dependencies:
```bash
yarn install
```
Usage
To start the application in development mode, run:
```bash
yarn start
```
Open http://localhost:3000 to view it in your browser. The page will reload when you make changes.

Building for Production
To build the application for production, run:
```bash
yarn build
```

This command builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

Deployment
For more information on deployment, see the [deployment section](https://facebook.github.io/create-react-app/docs/deployment) of the Create React App documentation.

Learn More
For a detailed guide on React and Create React App, check out the following resources:
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)

## Docker Usage

This application can be run in Docker, which packages it in a container that includes all the necessary dependencies, ensuring consistent environments across different stages of development.

### Development Environment

For development purposes, you can use `dev.Dockerfile` and `dev.docker-compose.yml` to build and run the application.

- `dev.Dockerfile` sets up a Node.js environment, installs dependencies, and starts the application in development mode.
- `dev.docker-compose.yml` defines the service configuration for development, including port mapping, volume mounting for live code updates, and environment variables necessary for development tools.

To start the development server using Docker Compose, run:

```bash
docker-compose -f dev.docker-compose.yml up --build
```

This will build the image and start the container. The application will be accessible at http://localhost:3000.

Utility Scripts

The utility.Dockerfile and utility.sh script are provided for running utility commands within the Docker context.

- utility.Dockerfile sets up a Node.js environment that can be used to run arbitrary yarn commands.
- utility.sh is an example script that uses utility.docker-compose.yml to run a yarn add dateformat command inside a Docker container.

To run the utility script, execute:

```bash
./utility.sh
```

This will run the yarn add dateformat command inside the container.

### Production Environment

For production, you can use the Dockerfile which builds the application and serves it using Nginx.

- The first stage of the Dockerfile builds the React application.
- The second stage sets up Nginx to serve the static files from the build directory and exposes port 8083.

To build and run the production Docker image, execute:

```bash
docker build -t user-search-github .
docker run -p 8083:8083 user-search-github
```

After running the above commands, the application will be accessible at http://localhost:8083.
Remember to replace user-search-github with the name you prefer for your Docker image.

### License
Distributed under the MIT License. See LICENSE for more information.

### Contact
Julio - [sandovaljulio2@yahoo.com](mailto:<EMAIL>)

Project Link: [https://github.com/sourcecodeguy1/user-search-github](https://github.com/sourcecodeguy1/user-search-github)