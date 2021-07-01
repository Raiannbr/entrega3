import react from 'react'

export default function NavBar(){
    return(
        <div>
            <nav className="Menu">
                <label className="logo">Alianza</label>
                <ul className="Menu_items">
                    <li className="active"><a href="#">Menú</a></li>
                    <li><a href="#">Platos</a></li>
                    <li><a href="#">Congelados</a></li>
                    <li><a href="#">Packs</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <span className="btn_menu">
                    <i className="fa fa-bars"></i>
                </span>
            </nav>
        </div>    
        )
}