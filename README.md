# CS264-Group_7
## Commit v0.1.0
- Complete implement Login backend.
- Complete implement Login frontend.
- Complete handling Login failed in part backend.
- Uncomplete handling Login failed in part UI.

## Commit v0.2.0
x Complete handling Loginfailed in part UI.
- Complete implement studentEvidencePages.
- Complete implement studentEvidencePages/MoreInfo.

## Commit v0.3.0
- Complete login pages has default value by login authentication

## Commit v0.4.0
- Complete implement studentEvidencePages + Details page 
- Complete implement studentEvidencePages backend + details

## Comment code (server-backend)       
    
1.Controller
- AssessmentController = controller provides endpoints to add an assessment via HTTP POST and retrieve a list of all assessments via HTTP GET The actual implementation details of saving and retrieving assessments are delegated to the JdbcAssessmentRepository

- AttachController = The controller facilitates adding Attach data through HTTP POST and retrieving all Attach items through HTTP GET It utilizes a repository (JdbcAttachRepository) that has been injected to handle database connectivity.
  
- FileAttachmentController = The controller represents a Spring Framework Controller class used for handling the uploading of PDF files through HTTP POST requests.   
Function    
1.Creates the destination directory if it doesn't exist.   
2.Saves the uploaded PDF file to the destination directory.   
3.Responds with a success message, including the file path.   
This controller enables the uploading of PDF files and saves them to a specified folder.

- LoginController = This controller class is used to manage requests related to the login page in your Spring application. It consists of several parts that handle sending requests to the TU API and logging login-related data into the database.                  
Function                     
1.Sending a POST request to the TU API with data from loginPage.         
2.Converting response data to a Person object using Gson.          
3.Creating a DB_Login object and setting relevant values.     
4.Checking the status in the response and setting appropriate values in DB_Login.  
5.Creating a ResponseEntity based on the status.  
6.Storing login log data in the database.  
7.Returning the appropriate response to client.
this controller effectively manages the login process by sending requests to the TU API, handling the responses, and persisting login log data in the database.

 -  RequestController = Controller class (RequestController) that handles HTTP requests related to a resource called Request.
controller provides two main function
1.Adding a Request
Handles HTTP POST requests to the "Request" path by saving a new Request object using the saveRequest method from the injected JdbcRequestRepository.
2.Getting All Requests
Handles HTTP GET requests to the "Request" path by retrieving a list of all requests using the getAllRequests method from the injected JdbcRequestRepository and returning the list.

- Student class = 

- UserController = responsible for handling HTTP requests related to a resource named "FileData" in application.
this controller is responsible for 
1.Adding a User:
Handles HTTP POST requests to "FileData" by saving a new User object using the save method from the injected JdbcUserRepository.
2.Getting All Users:
Handles HTTP GET requests to "FileData" by retrieving a list of all users using the getAllUsers method from the injected JdbcUserRepository and returning the list.

2.External model
- Class PostReqToTUApi = includes a static method postReqToTUApi. This class is used to send a POST request to the TU Authentication API  for verifying user credentials. this class provides a method for sending a POST request to the TU Authentication API with provided username and password credentials and retrieves the response body. The result can be used for further processing or validation in the application.
  
3.Model
- in the model, there exists a Java subclass that functions as a model. This class serves as a template for generating objects and offers methods for retrieving and altering the attributes of these objects.

4.Repository
- The entirety of the Java code in this class is dedicated to handling and overseeing data interactions with the database in a Spring application associated with assessments. The code employs JDBC Template and SQL queries for this purpose.
