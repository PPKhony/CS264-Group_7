package cs.tu.cs264.controller;

import cs.tu.cs264.model.DB_Request;
import cs.tu.cs264.model.DB_Student;
import cs.tu.cs264.model.Web_Approve;
import cs.tu.cs264.repository.JdbcStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/student")
public class StudentController {
    @Autowired
    JdbcStudentRepository jdbcStudentRepository;

    @PostMapping("/createRequest")
    public String createRequest(@RequestBody DB_Student db_student) {
        return jdbcStudentRepository.saveRequest(db_student);
    }

    @GetMapping("/queryrequest")
    public List<DB_Request> queryRequest(@RequestParam String instructor) {
        return jdbcStudentRepository.queryRequestByInstructor(instructor);
    }

    @GetMapping("/querystudentbyuuid")
    public DB_Student querystudentbyuuid(@RequestParam String uuid) {
        return jdbcStudentRepository.queryStudentDataByUUID(uuid).get(0);
    }

    @PostMapping("/updatestatus")
    public boolean updateStatus (@RequestBody Web_Approve web_approve) {
        return jdbcStudentRepository.updateRequestByUUIDAndSubjectName(web_approve.getStatus(), web_approve.getUuid(),
                web_approve.getCoursecode(),web_approve.getDetail());
    }


}
