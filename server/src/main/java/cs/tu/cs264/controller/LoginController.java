package cs.tu.cs264.controller;

import com.google.gson.Gson;
import cs.tu.cs264.externalSystem.PostReqToTUApi;
import cs.tu.cs264.model.Loginpage;
import cs.tu.cs264.model.Person;
import cs.tu.cs264.repository.LoginRepository;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/loginpage")
@CrossOrigin
public class LoginController {
    @Autowired
    LoginRepository loginRepository;

    @PostMapping("/login")
    @ResponseBody
    public ResponseEntity<String> createLogin(@RequestBody Loginpage loginPage) throws Exception {
        String data = PostReqToTUApi.postReqToTUApi(loginPage);
        Person person = new Gson().fromJson(data, Person.class);
        //Unhandle save log DB
        if (person.getStatus().equals(false)) {
            ResponseEntity<String> response = ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(data);
            return response;
        }
        ResponseEntity<String> response = ResponseEntity
                .status(HttpStatus.OK)
                .body(data);
        return response;
    }



}
