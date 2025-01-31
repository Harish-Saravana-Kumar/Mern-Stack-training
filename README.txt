steps:
1-> first install the necessary packages (i.e.,)
    npm i --s express express-handlebars body-parser
    npm i mongoose
    npm i -g nodemon

2-> create a .env file in the directory for db configuration
    mongo_uri = mongodb://localhost:27017/emp

    # 127.0.0.1.27017
    port = 5000

3-> npm i dotenv -> configure the dependencies(i.e.,packages).

4-> server.js (create a file under directory)

5-> create a backend directory
    ->backend
        ->configs
            -->db.js
        ->controllers
            -->employeeController.js
        ->models
            -->Employee.js(kept all file name in this dir in FirstName capital letter(good practice)).
        ->routes
            -->employee.js

6-> define models in Employee.js under models.

7-> define crud function/op in employeeController under controllers.

8-> define routes (i.e., define routes for each function (ex insert,delete,update)) in employee.js under routes. 

9-> configure server.js use require imports.(ref server.js)