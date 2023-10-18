import { AddClientModal } from "../components/Clients/AddClientModal";
import { Clients } from "../components/Clients/Clients";
import { Projects } from "../components/Projects/Projects";

const Home = (): JSX.Element => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
};

export default Home;
