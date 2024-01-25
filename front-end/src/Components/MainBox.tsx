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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        minHeight: "90vh",
        backgroundColor: "#181818",
        paddingTop: "2vh", //keep
      }}
    >
      {children}
    </Box>
  );
};

export default MainBox;
