package cs.tu.cs264.controller;
import java.util.List;
import cs.tu.cs264.model.Request;
import cs.tu.cs264.repository.JdbcRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = {"Request"})
public class RequestController {
    @Autowired
    private JdbcRequestRepository userDao;

    @PostMapping
    public void addRequest(@RequestBody Request request) {

        userDao.saveRequest(request);
    }

    @GetMapping
    public List<Request> getAllRequests() {
        return userDao.getAllRequests();
    } 
}
