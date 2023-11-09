package cs.tu.cs264.repository;

import cs.tu.cs264.model.Loginuser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class LoginRepository implements LoginRepositoryInterface{

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public void createLoginLog(Loginuser userLogin) {
        String sql = "";
        jdbcTemplate.update(sql, userLogin.getEmail(), userLogin.getName(), userLogin.getTime(), userLogin.getType(), userLogin.getStatus());
    }

    @Override
    public void queryLoginLogByemail(String email) {

    }
}
