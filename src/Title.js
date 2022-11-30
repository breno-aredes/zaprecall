import logo from './assets/img/logo.png'

export default function Title() {
    return (
        <div className="logo-container">
            <img src={logo} alt="" />
            <h1>zaprecall</h1>
        </div>
    )
}