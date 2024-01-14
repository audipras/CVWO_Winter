import { Box, BoxProps } from "@mui/system";
import { ReactNode } from "react";

interface MainBoxProps extends BoxProps {
  children: ReactNode;
}

const MainBox = ({ children, ...props }: MainBoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "92vh",
        backgroundColor: "background.default",
      }}
    ></Box>
  );
};

export default MainBox;
