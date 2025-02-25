import logo from "../../assets/Anchor_academy.png"

export default function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div class="container">
                        <a class="navbar-brand" href="#">
                            <img src={logo} alt="Bootstrap" width="75px" height="75px"/>
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/training" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Training 
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Elite Private training </a></li>
                                <li><a className="dropdown-item" href="#">Group Training</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/coach" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About Us 
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">AA Philosophy </a></li>
                                <li><a className="dropdown-item" href="#">Team</a></li>
                                <li><a className="dropdown-item" href="#">Coaches </a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Programs 
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Clinics </a></li>
                                <li><a className="dropdown-item" href="#">Camps</a></li>
                                <li><a className="dropdown-item" href="#">Outreach</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/training">Contact</a>
                        </li>

                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
} 

