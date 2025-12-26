import React from 'react'
import './ProjectIcon.css'

type ProjectIconProps = {
    icons: string[]
}

const ProjectIcon: React.FC<ProjectIconProps> = (props:ProjectIconProps) => {
  return (
    <div className='project-icons'>
        {
            props.icons.map((icon) => {
                return(
                    <i className={icon} />
                )
            })
        }
    </div>
  )
}

export default ProjectIcon;
