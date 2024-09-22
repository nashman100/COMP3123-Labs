var http = require("http");
const { employees } = require("./Employee");
//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.statusCode = 405; 
        return res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html;charset=utf-8');
            return res.end('<h1>Welcome to Lab Exercise 03</h1>')
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.statusCode = 200; 
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            return res.end(JSON.stringify(employees))
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.statusCode = 200; 
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            
            let employeeNames = [];
            
            for(const employee of employees){
                employeeNames.push(`${employee.firstName} ${employee.lastName}`);
            }

            employeeNames.sort();

            return res.end(JSON.stringify(employeeNames));
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            res.statusCode = 200; 
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            
            const employeeSalary = employees.reduce((sum, employee) => sum + employee.Salary, 0);

            return res.end(JSON.stringify({total_salary: employeeSalary}));
        }
        
        res.statusCode = 404; 
        res.setHeader('Content-Type', 'application/json;charset=utf-8');
        return res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
