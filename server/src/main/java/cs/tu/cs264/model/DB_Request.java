package cs.tu.cs264.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DB_Request {
    private String UUID;
    private String courseCode;
    private String courseName;
    private String credits;
    private String dayTime;
    private String instructor;
    private String section;

    private String type;
    private String status;
}
