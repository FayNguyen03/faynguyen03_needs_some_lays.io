import React from 'react'
import './ExperienceIcon.css'

type ExperienceIconProps = {
    icons: string[]
}

const ExperienceIcon: React.FC<ExperienceIconProps> = (props:ExperienceIconProps) => {
  return (
    <div className='experience-icons'>
        {
            props.icons.map((icon: string) => {
                return(
                    <i className={icon} key={icon} />
                )
            })
        }
    </div>
  )
}

export default ExperienceIcon;
