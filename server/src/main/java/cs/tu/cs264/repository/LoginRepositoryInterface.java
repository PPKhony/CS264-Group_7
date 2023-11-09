package cs.tu.cs264.repository;

import cs.tu.cs264.model.Loginuser;

public interface LoginRepositoryInterface {
    public void createLoginLog(Loginuser userLogin);
    public void queryLoginLogByemail (String email);
}
