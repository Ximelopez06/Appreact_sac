import React from 'react';
import './Styles/navbar.css'
class Navbar extends React.Component{
    render(){
        return(
            <div className= 'Navbar'>
                <div className= 'container-fluid'>
                    <a className= 'Navbar_brand'>
                        <span className= 'font-weight-light'>
                            Santos Angeles Custodios
                        </span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;