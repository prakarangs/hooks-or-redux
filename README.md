## Description
Example of state management between context API / hooks versus Redux.

## Run fake Json server

`npm install -g json-server`

then from root directory run

`json-server --watch db.json`

The data will be served under `http://localhost:3000/cars`
You can also filter fields i.e., `http://localhost:3000/cars?id='someId'`
