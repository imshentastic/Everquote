# Everquote
https://everquote-app.herokuapp.com/ "Everquote's Homepage"

Everquote is a website and web app clone of Evernote - the popular notes editing and management site. It is a CRUD app built on Redux-React front-end and Rails back-end, using Postgres as our relational database management system, and using SCSS for styling. We also use Webpack to bundle modules for Javascript. It is written with a combination of Javascript, Ruby, and SQL.

Everquote has many of the same capabilities of the original web app, including user creation/authentication, note and notebook creation, deletion, editing, and viewing. It also utilizes Quill, an open source  WYSIWYG text editor libary with customizable rich text formatting capabilities. 

![Everquote icon](https://github.com/imshentastic/Everquote/blob/master/app/assets/images/penguin-icon.png)
![Notebook functionality](https://github.com/imshentastic/Everquote/blob/master/app/assets/images/notebook-functionality.gif)

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
