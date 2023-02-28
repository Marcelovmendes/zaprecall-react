import logo from "../assets/logo.png"

const Layout =() =>{
 
    return(
        <>
        <div className="container-layout shadow">
        <div className="layout-logo">
            <img src={logo} alt=""/>
        </div>
        <div className="layout-name"> <h1>ZapRecall</h1></div>
        <div className="layout-text"><h2>Iniciar Recall!</h2></div>
        </div>
        </>
    )

}

export default Layout