//package cs.tu.cs264.repository;
//
//import java.util.List;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.jdbc.core.BeanPropertyRowMapper;
//import org.springframework.jdbc.core.JdbcTemplate;
//import org.springframework.stereotype.Repository;
//@Repository
//public class AttachmentRepository {
//    @Autowired
//    private JdbcTemplate jdbcTemplate;
//
//    public void save(DB_Attachment DBAttachment) {
//        String sql = "INSERT INTO FileData (FileName)"
//                    + "VALUES (?)";
//        jdbcTemplate.update(sql, DBAttachment.getFile());
//    }
//
//    public List<DB_Attachment> getAllUsers() {
//        String sql = "SELECT * FROM FileData";
//        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(DB_Attachment.class));
//    }
//}
