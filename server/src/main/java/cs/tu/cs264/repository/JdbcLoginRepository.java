package cs.tu.cs264.repository;

import cs.tu.cs264.model.DB_Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcLoginRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public void createLoginLog(DB_Login userLogin) {
        String sql = "INSERT INTO Login (studentId, time, type, status) " +
                "VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql , userLogin.getStudentId(), userLogin.getTime(), userLogin.getType(), userLogin.getStatus());
    }
}
