package cs.tu.cs264.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TU_Person {
    private Boolean status;
    private String message;
    private String type;
    private String username;
    private String tu_status;
    private String statusid;
    private String displayname_th;
    private String displayname_en;
    private String email;
    private String department;
    private String faculty;
}
