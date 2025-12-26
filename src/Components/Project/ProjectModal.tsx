import React, { useEffect } from 'react'
import ProjectIcon from './ProjectIcon'
import './ProjectModal.css'

type ProjectModalProps = {
    isOpen: boolean,
    onClose: () => void,
    image: string,
    name: string,
    icons: string[],
    description: string,
    github?: string,
    link?: string,
    linkIcon?: string
}

const ProjectModal: React.FC<ProjectModalProps> = (props: ProjectModalProps) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && props.isOpen) {
                props.onClose();
            }
        };
        if (props.isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [props.isOpen, props.onClose]);

    if (!props.isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            props.onClose();
        }
    };

    return (
        <div className="project-modal-backdrop" onClick={handleBackdropClick}>
            <div className="project-modal-content">
                <button className="project-modal-close" onClick={props.onClose}>
                    ×
                </button>
                <div className="project-modal-info">
                    <h3>{props.name}</h3>
                    <ProjectIcon icons = {props.icons} />
                    <p className="project-modal-description">{props.description}</p>
                    <div className="project-modal-links">
                        {props.github && (
                            <a href={props.github} target="_blank" rel="noopener noreferrer">
                                <i className="devicon-github-original" style={{ textDecoration: 'none' }}/>
                            </a>
                        )}
                        {props.link && props.linkIcon && (
                            <a href={props.link} target="_blank" rel="noopener noreferrer">
                                <i className={props.linkIcon}></i>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;

