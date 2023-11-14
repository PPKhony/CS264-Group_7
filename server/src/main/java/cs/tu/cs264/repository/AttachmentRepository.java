package cs.tu.cs264.repository;
import cs.tu.cs264.model.User;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
@Repository
public class JdbcUserRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void save(User user) {
        String sql = "INSERT INTO FileData (FileName)"
                    + "VALUES (?)";
        jdbcTemplate.update(sql, user.getFile());
    }

    public List<User> getAllUsers() {
        String sql = "SELECT * FROM FileData";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(User.class));
    }
}
