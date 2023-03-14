import React from 'react';
import ProjectItem from './ProjectItem'
import YouTubeClone from '../public/assets/projects/YouTubeClone.png'
import IMDbClone from '../public/assets/projects/IMDbClone.png'

const Projects = () => {
    return (
        <div id='projects' className='w-full dark:bg-gray-800'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5] dark:text-white'>Projects</p>
                <h2 className='py-4 dark:text-[#a6b595]'>What I&apos;ve Built</h2>

                <div className='grid md:grid-cols-3 gap-8'>
                    <ProjectItem
                        title='YouTube Clone'
                        backgroundImg={YouTubeClone}
                        projectUrl='/youtubeclone'
                        tech='MERN'
                    />
                    <ProjectItem
                        title='IMDb Clone'
                        backgroundImg={IMDbClone}
                        projectUrl='/imdbclone'
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