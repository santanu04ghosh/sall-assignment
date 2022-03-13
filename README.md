# Introduction

Sall-project Assignment (https://github.com/santanu04ghosh/sall-assignment.git).

## Setup Development Environment

To kickstart the development of the web app with StartP, at first need to setup the react development environment.

Following tools are needed to setup a react dev environment:

Node JS
NodeJS works as a node package manager behind the scene. It is recommended to download and install the latest version of Node JS from its official site https://nodejs.org/en/

### Preparation

You'll need to install Node.js >=v14.16+ (Recommended Version) (NPM comes along with it) and serve (an NPM package)

Use command line tool i.e. PowerShell or terminal and navigate to the project(StartP) root. This is PowerShell in windows and terminal on mac/linux.

Let's have a look on the setup process:
Use terminal and navigate to the project root.

Then run : npm install

Then run : npm start

Now, in the browser go to localhost:3000

### Pages and Components Info

. App.js => Main component where fetch the date from  https://randomuser.me/ to create a REST API to return a 
list of 10 users

.AllPersonList.js => Where I have define the search (By UserName) and pagination logic.

.Pagination.js => Where I render the pagination style and logic.

.Context => This folder contains two file for crate a ReactContext and write state logic for useContext

.Modal.js => Craete Modal to populate data when user hit on userName.

.scss => conatins all the components style.

***  On page refresh user should be on the same page and with same 
result (Do not use browser storage). I don't know how to do without any server or browser Storage.
