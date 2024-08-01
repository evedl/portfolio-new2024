import { faAndroid, faAppStoreIos, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({ imgURL, title, description, gitUrl, previewUrl, playstore, appstore }) => {
    return (
        <div>
            <div
                className='h-52 md:h-72 rounded-t-xl relative group'
                style={{
                    background: `url(${imgURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                    <Link
                        href={gitUrl}
                        target='_blank' rel='noopener noreferrer'
                        className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
                    >
                        <FontAwesomeIcon
                            icon={faGithubAlt}
                            color={'#ffff'}
                            className='text-3xl text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white'
                        />
                    </Link>
                    {previewUrl && (
                        <Link
                            href={previewUrl}
                            target='_blank' rel='noopener noreferrer'
                            className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
                        >
                            <FontAwesomeIcon
                                icon={faGlobe}
                                color={'#ffff'}
                                className='text-3xl text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white'
                            />
                        </Link>
                    )}
                    {playstore && (
                        <Link
                            href={playstore}
                            target='_blank' rel='noopener noreferrer'
                            className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
                        >
                            <FontAwesomeIcon
                                icon={faAndroid}
                                color={'#ffff'}
                                className='text-3xl text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white'
                            />
                        </Link>
                    )}
                    {appstore && (
                        <Link
                            href={appstore}
                            target='_blank' rel='noopener noreferrer'
                            className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
                        >
                            <FontAwesomeIcon
                                icon={faAppStoreIos}
                                color={'#ffff'}
                                className='text-3xl text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white'
                            />
                        </Link>
                    )}
                </div>
            </div>
            <div className='text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4'>
                <h5 className='text-xl font-semibold mb-2'>
                    {title}
                </h5>
                <p className='text-[#ADB7BE]'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard
