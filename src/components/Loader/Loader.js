import { Center } from "@chakra-ui/react";
import { SpinningOrbitLoader } from "react-loaders-kit";

function Loader() {
  const loaderProps = {
    loading: true,
    size: 275,
    duration: 2,
    colors: ["#99fffe", "#f42e00", "#042549"],
  };

  return (
    <div className="loader">
      <SpinningOrbitLoader {...loaderProps} />
      <Center
        className="loader-text"
        strings={["Loading..."]}
        typeSpeed={60}
        backSpeed={0}
      />
    </div>
  );
}

export default Loader;
