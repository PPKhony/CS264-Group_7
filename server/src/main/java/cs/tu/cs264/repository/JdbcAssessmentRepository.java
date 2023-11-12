package cs.tu.cs264.repository;
import cs.tu.cs264.model.Assessment;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcAssessmentRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void saveAssessment(Assessment assessment){
        String sql = "INSERT INTO Assessment (type, requestID, form_status)" +
                     "VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, assessment.getType(), assessment.getRequestID(), assessment.isFormStatus());
    }
    
    public List<Assessment> gettAllAssessments() {
        String sql = "SELECT * FROM FileDATA";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Assessment.class));
    }
}

