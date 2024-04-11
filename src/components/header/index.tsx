import Logo from "./logo"
import Menu from "./menu"

const Header = () => {
  return (
  <header className="flex justify-center gap-4 sm:justify-between items-center my-1.5">
    <Logo/>
   <Menu/>
  </header>
  )
}

export default Header