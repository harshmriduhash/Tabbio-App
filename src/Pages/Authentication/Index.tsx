import EmailVerification from "./emailVerification";
import ResetPassword from "./resetPassword";
import ResetPasswordForm from "./resetPasswordForm";
import Signin from "./Signin";
import Signup from "./Signup";

function Index() {}



Index.Signin = Signin;
Index.Signup = Signup;
Index.ResetPassword = ResetPassword;
Index.ResetPasswordForm = ResetPasswordForm;
Index.EmailVerification = EmailVerification;



export default Index;