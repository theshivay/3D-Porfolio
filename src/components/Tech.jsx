/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"


const Tech = () => {
  return (
    <div className=" flex flex-row flex-wrap justify-center gap-10 ">
      {
        technologies.map((technology)=>(
          <div key={technologies.name} className="w-28 h-28">
            <BallCanvas icon={technologies.icon} />
          </div>
        ))
      }
    </div>
  )
}

const TechSection = SectionWrapper(Tech, "");
export default TechSection;