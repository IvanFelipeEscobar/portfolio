import Logo from "./logo"
import Menu from "./menu"

const Header = () => {
  return (
  <header className="flex justify-center sm:justify-between items-center">
    <Logo/>
   <Menu/>
  </header>
  )
}

export default Header