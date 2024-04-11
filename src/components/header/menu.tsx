import { GiHamburgerMenu } from "react-icons/gi";
const Menu = () => {
  return (
    <div>
    <ul className="hidden sm:flex" >
        <li ><a href="#about" className='btn btn-ghost btn-sm'>About me</a></li>
        <li><a href="#contact" className='btn btn-ghost btn-sm'>Contact me</a></li>
        <li><a href="#projects" className='btn btn-ghost btn-sm'>Projects</a></li>
    </ul>
    <div className="sm:hidden dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-sm"><GiHamburgerMenu /></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    
  <li ><a href="#about" className='btn btn-ghost btn-sm'>About me</a></li>
        <li><a href="#contact" className='btn btn-ghost btn-sm'>Contact me</a></li>
        <li><a href="#projects" className='btn btn-ghost btn-sm'>Projects</a></li>
  </ul>
</div>
</div>
  )
}

export default Menu