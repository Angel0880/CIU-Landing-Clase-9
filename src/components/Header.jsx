import React from 'react';

const Header = () => {
    return (
        
        <div>
            <ul className="flex justify-center text-xl">
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="#">Inicio</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="#">Productos</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="#">Ubicacion</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="#">Contacto</a>
                </li>
            </ul>
        </div>

        );
}

export default Header;