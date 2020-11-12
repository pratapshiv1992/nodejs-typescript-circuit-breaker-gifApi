# nodejs-typescript-circuit-breaker-gifApi


Example of node.js, typescript, express.js, circuit-breaker-patter, gif API

## Application dependencies

- [Express.js](https://expressjs.com)
- [TypeScript](https://www.typescriptlang.org)

## Environment dependencies

- [Node.js](nodejs.org)

## GIF API setup

- https://tenor.com/ or any other third party API  can be used.
    ##steps to generate api key (for https://tenor.com/)
    - go to https://tenor.com/developer/keyregistration and follow the below steps.
    - signIn with google account and verify the email recieved in your inbox.
    ![alt text](https://linkpicture.com/q/signupWithGoogleAccount.png)
    - After successful signIn, update the basic profile details       
    ![alt text](https://linkpicture.com/q/updateProfile.png)
    - Now fill the app details and click on the button.       
    ![alt text](https://www.linkpicture.com/q/fillAppDetails.png)
    - Boom!, Now your API key has been generated. Copy this key and put in .env file       
    ![alt text](https://www.linkpicture.com/q/APIKey_LI.jpg)

## installation

- `npm install`: installs the dependency
- `npm run dev`: start development server watching changes in ./src
- `npm start`: start production server running the compiled app
-  Now project is running on port 80. Open postman and hit endpoint http://localhost:80/v1/gifSearch?q=car&limit=10

## :man_astronaut: Show your support

Give a ⭐️ if this project helped you! 
