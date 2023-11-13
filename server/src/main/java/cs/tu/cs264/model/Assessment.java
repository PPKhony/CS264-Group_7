package cs.tu.cs264.model;

public class Assessment {
    public String getProfessor_fullname() {
        return professor_fullname;
    }

    public void setProfessor_fullname(String professor_fullname) {
        this.professor_fullname = professor_fullname;
    }

    public String getRequest_file() {
        return request_file;
    }

    public void setRequest_file(String request_file) {
        this.request_file = request_file;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getRequestID() {
        return requestID;
    }

    public void setRequestID(String requestID) {
        this.requestID = requestID;
    }

    public String getFormStatus() {
        return form_status;
    }

    public void setFormStatus(String form_status) {
        this.form_status = form_status;
    }

    private String professor_fullname;
    private String request_file;
    private String type;
    private String requestID;
    private String form_status;
}
