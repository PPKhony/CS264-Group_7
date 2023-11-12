package cs.tu.cs264.controller;

import cs.tu.cs264.model.User;
import cs.tu.cs264.repository.JdbcUserRepository;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = {"FileData"})
public class UserController {
    @Autowired
    private JdbcUserRepository userDao;

    @PostMapping
    public void addUser(@RequestBody User user) {

        userDao.save(user);
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userDao.getAllUsers();
    }
}