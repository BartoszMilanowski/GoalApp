const Header = ({image, children}) => {

    return(
        <header>
            {/* <img src={image.src} alt={image.alt} /> */}
            <img {...image} />
            {children}
        </header>
    )

}

export default Header;