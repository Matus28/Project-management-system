import * as React from "react";
import { useMutation } from "@apollo/client";
import { GET_PROJECT } from "../../queries/projectQueries";
import { Project } from "../../types/types";
import { UPDATE_PROJECT } from "../../mutations/projectMutation";

interface EditProjectFormProps {
  project: Project;
}

export const EditProjectForm = ({
  project,
}: EditProjectFormProps): JSX.Element => {
  const [name, setName] = React.useState(project.name);
  const [description, setDescription] = React.useState(project.description);
  const [status, setStatus] = React.useState("");

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!name || !description || !status) {
      return alert(" Please fill out all fields.");
    }

    updateProject({
      variables: { id: project.id, name, description, status },
    });
  };

  return (
    <div className="mt-5">
      <h3>Update Project Details</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(event: React.FormEvent<HTMLInputElement>) =>
              setName(event.currentTarget.value)
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            id="description"
            className="form-control"
            value={description}
            onChange={(event: React.FormEvent<HTMLTextAreaElement>) =>
              setDescription(event.currentTarget.value)
            }
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            id="status"
            className="form-select"
            value={status}
            onChange={(event: React.FormEvent<HTMLSelectElement>) =>
              setStatus(event.currentTarget.value)
            }
          >
            <option value="new">Not Started</option>
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
