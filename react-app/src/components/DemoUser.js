import { useDispatch } from "react-redux"
import { login } from "../store/session"
export default function DemoUser() {
    const dispatch = useDispatch()
    const loginDemoUser = (e) => {
        e.preventDefault()
        let demoUserEmail = 'demo@aa.io'
        let demoUserPassword = 'password'

        return dispatch(login(demoUserEmail, demoUserPassword))
    }
    return (
        <>
            <button className="login-form-buttom" onClick={loginDemoUser}>Demo User</button>
        </>
    )
}
