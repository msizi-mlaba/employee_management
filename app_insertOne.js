const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Employee = require('./employee');

const uri = "mongodb://localhost:27017/employeeDB";

mongoose.connect(uri, { 'dbName':'employeeDB' });

// insertOne record into employee_new
let newEmployee = new Employee({
    emp_name: "John Doe",
    age: 37,
    location: "Illinois",
    email: "jdoe@somewhere.com"
});

newEmployee.save().then(function(){
    Employee.find().then((data)=>{
        console.log("\n\nDocuments in employee collection after insertOne");
        console.log(data);
        mongoose.connection.close();
    })
}).catch(function(error){
    console.log(error);
})