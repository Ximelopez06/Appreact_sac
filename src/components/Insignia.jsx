import React from 'react';
import './Styles/insignia.css'
import Logo from '../images/I.E.SantosAngelesCustodios.png'

class Insignia extends React.Component{
    render(){
       /*  const firstName='Ximena Carolina';
        const lastName='Lopez'
        const ocupation= 'Soy estudiante de angeles custodios'
        const usuarioioGit= 'Ximelopez06' */
        return(
            <div className='Insignia'>
                <div className='Insignia_header'>
                    <img src={Logo} alt='logo'/>
                </div>
                <div className='Insignia__section_name'>
                    <img className='Insignia__avatar' src={this.props.URLAvatar} alt='Foto de perfil'/>
                    <h1>{this.props.firstName} 
                    <br/> {this.props.lastName} </h1>
                </div>
                <div className='Insignia__section_info'>
                    <h3> {this.props.ocupacion}</h3>
                    <div>{this.props.twiter}</div>
                </div>
                <div className='Insignia__footer'>
                    Derechos reservados
                </div>
            </div>
        )
    }
}

export default Insignia;