const Department = require('./assets/department_id')
const Role = require('./assets/role_id');
const Employee = require('./assets/employee');

const inquirer = require('inquirer')
const cTable = require('console.table');
require ('dotenv'.config();

const mysql = require('mysql')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : process.env.DB_USER,
    password : process.env.DB_PASS
    database : process.env.DB_NAME
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
    });
})
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });
  
  //Clears database
  connection.query('drop table if exists employee', function (error, results, fields) {
    if (error) throw error;
  });
  connection.query('drop table if exists role', function (error, results, fields) {
    if (error) throw error;
  });
  connection.query('drop table if exists department', function (error, results, fields) {
    if (error) throw error;
  });
  
  //Creates new tables
  connection.query('create table department (id int not null, name varchar(30), primary key (id))', function (error, results, fields) {
    if (error) throw error;
  });
  connection.query('create table role (id int not null, title varchar(30), salary decimal(11,2), department_id int, primary key (id))', function (error, results, fields) {
    if (error) throw error;
  });
  connection.query('create table employee (id int not null, first_name varchar(30), last_name varchar(30), role_id int, manager_id int, primary key (id))', function (error, results, fields) {
    if (error) throw error;
  });
//Departments
let management = new Department(Math.floor(Math.random() * 10000), 'Management');
let marketing = new Department(Math.floor(Math.random() * 10000), 'Marketing');
let finance = new Department(Math.floor(Math.random() * 10000), 'Finance');
let departments = [management, marketing, finance];

//roles
let manager = new Role(Math.floor(Math.random() * 10000), 'Manager', 75000.00, departments[0].id);
let engineer = new Role(Math.floor(Math.random() * 10000), 'Engineer', 75000.00, departments[1].id);
let coder = new Role(Math.floor(Math.random() * 10000), 'Coder', 420069.69, departments[1].id);
let intern = new Role(Math.floor(Math.random() * 10000), 'Intern', 75000.00, departments[2].id);
let architect = new Role(Math.floor(Math.random() * 10000), 'Architect', 75000.00, departments[2].id);
let roles = [manager, engineer, coder, intern, architect];

//Managers
let managerId = Math.floor(Math.random() * 10000);
let Sarehon = new Employee(managerId, 'Sarehon', 'Taylor', roles[0].id, null);
let Tyler = new Employee(Math.floor(Math.random() * 10000), 'Tyler', 'Smyth', roles[0].id, managerId);
let Bob = new Employee(Math.floor(Math.random() * 10000), 'Bob', 'Johnson', roles[0].id, managerId);
let James = new Employee(Math.floor(Math.random() * 10000), 'James', 'Rager;', roles[0].id, managerId);