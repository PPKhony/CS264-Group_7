//package cs.tu.cs264.controller;
//import java.util.List;
//import cs.tu.cs264.model.DB_Assessment;
//import cs.tu.cs264.repository.JdbcAssessmentRepository;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping(value = {"Assessment"})
//public class AssessmentController {
//    @Autowired
//    private JdbcAssessmentRepository userDao;
//
//    @PostMapping
//    public void addAssessment(@RequestBody DB_Assessment assessment) {
//
//        userDao.saveAssessment(assessment);
//    }
//
//    @GetMapping
//    public List<DB_Assessment> getAllAssessments() {
//        return userDao.gettAllAssessments();
//    }
//
//}
