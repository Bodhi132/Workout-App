import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "../components/Styles.css"

const Navbar = () => {
  return (
    <nav className='nav'>
        <Link to='/' className='site-title'>Workout with bodhi</Link>
        <ul>
            <CustomLink to='/'>Home</CustomLink>
            <a href='#exercises'>Exercises</a>
        </ul>
    </nav>
  )
}

function CustomLink({to,children,...props})
{
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar