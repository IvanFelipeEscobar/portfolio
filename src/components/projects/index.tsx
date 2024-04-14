import ProjectsHeader from "./header"
import ProjectCarousel from "./projectCarousel"
import ProjectParallex from "./projectParallex"

const Projects = () => {
  return (
   
  <div id="projects" >
    <div className="relative h-[100vh]">
    <ProjectParallex/>
    <ProjectsHeader/>
</div>

<ProjectCarousel/></div>
   
  )
}

export default Projects