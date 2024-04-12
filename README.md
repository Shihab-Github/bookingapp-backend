## Introduction
This is the backend server to support the <a href="https://github.com/Shihab-Github/bookingapp">Airbnb clone app</a> developed using Expo and React Native

## Installation

```bash
$ npm install
```

## Running the app

```bash
# watch mode
$ npm run start:dev

```

## Tech Stack
- This project has been developed using Nestjs
- Mongodb has been used as the choice of database

## Documentation
In the data layer, this project adheres to the repository pattern. I have created an abstract repository that will be inherited by all current and future entities to share common functionalities. There's an abstract schema as well to hold the common fields. As this project has only one entity which is the reservation so this might look like an overkill but this will greatly help the project to scale if more entities are being added in the future. 


