# Everquote
https://everquote-app.herokuapp.com/ "Everquote's Homepage"

Everquote is a website and web app clone of Evernote - the popular notes editing and management site. It is a CRUD app built on a React.js and Redux front end framework, a Ruby on Rails back end, and hosted on Heroku. 

We are using PostgreSQL as our relational database management system. We also use Node package manager to install and bundle front end dependencies, and Webpack is used to bundle Javascript modules and run scripts in the right order. The project is written with a combination of Javascript, Ruby, and SQL and uses SCSS for styling. 

Everquote has many of the same capabilities of the original web app, including user creation/authentication, note and notebook creation, deletion, editing, and viewing. It also utilizes Quill, an open source  WYSIWYG text editor library with customizable rich text formatting capabilities. 
<p align="center">
    <img width="300px" height="300px" src="https://github.com/imshentastic/Everquote/blob/master/docs/penguin-icon.png" alt="Everquote icon">
</p>

<p align="center">
    <img width="300px" height="300px" src="https://github.com/imshentastic/Everquote/blob/master/docs/splash.png" alt="Everquote splash">
</p>

## Usage example
One implemented feature is the ability to access child notes belonging to parent notebooks from a notebooks-show page. Clicking on the child note brings you back to the child's edit page.

<p align="center">
    <img src="https://github.com/imshentastic/Everquote/blob/master/docs/notebook-functionality.gif" alt="Everquote icon">
</p>

Evernote's web app has functionality where the result of clicking on a button is dependent on what other containers and modals are already open. This complicates the standard use of modals as some modals would need to be layered and kept in separate slices of states. I ended up using a combination of routing and modals to achieve the desired behavior

I've also set up a few media queries on the splash page as well as the login form. 



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

## Bonus Features: (To be implemented)
1. Tags
2. Search Function
3. Starred list
4. Trashed list
5. Auto-save and auto-complete
6. AWS for hosting images
7. Sanitizing inputs
8. Allow public/private notes and share notes
