To-Do Application:
A simple To-Do application built using Spring Boot for the backend and React.js for the frontend.
This application allows users to create, read, update, and delete To-Do tasks. It uses a MySQL
database to store the tasks
Features:
- Add, update, delete, and toggle completion status of tasks.
- The frontend is built using React.js.
- The backend is built using Spring Boot with a MySQL database.
- REST API to manage tasks ('GET', 'POST', 'PUT', 'DELETE').
Technologies Used:
For front end: 
- React.js
- Axios
For back end:
- Java
- Spring Boot
- Spring Data JPA
- MySQL
------------------------------------------------------------------------------------
Setup Instructions:
Backend Setup (Spring Boot):
1. Clone the repository:
bash
--- git clone https://github.com/your-username/todo-app.git
2. Navigate to the backend folder:
bash
--- cd backend
3. Update your 'application.properties' file with your MySQL credentials:
properties
 spring.application.name=todo
 server.port=8083
 spring.datasource.url=jdbc:mysql://localhost:3306/todo?useSSL=false&serverTimezone=UTC
 spring.datasource.username=root
 spring.datasource.password=your-password
 spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
 spring.jpa.hibernate.ddl-auto=update
 spring.jpa.show-sql=true
 spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
4. Start the Spring Boot application:
bash
 ./mvnw spring-boot:run
 
 The backend will run on `http://localhost:8083`.
Frontend Setup (React.js)
1. Navigate to the frontend folder:
bash
 cd frontend

2. Install dependencies:
bash
 npm install

3. Start the React application:
 bash
 npm start
 
 The frontend will run on `http://localhost:5173`.
API Endpoints
1. Create Todo
- Endpoint: `POST /todos`
- Request Body:
json
 {
 "title": "Task title",
 "description": "Task description",
 "completed": false
 }

- Response:
json
 {
 "id": 1,
 "title": "Task title",
 "description": "Task description",
 "completed": false
 }

2. Get All Todos
- Endpoint: `GET /todos`
- Response:
json
 [
 {
 "id": 1,
 "title": "Task title",
 "description": "Task description",
 "completed": false
 }
 ]

3. Update Todo
-Endpoint: `PUT /todos/{id}`
- Request Body:
json
 {
 "title": "Updated task title",
 "description": "Updated task description",
 "completed": true
 }

- Response:
json
 {
 "id": 1,
 "title": "Updated task title",
 "description": "Updated task description",
 "completed": true
 }

 4. Delete Todo
- Endpoint: `DELETE /todos/{id}`
- Response: No content (204).
Error Handling and Troubleshooting
1. MySQL Connection Issues: Ensure that the database is running on your local machine and
that your `application.properties` file contains the correct database credentials.

2. CORS Issues: If you're running the frontend and backend on different ports, ensure that
CORS is configured properly on the backend. By default, the backend accepts requests from
`http://localhost:5173/`. If you're using a different frontend port, update the `@CrossOrigin`
annotation or configure global CORS.
Contributing
Feel free to fork the repository and submit pull requests. Contributions are welcome!
License
This project is licensed under the MIT License.


