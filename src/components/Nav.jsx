import React from 'react';
import { Link } from 'gatsby'

const  navItems = [
    {
        caption : 'Inicio',
        href: '/'
    }
    ,
    
    {
        caption: 'Productos',
        href:'/products'
    },

    {
        caption: 'Acerca de Nosotros',
        href:'/About'
    }

]
export default (props) => {
    return (
             <header className='bg-blue-900 text-blue-100 shadow-md'>
                  <nav>
                      <ul className='flex'>
                          {
                           navItems.map((item , index)=>(
                            <li key={index}>
                              <Link className="hover:bg-blue-700 px-6 inline-block py-4 " to={item.href}>{ item.caption }
                            </Link>
                           </li>
                           ))
                          }
                      </ul>
                  </nav>
             </header>)}

        