# Everquote
https://everquote-app.herokuapp.com/ "Everquote's Homepage"

> Everquote is a "pixel-perfect" website and web app clone of Evernote, the popular notes editing and management site. It is a CRUD app built on a Redux-React front-end and Rails back-end, using Postgres as our relational database management system.

Everquote has many of the same capabilities, including user creation/authentication, note and notebook creation, deletion, editing, and viewing. It also utilizes Quill, an open source  WYSIWYG text editor with customizable rich text formatting capabilities. 

![](penguin-icon.png)

## Installation

OS X & Linux:

```sh
npm install
```

Windows:

```sh
edit autoexec.bat
```

## Usage example

## Development setup
```sh
1. `npm install`
2. `bundle install`
3. `bundle exec rails db:setup`
4. Run postgres
5. `rails s` for Rails server
6. `npm start` to run `webpack -w`
7. Navigate to localhost:3000
```

## Meta
Michael Shen - michael.pocheng.shen@gmail.com
https://github.com/imshentastic/Everquote


1. Bonus Features: (To be implemented)
2. Search Function
3. Starred list
4. Trashed list
5. Auto-save and auto-complete
6. AWS for hosting images
