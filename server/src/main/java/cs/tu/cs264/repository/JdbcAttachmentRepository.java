package cs.tu.cs264.repository;
import cs.tu.cs264.model.DB_Attachment;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcAttachmentRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void saveAttach(DB_Attachment DBAttachment) {
        String sql = "INSERT INTO Attach (studentID, requestID, request_file) " +
                "VALUES (?, ?, ?, ?)";
        jdbcTemplate.update(sql, DBAttachment.getStudentID(), DBAttachment.getRequestID());
    }

    public List<DB_Attachment> getAllAttachs(){
        String sql = "SELECT * FROM Attach";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(DB_Attachment.class));
    }
}

