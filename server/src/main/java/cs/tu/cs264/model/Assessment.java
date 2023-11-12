package cs.tu.cs264.model;

public class Assessment {
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

    public boolean isFormStatus() {
        return form_status;
    }

    public void setFormStatus(boolean form_status) {
        this.form_status = form_status;
    }

    private String type;
    private String requestID;
    private boolean form_status;
}
