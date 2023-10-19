import { Client } from "../../types/types";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../../mutations/clientMutation";
import { GET_CLIENTS } from "../../queries/clientQueries";
import { GET_PROJECTS } from "../../queries/projectQueries";

interface ClientRowProps {
  client: Client;
}

// interface GetClientsData {
//   clients: Client[];
// }

export const ClientRow = ({ client }: ClientRowProps): JSX.Element => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // 2. option to rerender data
    // update(cache, { data: { deleteClient } }) {
    //   const data = cache.readQuery<GetClientsData | null>({
    //     query: GET_CLIENTS,
    //   });

    //   if (data) {
    //     const { clients } = data;
    //     cache.writeQuery({
    //       query: GET_CLIENTS,
    //       data: {
    //         clients: clients.filter(
    //           (client: Client) => client.id !== deleteClient.id
    //         ),
    //       },
    //     });
    //   }
    // },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });

  const handleClickOnButton = (): void => {
    deleteClient({
      variables: { id: client.id },
      // 1. option to rerender data
      // refetchQueries: [{ query: GET_CLIENTS }],
    });
  };

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={handleClickOnButton}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};
