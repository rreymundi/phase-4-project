# Phase 4 project: CO.LAB

CO.LAB is a project management tool that allows you to team up and collaborate on projects. It uses a Rails API with a React frontend.

# Getting Started

This project was cloned from [this](https://github.com/learn-co-curriculum/project-template-react-rails-api) template, which is scaffolded to allow building a React frontend and Rails backend together. It has been configured to enable deployment of the app to Render.

Setting up your environment:

Ruby version 2.7.4 is recommended. If you need to upgrade you can install it using rvm:

$ rvm install 2.7.4 --default

You should also install the latest versions of bundler and rails:

$ gem install bundler
$ gem install rails

Verify you are running a recent version of Node with:

node -v
If your Node version is not 16.x.x, install it and set it as the current and default version with:

nvm install 16
nvm use 16
nvm alias default 16

Fork and clone this branch to set up your local copy.

Preliminary installs:
### `bundle install` 

Installs the required gems

### `rails db:migrate` 

Gets your db all set up with the latest schema.

### `rails db:seed` 

Sets up some seed data to help you get started.
### `npm install @mui/material @emotion/react @emotion/styled`

This app makes us eof Material UI components.

### `React`

    "react": "17.0.2"

### `React Router Dom`

The app routes were set up using React Router Dom v6

    "react-router-dom": "6.6.2"

In the project directory, you can run:

###`rails s` to run the backend on http://localhost:3000
###`npm start --prefix client` to run the frontend on http://localhost:4000

## Features

CO.LAB features a sign up page to create a new account and a login page to log in with existing credentials. Once logged, in you'll have access to a user menu which is comprised of three pages:

- All Projects
    - Shows all projects created by yourself and other users
    - Each project can be expanded to show a roadmap with a high-level overview of tasks, organized by status.
    - A "Create project" button allows creating and adding a project to the list. This project will be visible to all other users.
- My Projects
    - Shows all projects you are currently contributing to. That is to say, if you've added a new task to a project, then that project will be listed here.
    - Each project can be expanded to show a roadmap with a high-level overview of tasks, organized by status.
- My tasks
    - Shows your open tasks as cards.
    - Each card shows the task name, description, status, priority, and corresponding project.
    - A "Create task" button allows creating and adding a new task.
    - Each task card has a menu that allows deleting or editing a task.
    - Only the task creator/owner can edit or delete their tasks.

All actions are set to persist via the back-end.

## Associations

The database consists of three models with many-to-many Active Record associations.

Users
has_many :tasks
has_many :projects, through: :tasks

Tasks
belongs_to :user
belongs_to :project

Projects
has_many :tasks
has_many :projects, through: :tasks

The database tables were set up using Active Record migrations. Any changes to the database should be done via Active Record migrations. The schema.rb file will contain the latest state of the database.

## App Demo

Check out a demo of CO.LAB [here](https://youtu.be/yjEBQyysNow).