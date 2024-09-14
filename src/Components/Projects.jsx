import './Projects.css';
import ProjectCard from "./ProjectCard";
import PuzzleSwap from '../../public/assets/PuzzleSwap.jpg';
import TvTuneTrivia from '../../public/assets/TvTuneTrivia.jpg';
import TentsnTrails from '../../public/assets/Tents-Trails.jpg'


export default function Projects() {
    return (
        <div className='grid'>
            <div className='project1'>
                <ProjectCard
                    title='Campground'
                    image={TentsnTrails}
                    description='Not live yet! A review site that allows users to add reviews of different campgrounds.'
                    github='https://github.com/AllisonNB/Tents-Trails/tree/main'
                    live='https://tentsandtrails.netlify.app/'
                ></ProjectCard>
            </div>
            <div className='project2'>
                <ProjectCard
                    title='TV Tune Trivia'
                    image={TvTuneTrivia}
                    description={`Using Spotify's API, users guess shows based on the theme song.`}
                    github='https://github.com/AllisonNB/TvTuneTrivia'
                    live='https://tvtunetrivia.netlify.app'
                ></ProjectCard>
            </div>
            <div className='project3'>
                <ProjectCard
                    title='PuzzleSwap'
                    image={PuzzleSwap}
                    description='Using Pragmatic DnD, users drag pieces to assemble the correct image'
                    github='https://github.com/AllisonNB/PuzzleSwap'
                    live='https://puzzleswap.netlify.app'
                ></ProjectCard>
            </div>
        </div>
    )
}
