import { Spinner } from "../Spinner/Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../queries/projectQueries";
import { Project } from "../../types/types";
import { ProjectCard } from "./ProjectCard";

export const Projects = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>{`Error: ${error.message}`}</p>;
  }

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects</p>
      )}
    </>
  );
};
