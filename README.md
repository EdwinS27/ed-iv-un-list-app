# This is a listing webapp
Something similar to the craigslist webapp

## Stack

*API*

- express.js
- sequelize.js

*React client*

- Built using `create-react-app` and configured to work with the api.
- Bootstrap 4.x added to `/client/public/index.html`
- React Router


## Development Setup

### Create a postgres db

Create a user in postgres named `ctp_user` with the password `ctp_pass`:

> This only needs to be done one time on your machine
> You can create additional users if you want to.

```
createuser -P -s -e ctp_user
```

Create a separate db for this project:

```
createdb -h localhost -U ctp_user ed_iv_un_db_dev
```
### Running the app

For local development you will need two terminals open, one for the api-backend and another for the react-client.

*Clone* this app, then:

```bash
# api-backend terminal 1
cp .env.example .env
npm install
npm run dev
```

```bash
# react-client terminal 2
cd client
npm install
npm start
```
 // IMPORTANT 
 if you comment out the js files under the model it would give you an error ".require not found"
 change it to .js.bak to make it working becuase the index.js thinks it have to read all the files.
 
- api-backend will launch at: http://localhost:8080
- react-client will launch at: http://localhost:3000


// seeding 
cd api
npx sequelize-cli db:seed:all

## Project Structure

<pre>
.
├── README.md
├── <strong>api</strong>
│   ├── server.js
│   ├── <strong>config</strong>
│   └── <strong>server</strong>
│   │   └── config.json
│   │   └── config.json
│   ├── <strong>controllers</strong>
│   │   ├── appConfig.js
│   │   └── auth.js
│   │   └── categories.js
│   │   ├── index.js
│   │   └── posts.js
│   │   └── users.js.tak
│   └── <strong>middlewares</strong>
│   │   └── authentication.js
│   └── <strong>models</strong>
│       ├── category.js
│       ├── index.js
│       └── post.js
│       ├── user.js
│   └── <strong>seeders</strong>
│       ├── 20211204083227-seeds.js
│   └── <strong>routes</strong>
│       ├── user.js
│       ├── jobs.txt
├── <strong>client</strong>
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── <strong>public</strong>
│   │   ├── index.html
│   │   └── robots.txt
│   └── <strong>src</strong>
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── <strong>components</strong>
│       │   ├── Loading.js
│       │   └── Post.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── <strong>pages</strong>
│       │   ├── AboutUsPage.js
│       │   ├── PostFormPage.js
│       │   ├── PostsListPage.js
│       │   └── HomePage.js
│       └── serviceWorker.js
├── package-lock.json
└── package.json
</pre>
