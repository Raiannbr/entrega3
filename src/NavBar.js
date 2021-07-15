import react from 'react'
import CartW from './CartW'

export default function NavBar(){
    return(
        <div>
            <nav className="Menu">
                <label className="logo">Alianza</label>
                <ul className="Menu_items">
                    <li className="active"><a href='https://www.instagram.com/laalianzareverde'>Pagina de contacto</a></li>
                    <a>
                        <CartW></CartW>
                    </a>
                </ul>
                <span className="btn_menu">
                    <i className="fa fa-bars"></i>
                </span>
            </nav>
        </div>    
        )
}