import React from 'react';

const Servicio = ({servicio}) => {
    return (
        
        <div>
            <table class="border-separate border border-slate-400 m-3">
                <thead>
                    <tr>
                        <th class="border border-slate-300 px-2 py-2">ID_producto</th>
                        <th class="border border-slate-300 px-2 py-2">Producto</th>
                        <th class="border border-slate-300 px-2 py-2">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-slate-300 px-2 py-2">{servicio.id}</td>
                        <td class="border border-slate-300 px-2 py-2">{servicio.nombre}</td>
                        <td class="border border-slate-300 px-2 py-2">{servicio.valor}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        );
}

export default Servicio;