package cs.tu.cs264.repository;

import cs.tu.cs264.model.DB_Login;

public interface LoginRepositoryInterface {
    public void createLoginLog(DB_Login userLogin);
    public void queryLoginLogByemail (String email);
}
