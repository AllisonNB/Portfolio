import "./Projects.css";
import ProjectCard from "./ProjectCard";
import PuzzleSwap from "/assets/PuzzleSwap.jpg";
import TrendyThreads from "/assets/TrendyThreads.jpg";
import TentsnTrails from "/assets/Tents-Trails.jpg";
import MuseumOfCandy from "/assets/MuseumOfCandy.jpg";
import TvTuneTrivia from "/assets/TvTuneTrivia.jpg";

export default function Projects() {
  return (
    <div className="grid">
      <div className="project1">
        <ProjectCard
          title="Tents & Trails"
          image={TentsnTrails}
          description="A full-stack review site that allows users to add reviews of different campgrounds."
          github="https://github.com/AllisonNB/Tents-Trails/tree/main"
          live="https://tentsandtrails.netlify.app/"
        ></ProjectCard>
      </div>
      <div className="project2">
        <ProjectCard
          title="Trendy Threads"
          image={TrendyThreads}
          description={`A fabric store where users can filter and select fabrics to add to their cart`}
          github="https://github.com/AllisonNB/FabricStore"
          live="https://trendythreadz.netlify.app/"
        ></ProjectCard>
      </div>
      <div className="project3">
        <ProjectCard
          title="PuzzleSwap"
          image={PuzzleSwap}
          description="Using Pragmatic DnD, users drag pieces to assemble the correct image."
          github="https://github.com/AllisonNB/PuzzleSwap"
          live="https://puzzleswap.netlify.app"
        ></ProjectCard>
      </div>
      <div>
        <ProjectCard
          title="Tv Tune Trivia"
          image={TvTuneTrivia}
          description="A trivia game where users guess the TV show from the theme song."
          github="https://github.com/AllisonNB/TvTuneTrivia"
          live="https://tvtunetrivia.netlify.app/"
        ></ProjectCard>
      </div>
      <div>
        <ProjectCard
          title="Museum of Candy"
          image={MuseumOfCandy}
          description="My first website with responsive design with HTML & CSS. This is where I started!"
          github="https://github.com/AllisonNB/MuseumOfCandy"
          live="https://museofcandy.netlify.app/"
        ></ProjectCard>
      </div>
    </div>
  );
}
