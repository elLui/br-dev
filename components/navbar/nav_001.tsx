import React from 'react'

const Nav001 = () => {


    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <div>Nav001</div>
    )
}
export default Nav001
