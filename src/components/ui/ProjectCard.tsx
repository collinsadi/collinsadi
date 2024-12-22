import sampleImage from "../../assets/auraroom.png";
import { GoDash, GoArrowUpRight } from "react-icons/go";

type ProjectCartProps = {
  type: string;
  projectName: string;
  title: string;
  description: string;
  link: string;
  image: string;
};

export const ProjectCard = ({
  type,
  projectName,
  title,
  description,
  link,
  image,
}: ProjectCartProps) => {
  return (
    <div className="project-card  w-full md:h-[580px] border my-5 flex md:flex-row flex-col-reverse items-center justify-between">
      <div className="md:w-[50%] p-5">
        <div className="flex items-center text-xl">
          <h3>{projectName}</h3>

          <span>
            <GoDash />
          </span>

          <h3 className="capitalize">{type}</h3>
        </div>

        <div>
          <h4 className="text-3xl my-2 font-semibold">{title}</h4>

          <p className="mt-3">{description}</p>
        </div>

        <a
          href={link}
          target="_blank"
          className="mt-5 pb-2 border-b-2 text-xl border-b-black w-fit flex items-center"
        >
          <h3>View Project</h3>
          <span className="ml-3">
            <GoArrowUpRight />
          </span>
        </a>
      </div>

      <div className="md:w-[50%] h-full max-h-full">
        <img
          className="w-full max-w-full h-full max-h-full"
          src={image}
          alt={`${projectName} Thumbnail`}
        />
      </div>
    </div>
  );
};
