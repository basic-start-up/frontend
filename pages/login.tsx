import type { NextPage } from 'next'

const Login: NextPage = () => {
    return (
        <div className="container-fluid vh-100">
            <div className="rounded d-flex justify-content-center">
                <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
                    <div className="text-center">
                        <h3 className="text-primary">Sign In</h3>
                    </div>
                    <form action="">
                        <div className="p-4">
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-primary"><i
                                    className="bi bi-person-plus-fill text-white"></i></span>
                                <input type="text" className="form-control" placeholder="Username" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-primary"><i
                                    className="bi bi-key-fill text-white"></i></span>
                                <input type="password" className="form-control" placeholder="password" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label">
                                    Remember Me
                                </label>
                            </div>
                            <button className="btn btn-primary text-center mt-2" type="submit">
                                Login
                            </button>
                            <p className="text-center mt-5">Don't have an account?
                                <span className="text-primary">Sign Up</span>
                            </p>
                            <p className="text-center text-primary">Forgot your password?</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
