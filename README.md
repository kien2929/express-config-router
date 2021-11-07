# express-config-routes

`express-config-routes` is library for dynamic nested routes in [express](https://expressjs.com/)

## Installation

```sh
npm install express-config-routes
```
or with `yarn`
```sh
yarn add express-config-routes
```

## Usage

### Example:
```js
import configRoutes from 'express-config-routes'
import express from 'express'

const app = express()

const options = {
  routeDir: '/routes', // DEFAULT '/routes' NOT REQUIRED
  absolutePath: 'YOUR ABSOLUTE PATH', // NOT REQUIRED
}

app.use(configRoutes(options))
```
When you use both of routeDir and absolutePath, absolutePath overrides routeDir


This file tree:
```
routes/
--| users/
-----| post.js
-----| middleware.js
-----| _id/
-------| get.js
--| books/
-----| _bookId/
--------| authors/
-----------| _authorId/
-------------| get.js
--| get.js
```

generate express Route path:
```
/users/
/users/:id
/books/:bookId/authors/:authorId
/
```
each js file's form

```js
export default (req, res) => {
  res.send('ok')
}
```

or

```js
export default (req, res) => {
  res.send('ok')
}
```
### Use middlewares:
Using under method
```js
// get.js
export default (req, res) => {
  console.log(req.params.id)
  res.send('req.params.id is ' + req.params.id)
}

const middle = (req, res, next) => {
  console.log(req.method)
  next()
}

const middle2 = (req, res, next) => {
  console.log('bar')
  next()
}

export const middleware = [middle, middle2]
```

Using under any file

```js
// middleware.js
const middleware01 = (req, res, next) {
  cosole.log('middleware01')
  next()
}
const middleware02 = (req, res, next) {
  cosole.log('middleware02')
  next()
}
export default [middleware01, middleware02]
```
If use middleware overall, should set it the execution file
