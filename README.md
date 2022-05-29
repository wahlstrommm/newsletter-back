
# Newsletter Frontend & Backend 

Uppgiften gick ut på att vi skulle utveckla ett användargränssnitt där besökare på din webbsida kan regsitrera ett nytt konto och då välja att prenumenera eller inte på ett nyhetsbrev.
Även en admin sida där administratör skall kunna logga in på express servern och där kunna se alla registrerade användare samt kunna se en lista på alla de mailadresser som prenumererar på ett nyhetsbrev.

Frontend (HTML, JavaScript ,CSS)
Backend (Node.js, Express.js, Mongoose)
Databas (MongoDB)
![Node.js ](https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white&style=flat)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white&style=flat)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=flat)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white&style=flat)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white&style=flat)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E&style=flat)
## API Postman ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

#### Hämta alla användare

```http
  GET /admin
```

| Parameter | Typ     | Beskrivning                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Hämtar alla registerade användare |

#### Skapa en användare

```http
  POST /register
```

| Parameter | Typ     | Beskrivning                       |
| :-------- | :------- | :-------------------------------- |
| `fname` `lname` `password` `email`     | `JSON innehållande String` | **Required**. Man får tillbaka en ny användare.|

```http
  POST /login
```

| Parameter | Typ     | Beskrivning                       |
| :-------- | :------- | :-------------------------------- |
|   `email`   `password`  | `JSON innehållande String` | **Required**. Loggar in den kommer decrypta ens lösenord och kolla om det stämmer först.|


```http
  PUT /login
```

| Parameter | Typ     | Beskrivning                       |
| :-------- | :------- | :-------------------------------- |
|   `email`   `password` `subscribed`  | `JSON innehållande String (email,password) & Boolean (subscribed)` | **Required**. Ändrar värdet på subscribed om användare prenumerera på nyhetsbrevet eller inte.|


## NPM PAKET

## bcrypt 

"A library to help you hash passwords." Läs mer om denna här: https://www.npmjs.com/package/bcrypt
```
npm install bcrypt

```
## Mongoose 
"Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks."
Läs mer om denna här: https://www.npmjs.com/package/mongoose & https://mongoosejs.com/
```
npm install mongoose --save

```
## dotenv 
"Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology."
Läs mer om denna här: https://www.npmjs.com/package/dotenv
```
# install locally (recommended)

npm install dotenv --save

```
## colors 

"Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology."
Läs mer om denna här: https://www.npmjs.com/package/dotenv
```
npm install colors

```

## Nodemon
"nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected."
Läs mer om denna här: https://www.npmjs.com/package/nodemon
 ```
 npm install --save-dev nodemon 

 nodemon [your node app]
 ```

 ## Cors
 CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
 Läs mer om denna här: https://www.npmjs.com/package/cors
 ```
 npm install cors

 app.use(cors())
  ```

  ## Heroku CLI
  The Heroku CLI is used to manage Heroku apps from the command line. It is built using oclif.
  
  Använde Heroku för att deploya backenden.
  
  Läs mer om denna här: https://www.npmjs.com/package/heroku
  

## gh-pages
Körde frontend delen via Github pages. 
Läs mer om det här: https://pages.github.com/
## Environment Variables

För att köra det här projektet måste du lägga till följande miljövariabler till din .env-fil

`MONGO_URL` (Fråga om den ifall den inte skulle funka)




## Deployment 

För att starta (om  man har installerat nodemon)

```bash
  nodemon start
```


## Demo 💾

Insert gif or link to demo

Backend repo : https://github.com/wahlstrommm/newsletter-back

Frontend repo: https://github.com/wahlstrommm/newsletter-front

Live demo: https://wahlstrommm.github.io/newsletter-front/ 

Inlogg Admin: Username: admin password: admin
## Gjord av 👨‍🏭

- [@Wahlstrommm](https://github.com/wahlstrommm)

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://wahlstrommm.github.io/magnus/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/magnus-vahlstrom/)


## 🛠 Skills
Det jag har använt mig av för att lösa uppgiften!

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)