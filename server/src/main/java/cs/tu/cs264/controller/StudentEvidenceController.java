package cs.tu.cs264.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

@Repository
@CrossOrigin
@RequestMapping("/api/teacher")
public class StudentEvidenceController {
    @PostMapping("/requestevidence")
    public ResponseEntity<String> queryStudentByTeacherId(@RequestBody String teacher) {

        return null;
    }
}
