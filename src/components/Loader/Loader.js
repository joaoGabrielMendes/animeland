import { Box, Center } from "@chakra-ui/react";
import { WaveLoader } from "react-loaders-kit";

function Loader() {
  const loaderProps = {
    loading: true,
    size: 275,
    duration: 2,
    colors: ["#99fffe", "#f42e00", "#042549"],
  };

  return (
    <Box padding={10}>
      <WaveLoader {...loaderProps} />
    </Box>
  );
}

export default Loader;
