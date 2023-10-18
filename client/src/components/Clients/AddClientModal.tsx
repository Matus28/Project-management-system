import * as React from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../../mutations/clientMutation";
import { Client } from "../../types/types";
import { GET_CLIENTS } from "../../queries/clientQueries";

interface GetClientsData {
  clients: Client[];
}

export const AddClientModal = (): JSX.Element => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const data = cache.readQuery<GetClientsData | null>({
        query: GET_CLIENTS,
      });

      if (data) {
        const { clients } = data;
        cache.writeQuery({
          query: GET_CLIENTS,
          data: { clients: [...clients, addClient] },
        });
      }
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (name === "" || email === "" || phone === "") {
      return alert("Please fill in all fields!");
    }

    addClient({ variables: { name, email, phone } });

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#addClientModal"
      >
        <div className="d-flex align-items-center">
          <FaUser className="icon" />
          <div>Add Client</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="addClientModal"
        tabIndex={-1}
        aria-labelledby="addClientModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addClientModalLabel">
                Add Client
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
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
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(event: React.FormEvent<HTMLInputElement>) =>
                      setEmail(event.currentTarget.value)
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    className="form-control"
                    value={phone}
                    onChange={(event: React.FormEvent<HTMLInputElement>) =>
                      setPhone(event.currentTarget.value)
                    }
                  />
                </div>
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-secondary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
