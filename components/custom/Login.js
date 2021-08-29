import { useLogin, useNotify } from "react-admin";

/**
 * Login method
 *
 * @function
 * @returns {null} null
 */
const Login = () => {
    const login = useLogin();
    const notify = useNotify();

    login().catch(err => notify(err));

    return null;
};

export default Login;