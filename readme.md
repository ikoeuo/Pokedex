##Pokedex Website
<img width="1905" height="946" alt="image" src="https://github.com/user-attachments/assets/15a31450-7109-452e-9167-cdc47b1c6ab8" />
<img width="1906" height="441" alt="image" src="https://github.com/user-attachments/assets/07a0f0e4-07a6-4152-9159-d72fb6458103" />

For my assignment I chose to make a pokemon dictionary.

It allows for the user to add in a pokemons pokedex number, name, type, species, and evolutions and add the pokemon to the pokedex at the bottom of the page.

The site also allows for you to reset the pokedex back to only show the 6 pokemon that were origionally there. Each pokemon in the dectionary had an edit and delete button. The delete button removes the pokemon from the site and the json file, and the edit button allows for you to edit all of the pokemons data exept for the pokedex number which then also updates the json file.

The theme for my site was cozy retro pokemon dictionary :D

##Files

#### `middleware/`
Contains middleware and utility files related to data handling and processing.
- **`db.js`**: A JavaScript file containing logic to manipulate the `db.json` data, such as loading and saving data.
- **`db.json`**: The current state of the server's data, including characters, items, etc. This file acts as a simple database.
- **`default_db.json`**: A template or default state of the server's data. Used to reset `db.json` to its original state.

#### `public/`
Houses all static files served directly to the client, such as HTML, CSS, JS, and images.
- **`css/`**: Contains CSS stylesheets for the project.
  - **`api.css`**: Specific styles for the API documentation page (`api.html`).
  - **`style.css`**: General styles applied across the project.
- **`img/`**: Directory for storing image files used in the project.
- **`js/`**: Contains JavaScript files.
  - **`index.js`**: The main JavaScript file for the front-end logic, handling interactions in `index.html`.
  - **`toaster.js`**: A utility script for displaying toast notifications on the site.
- **`api.html`**: The API documentation page, explaining how to use the server's endpoints.
- **`index.html`**: The main entry point for the application's front-end, providing the user interface.

#### `package.json`
Describes the project's metadata, dependencies, and scripts. This file is used by npm to manage the project's packages.

#### `readme.md`
A Markdown file containing information about the project, including setup instructions, usage details, and documentation.

#### `server.js`
The main server file for the Fantasy RPG project. It initializes the Express server and defines the API endpoints.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/) installed on your machine. This project was built with Node.js version `20.9.0`, so it is recommended to use a compatible version.

### Installing

Follow these steps to get your development environment running:

1. **Extract the server file**

   ```bash
   unzip a02Server.zip
   ```

2. **Install dependencies**: Run the following command in the root directory of your project to install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Start the server**: To start the server, run:

   ```bash
   npm run server
   ```


This command will start the server on http://localhost:4042 (or whatever port is specified in your environment variables). You can access the API through this URL.


## Usage
Once the server is running, you can use the provided endpoints to manage the RPG inventory. Here are some examples of how to interact with the server:

- Get all items: Sends a **GET** request to **/api/items**
- Get a specific item: Sends a **GET** request to **/api/items/:id**
- Add a new item: Sends a **POST** request to **/api/items** (with item data as JSON).
- Update an item: Sends a **PUT** request to **/api/items/:id** (with the updated data as JSON).
- Delete an item: Sends a **DELETE** request to **/api/items/:id**

Visit http://localhost:4042/api for more details.
