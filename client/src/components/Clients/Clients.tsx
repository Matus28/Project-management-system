import { useQuery } from "@apollo/client";
import { Client } from "../../types/types";
import { ClientRow } from "./ClientRow";
import { GET_CLIENTS } from "../../queries/clientQueries";
import { Spinner } from "../Spinner/Spinner";

export const Clients = (): JSX.Element => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>{`Error: ${error.message}`}</p>;
  }

  return (
    <>
      {data && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client: Client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
