package cs.tu.cs264.model;

public class Request {

    public String getStudentID() {
        return studentID;
    }

    public void setStudentID(String studentID) {
        this.studentID = studentID;
    }

    public boolean isAddLate() {
        return addLate;
    }

    public void setAddLate(boolean addLate) {
        this.addLate = addLate;
    }

    public boolean isDropW() {
        return dropW;
    }

    public void setDropW(boolean dropW) {
        this.dropW = dropW;
    }

    public boolean isCrossProgram() {
        return crossProgram;
    }

    public void setCrossProgram(boolean crossProgram) {
        this.crossProgram = crossProgram;
    }

    public boolean isResign() {
        return resign;
    }

    public void setResign(boolean resign) {
        this.resign = resign;
    }

    public String getEtc() {
        return etc;
    }

    public void setEtc(String etc) {
        this.etc = etc;
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(String semester) {
        this.semester = semester;
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

    public String getResignSemester() {
        return resignSemester;
    }

    public void setResignSemester(String resignSemester) {
        this.resignSemester = resignSemester;
    }

    public String getResignYear() {
        return resignYear;
    }

    public void setResignYear(String resignYear) {
        this.resignYear = resignYear;
    }

    public String getCause() {
        return cause;
    }

    public void setCause(String cause) {
        this.cause = cause;
    }

    private String studentID;
    private boolean  addLate;
    private boolean  dropW;
    private boolean  crossProgram;
    private boolean  resign;
    private String  etc;
    private String  semester;
    private String  subjectID;
    private String subjectName;
    private String  section;
    private String  resignSemester;
    private String  resignYear;
    private String  cause;
}
