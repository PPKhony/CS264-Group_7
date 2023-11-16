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

- FileAttachmentDetailController = The controller is responsible for managing file attachment connections through a RESTful API using the Spring Framework. It utilizes the JdbcAttachmentRepository for database interactions. 

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

- Student controller =  RESTful API for managing student requests and approvals, interacting with a database through the JdbcStudentRepository. The endpoints allow creating requests, querying requests by instructor, querying student data by UUID, and updating request status.

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

## Comment code (Client-frontend)
- vite.svg - create a visual element using SVG syntax.

Component
	StudentEvidence
- StudentEvidenceCard.jsx - define a React functional component called StudentEvidenceCard. This component represents a card displaying information about a student's evidence, such as their name, ID, status, and date. The component is designed to be used in a larger React application.
- StudentEvidenceCard.css - provide consistent styling for rows of student evidence cards (eachrow), headers (header), and status indicators (status) within the React application.

  StudentForm
- RegisterSubjectForm.jsx - create a React component called RegisterSubjectForm that allows users to dynamically register or remove subjects for a course.
- ResignForm.jsx
- StudentForm.jsx - represents a form for collecting student information and handling course registration-related data. The form is divided into sections, including basic student details, details about residence, and information related to course registration, such as subjects to register and subjects to withdraw.
- WithdrawSubjectForm.jsx - designed to handle the withdrawal of subjects within the context of a larger React application. Users can add or remove withdrawal subjects, and the form dynamically updates based on user interactions.

Context
- AuthContext.jsx - create an authentication context in a React application. The AuthProvider component acts as the provider for this context, managing the authentication state (auth) and providing a function (setAuth) to update that state. Other components within the application can access and update authentication-related information by using this context.
- CourseContext.jsx  - create a React context (CourseContext) and a provider (CourseProvider) to manage the state related to student information, registered courses, and withdrawn courses. The handleData function ensures that the total state is kept up-to-date by combining the individual states. The handleApipost function allows for making API requests with the combined data.

Hooks
- useAuth.jsx - simplifies the process of accessing authentication-related information and functions by encapsulating the use of useContext(AuthContext). It provides a convenient and reusable way for components to interact with the authentication context in a React application.


pages
- LoginPage.css - styling elements with the classes .LoginCard and .LoginButton.
- Loginpage.jsx - create a user-friendly login page with form validation, error handling, and integration with a backend API for authentication.
- StudentEvidence.css - style a container with the class .mainCard to create a visually appealing and responsive card-like layout.
- StudentEvidencePage.jsx - create a React page (StudentEvidencePage) that displays a list of student evidence requests in a styled container.
- StudentFormPage.jsx - create a React page (StudentFormPage) that displays a student form within a Container. The CourseProvider component is used to manage context or state related to courses, and this context is provided to the StudentForm component.

utils
- requireAuth.jsx - the RequireAuth component serves as a mechanism to control access to the StudentEvidencePage based on the authentication status. If authenticated, it renders the page; otherwise, it redirects the user to the login page while preserving the original location for redirection after login.

Others
- App.css -
- App.jsx - sets up a basic routing structure for a React application. It defines public and protected routes, ensuring that certain pages are only accessible when the user is authenticated (using the RequireAuth component). The protected route renders the StudentEvidencePage, and there is a commented-out route for a potential form-related page.
- Index.css - sets a consistent and visually appealing style for various elements in the web application. It incorporates font styles, color schemes, and responsive design practices, including adjustments for light and dark color schemes and preferences.
- Main.jsx - initializes a React application, sets up routing, includes styles, and provides authentication context using a combination of React, React Router, Bootstrap, and a custom authentication context provider.
