
const Nav = () => {
   
    const links = ['About', 'Contact', 'Projects']
  return (
    <ul id="navigation-links" className="flex justify-end gap-3">
       {
links.map( link => <li key={link} className="p-2 border shadow-md shadow-black text-right rounded-md font-Honk text-xl">{link}</li>)
       }
    </ul>
  )
}

export default Nav