
const Nav = () => {
   
    const links = ['About', 'Contact', 'Projects']
  return (
    <ul id="navigation-links" className="flex justify-end gap-3">
       {
links.map( link => <li key={link} className="p-2 border bg-blue-900 shadow-md shadow-black text-right rounded-md font-Honk text-xl hover:bg-slate-600">{link}</li>)
       }
    </ul>
  )
}

export default Nav