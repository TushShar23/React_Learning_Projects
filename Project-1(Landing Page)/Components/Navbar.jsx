import '../src/App.css'

function Navbar(){
    return(
        <div className="Navbar">
            <img src="/images/nike-bgremove.png" alt="logo" style={{height:"8rem"}}/>

            <div className="links">
                <li><a href="">MENU</a></li>
                <li><a href="">LOCATION</a></li>
                <li><a href="">ABOUT</a></li>
                <li><a href="">CONTACT</a></li>
            </div>

            <button className="login">Login</button>
        </div>
    )
}

export default Navbar