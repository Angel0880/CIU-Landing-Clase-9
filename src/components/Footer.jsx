import React from 'react';

const Footer = () => {

    //Acá va el codigo JS
    const fecha = new Date().getFullYear();

    return (
       
        <div className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className=" text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2022 <a href="https://flowbite.com" class="hover:underline"></a>. Todos los derechos reservados.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <img src='./facebook.png' className="mr-4 hover:underline md:mr-6 h-9 w-9 "/>
                </li>
                <li>
                    <img src='./instagram.png' className="mr-4 hover:underline md:mr-6 h-9 w-9"/>
                </li>
                <li>
                    <img src='./whatsapp.png' className="mr-4 hover:underline md:mr-6 h-9 w-9"/>
                </li>
            </ul>
        </div>

    );
}

export default Footer;