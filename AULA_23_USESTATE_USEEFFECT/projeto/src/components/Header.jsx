import logo from './../assets/logo-digital.png'
function Header() {
    return (
        <header>
            <div className="bar">
                <div>
                    <img width='100px' src={logo} alt="" />
                </div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <button className=''>Cadastre-se</button>
                </div>
                <div>Entrar</div>
                <div>Ico</div>
            </div>
            <nav>
                <ul>
                    <li></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;