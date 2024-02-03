interface NavProps {
    activePg: string;
    handlePg: (page: string) => void;
  }
const Nav: React.FC<NavProps> = ({activePg, handlePg}) => {
   
    const links = ['About', 'Contact', 'Projects']
  return (
    <ul id="navigation-links" className="flex justify-end gap-3">
       {
links.map( link => <li key={link} className={activePg === link 
    ? "p-2 border bg-slate-400 shadow-md shadow-black text-right rounded-md font-Honk text-xl hover:bg-slate-600 "
    : "p-2 border bg-blue-900 shadow-md shadow-black text-right rounded-md font-Honk text-xl hover:bg-slate-600 active:bg-slate-400"}
    ><button onClick={()=>handlePg(link)} >{link}</button></li>)
       }
    </ul>
  )
}

export default Nav