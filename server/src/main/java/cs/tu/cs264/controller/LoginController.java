package cs.tu.cs264.controller;

import com.google.gson.Gson;
import com.google.gson.stream.MalformedJsonException;
import cs.tu.cs264.externalSystem.PostReqToTUApi;
import cs.tu.cs264.model.DB_Login;
import cs.tu.cs264.model.Employee_Person;
import cs.tu.cs264.model.Web_Loginpage;
import cs.tu.cs264.model.Student_Person;
import cs.tu.cs264.repository.JdbcLoginRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/loginpage")
@CrossOrigin
public class LoginController {
    @Autowired
    JdbcLoginRepository jdbcLoginRepository;

    @PostMapping("/login")
    @ResponseBody
    public ResponseEntity<String> createLogin(@RequestBody Web_Loginpage loginPage) throws Exception {
        DB_Login obj = new DB_Login();
        LocalDateTime time = LocalDateTime.now();
        ResponseEntity<String> response;

//        String data = PostReqToTUApi.postReqToTUApi(loginPage);

//        fake employee
        String data = "{\n" +
                "    \"status\": true,\n" +
                "    \"message\": \"Success\",\n" +
                "    \"type\": \"employee\",\n" +
                "    \"username\": \"usernametu\",\n" +
                "    \"displayname_th\": \"Songsakdi\",\n" +
                "    \"displayname_en\": \"Suphakarn  Pradujkanchana\",\n" +
                "    \"StatusWork\": \"1\",\n" +
                "    \"StatusEmp\": \"ปกติ\",\n" +
                "    \"email\": \"email@tu.ac.th\",\n" +
                "    \"department\": \"งานวิเคราะห์และพัฒนาระบบ\",\n" +
                "    \"organization\": \"สำนักงานศูนย์เทคโนโลยีสารสนเทศและการสื่อสาร\"\n" +
                "}";

        if (data.contains("employee")) {
            Employee_Person person = new Gson().fromJson(data, Employee_Person.class);
            obj.setStudentId(loginPage.getUsername());
            obj.setTime(time.toString());
            obj.setType(person.getType());

            if (person.getStatus().equals(false)) {
                obj.setStatus("false");
                response = ResponseEntity
                        .status(HttpStatus.CONFLICT)
                        .body(data);
            } else {
                obj.setStatus("true");
                response = ResponseEntity
                        .status(HttpStatus.OK)
                        .body(data);
            }

            jdbcLoginRepository.createLoginLog(obj);

        } else {
            Student_Person person = new Gson().fromJson(data, Student_Person.class);
            obj.setStudentId(loginPage.getUsername());
            obj.setTime(time.toString());
            obj.setType(person.getType());


            if (person.getStatus().equals(false)) {
                obj.setStatus("false");
                response = ResponseEntity
                        .status(HttpStatus.CONFLICT)
                        .body(data);


            } else {
                obj.setStatus("true");
                response = ResponseEntity
                        .status(HttpStatus.OK)
                        .body(data);
            }

            jdbcLoginRepository.createLoginLog(obj);
        }

        return response;
    }

}
