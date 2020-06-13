import PrivateInfOfPerson from "./privateInfOfUser";
import ServicesWireframe from "./servicesWireframe";
const generalInfOfUser = () => {
  return (
    <>
      <div className="general-inf-wrapper">
        <PrivateInfOfPerson />
        <ServicesWireframe />
      </div>
    </>
  );
};
export default generalInfOfUser;
