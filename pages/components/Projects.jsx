import React from 'react';
import ProjectItem from './ProjectItem'
import YouTubeClone from '../../public/assets/projects/YouTubeClone.png'
import IMDbClone from '../../public/assets/projects/IMDbClone.png'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I&apos;ve Built</h2>

                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='YouTube Clone'
                        backgroundImg={YouTubeClone}
                        projectUrl='/'
                        tech='MERN'
                    />
                    <ProjectItem
                        title='IMDb Clone'
                        backgroundImg={IMDbClone}
                        projectUrl='/'
                        tech='React JS'

                    />
                    <ProjectItem
                        title='Netflix App'
                        backgroundImg={IMDbClone}
                        projectUrl='/'
                        tech='React JS'

                    />
                    <ProjectItem
                        title='Twitch UI'
                        backgroundImg={IMDbClone}
                        projectUrl='/'
                        tech='Next JS'

                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;