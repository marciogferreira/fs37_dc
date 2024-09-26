function LoginPage() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4 mt-5">
                        <form action="">
                            <div className="mb-2">
                                <label htmlFor="">Login</label>
                                <input type="text" name="login" id="login" className="form-control" />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="">Senha</label>
                                <input type="text" name="senha" id="senha" className="form-control" />
                            </div>
                            <div className="mb-2">
                                <button className="btn btn-primary btn-sm">Acessar</button>
                            </div>
                            <a href="">Esqueceu sua senha?</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
