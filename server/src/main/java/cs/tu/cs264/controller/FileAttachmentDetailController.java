package cs.tu.cs264.controller;
import cs.tu.cs264.model.DB_Attachment;
import cs.tu.cs264.repository.JdbcAttachmentRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping(value = {"Attach"})
public class FileAttachmentDetailController {
    @Autowired
    private JdbcAttachmentRepository userDao;

    @PostMapping
    public void addAttach(@RequestBody DB_Attachment DBAttachment) {
        userDao.saveAttach(DBAttachment);
    }

    @GetMapping
    public List<DB_Attachment> getAllAttachs() {
        return userDao.getAllAttachs();
    }
}
