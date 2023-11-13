package cs.tu.cs264.model;

public class Request {

    public String getStudentID() {
        return studentID;
    }

    public void setStudentID(String studentID) {
        this.studentID = studentID;
    }

    public String getAdd_drop() {
        return add_drop;
    }

    public void setAdd_drop(String add_drop) {
        this.add_drop = add_drop;
    }

    public String getSubjectID() {
        return subjectID;
    }

    public void setSubjectID(String subjectID) {
        this.subjectID = subjectID;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public String getProfessor_fullname() {
        return professor_fullname;
    }

    public void setProfessor_fullname(String professor_fullname) {
        this.professor_fullname = professor_fullname;
    }

    public String getCause() {
        return cause;
    }

    public void setCause(String cause) {
        this.cause = cause;
    }

    public String getRequestID() {
        return requestID;
    }

    public void setRequestID(String requestID) {
        this.requestID = requestID;
    }

    private String studentID;
    private String add_drop;
    private String subjectID;
    private String subjectName;
    private String section;
    private String professor_fullname;
    private String cause;
    private String requestID;
}
