package cs.tu.cs264.model;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class DB_Student {
    private String date;

    private String email;
    private String prefix;
    private String name;
    private String studentID;
    private String department;
    private String studentYear;
    private String advisor;
    private String studentPhone;
    private String parentPhone;

    private String addressNumber;
    private String moo;
    private String tumbol;
    private String amphur;
    private String provience;

    private String topic;

    private DB_Request[] register;
    private DB_Request[] withdraw;
}
