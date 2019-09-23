# Starling

A CLI for simplified, coordinated, decentralized storage on the Filecoin network.

```
      .. .
     .... ..
  ...... .. ... . .
    . ... ....... ... ..
         .... .. .. ....
              .........

```

## Develop

To run locally

```js
> npm install
```

During development it’s convenient to make the symlink on our path point to the index.js we’re actually working on, using `npm link`.

```js
> npm link
```

Test by running

```js
> starling <command>
```

### database

Starling uses an [sqlite3](https://www.npmjs.com/package/sqlite3) database. The db is created in `HOME/.starling/starling.db`

## Commands

Modify the config file `HOME/.starling/config.json`

```js
> starling config
```

Store a single file

```js
> starling store path/to/file.jpg
```

Store a folder

```js
> starling store path/to/folder
```

Launch interactive monitoring interface

```js
> starling monitor
```

Generate CSV of all files stored

```js
> starling list
```

Output the version number

```js
> starling --version | -v
```

Output usage information

```js
> starling --help | -h | help
```
