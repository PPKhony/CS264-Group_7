package cs.tu.cs264.controller;
import cs.tu.cs264.model.Attach;
import cs.tu.cs264.repository.JdbcAttachRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping(value = {"Attach"})
public class AttachController {
    @Autowired
    private JdbcAttachRepository userDao;

    @PostMapping
    public void addAttach(@RequestBody Attach attach) {
        userDao.saveAttach(attach);
    }

    @GetMapping
    public List<Attach> getAllAttachs() {
        return userDao.getAllAttachs();
    }
}
