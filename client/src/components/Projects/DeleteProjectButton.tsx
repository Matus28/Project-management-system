import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { DELETE_PROJECT } from "../../mutations/projectMutation";
import { GET_PROJECTS } from "../../queries/projectQueries";
import { useMutation } from "@apollo/client";

interface DeleteProjectButtonProps {
  projectId: string;
}

export const DeleteProjectButton = ({
  projectId,
}: DeleteProjectButtonProps): JSX.Element => {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: (): void => navigate("/"),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={() => deleteProject()}>
        <FaTrash className="icon" /> Delete Project
      </button>
    </div>
  );
};
