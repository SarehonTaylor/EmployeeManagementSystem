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
let sarehon = new Employee(managerId, 'Sarehon', 'Taylor', roles[0].id, null);
let tyler = new Employee(Math.floor(Math.random() * 10000), 'Tyler', 'Smyth', roles[0].id, managerId);
let bob = new Employee(Math.floor(Math.random() * 10000), 'Bob', 'Johnson', roles[0].id, managerId);
let james = new Employee(Math.floor(Math.random() * 10000), 'James', 'Rager;', roles[0].id, managerId);

//Employees
let rudolph = new Employee(Math.floor(Math.random() * 10000), 'Rudolph', 'Olsen', roles[1].id, dalton.id);
let bessie = new Employee(Math.floor(Math.random() * 10000), 'Bessie', 'Morton', roles[1].id, dalton.id);
let jeanne = new Employee(Math.floor(Math.random() * 10000), 'Jeanne', 'powell', roles[2].id, james.id);
let annette = new Employee(Math.floor(Math.random() * 10000), 'Annette', 'Mitchell', roles[2].id, james.id);
let benjamin = new Employee(Math.floor(Math.random() * 10000), 'Benjamin', 'Hernandez', roles[3].id, kyle.id);
let sophie = new Employee(Math.floor(Math.random() * 10000), 'Sophie', 'Medina', roles[3].id, kyle.id);
let diana = new Employee(Math.floor(Math.random() * 10000), 'Diana', 'Clayton', roles[4].id, woody.id);
let willard = new Employee(Math.floor(Math.random() * 10000), 'Willard', 'Sutton', roles[4].id, woody.id);
let employees = [sarehon, tyler, bob, james, rudolph, bessie, jeanne, annette, benjamin, sophie, diana, willard,];

departments.forEach(i => {
    connection.query(`insert into department (id, name) values (${i.id}, '${i.name}')`, function (error, results, fields) {
      if (error) throw error;
    });
  })
  
  roles.forEach(i => {
    connection.query(`insert into role (id, title, salary, department_id) values (${i.id}, '${i.title}', ${i.salary}, ${i.department_id})`, function (error, results, fields) {
      if (error) throw error;
    });
  })
  
  employees.forEach(i => {
    connection.query(`insert into employee (id, first_name, last_name, role_id, manager_id) values (${i.id}, '${i.first_name}', '${i.last_name}', ${i.role_id}, ${i.manager_id})`, function (error, results, fields) {
      if (error) throw error;
    });
  })
  const stringValidator = async (input) => {
    const nameValid = /^[A-Za-z]+$/.test(input);
    if (!nameValid) {
      return 'Input must only contain letters';
    }
    return true;
  };
  const numberValidator = async (input) => {
    const idValid = /^[0-9]+$/.test(input);
    if (!idValid) {
      return 'Input must only contain numbers';
    }
    return true;
  };
  
  //Prompts
  function starterPrompt() {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'start',
        message: 'What would you like to do?',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'View All Employees By Department',
        'View All Employees By Manager', 'Add Department', 'Add Role', 'Add Employee', 'Remove Department',
        'Remove Role', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager',
        'View a Department\'s Utilized Budget', 'Exit'],
      },
    ])
    .then(answers => {
      switch(answers.start) {
        case 'View All Departments':
          viewAllDept()
        break;
  
        case 'View All Roles':
          viewAllRoles()
        break;
  
        case 'View All Employees':
          viewAll()
        break;
  
        case 'View All Employees By Department':
          viewAllByDept()
        break;
  
        case 'View All Employees By Manager':
          viewAllByManager()
        break;
  
        case 'Add Department':
          addDept()
        break;
  
        case 'Add Role':
          addRole()
        break;
  
        case 'Add Employee':
          addEmployee()
        break;
  
        case 'Remove Department':
          removeDept()
        break;
  
        case 'Remove Role':
          removeRole()
        break;
  
        case 'Remove Employee':
          removeEmployee()
        break;
  
        case 'Update Employee Role':
          updateRole()
        break;
  
        case 'Update Employee Manager':
          updateManager()
        break;
  
        case 'View a Department\'s Utilized Budget':
          viewBudget()
        break;
  
        default:
          connection.end();
        break;
      }
    })
  }
  
  //View all departments
  function viewAllDept() {
    connection.query('select * from department', function (error, results, fields) {
      if (error) throw error;
      console.table('Departments:', results);
    });
    return inquirer.prompt([
      {
        type: 'list',
        name: 'return',
        message: 'Hit enter to return home',
        choices: [''],
      },
    ])
    .then(answers => {
      starterPrompt();
    })
  }