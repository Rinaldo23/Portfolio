import React, { useState } from 'react';
import ProjectItem from './ProjectItem'
import YouTubeClone from "../public/assets/projects/YouTubeClone.png"

const Projects = () => {

    let projects = [
        {
            title: 'YouTube Clone',
            backgroundImg: "/../public/assets/projects/YouTubeClone.png",
            projectUrl: '/youtubeclone',
            tech: 'MERN'
        },
        {
            title: 'IMDb Clone',
            backgroundImg: "/../public/assets/projects/IMDbClone.png",
            projectUrl: '/imdbclone',
            tech: 'React'
        },
        {
            title: 'AirBnb Clone',
            backgroundImg: "/../public/assets/projects/AirBnbClone.png",
            projectUrl: '/airbnbclone',
            tech: 'MERN'
        },
        {
            title: 'Todo App',
            backgroundImg: "/../public/assets/projects/TodoApp.png",
            projectUrl: '/todo',
            tech: 'React'
        },
        {
            title: 'File Manager',
            backgroundImg: "/../public/assets/projects/FileManager.png",
            projectUrl: '/filemanager',
            tech: 'Node'
        },
    ]

    const [items, setItems] = useState(projects);

    const filterItem = (currItem) => {
        const updatedItems = projects.filter((currElem) => {
            return currElem.tech === currItem;
        });
        setItems(updatedItems);
        if (currItem == 'ALL') {
            setItems(projects)
        }
    }

    return (
        <div id='projects' className='w-full dark:bg-gray-800 py-10'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5] dark:text-white'>Projects</p>
                <h2 className='py-4 dark:text-[#a6b595]'>What I&apos;ve Built</h2>

                {/* <nav className="flex justify-center space-x-6 px-1 border border-black max-w-fit m-auto mb-4 rounded-3xl dark:bg-gray-500">
                    <a onClick={() => filterItem("ALL")} className="font-me px-2 py-2 cursor-pointer text-slate-700 rounded-2xl hover:bg-gray-300 hover:text-slate-900">ALL</a>
                    <a onClick={() => filterItem('Node')} className="font-me px-2 py-2 cursor-pointer text-slate-700 rounded-2xl hover:bg-gray-300 hover:text-slate-900">NODE</a>
                    <a onClick={() => filterItem("DOM")} className="font-me px-2 py-2 cursor-pointer text-slate-700 rounded-2xl hover:bg-gray-300 hover:text-slate-900">DOM</a>
                    <a onClick={() => filterItem("React")} className="font-me px-2 py-2 cursor-pointer text-slate-700 rounded-2xl hover:bg-gray-300 hover:text-slate-900">REACT</a>
                    <a onClick={() => filterItem("MERN")} className="font-me px-2 py-2 cursor-pointer text-slate-700 rounded-2xl hover:bg-gray-300 hover:text-slate-900">MERN</a>
                </nav> */}
                <div className='grid md:grid-cols-3 gap-8'>

                    {/* {
                        items.map((item, idx) => (
                            // console.log(item)
                            <ProjectItem
                                key={idx}
                                title={item.title}
                                backgroundImg={item.backgroundImg}
                                projectUrl={item.projectUrl}
                                tech={item.tech}
                            />

                        ))
                    } */}

                    <ProjectItem
                        title={projects[0].title}
                        backgroundImg={YouTubeClone}
                        projectUrl={projects[0].projectUrl}
                        tech={projects[0].tech}

                    />
                    {/* <ProjectItem
                        title={projects[1].title}
                        backgroundImg={projects[1].backgroundImg}
                        projectUrl={projects[1].projectUrl}
                        tech={projects[1].tech}

                    />
                    <ProjectItem
                        title={projects[2].title}
                        backgroundImg={projects[2].backgroundImg}
                        projectUrl={projects[2].projectUrl}
                        tech={projects[2].tech}

                    />
                    <ProjectItem
                        title={projects[3].title}
                        backgroundImg={projects[3].backgroundImg}
                        projectUrl={projects[3].projectUrl}
                        tech={projects[3].tech}

                    />
                    <ProjectItem
                        title={projects[4].title}
                        backgroundImg={projects[4].backgroundImg}
                        projectUrl={projects[4].projectUrl}
                        tech={projects[4].tech}

                    /> */}

                </div>
            </div>
        </div>
    );
};

export default Projects;