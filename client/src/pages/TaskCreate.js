import { Box } from "@mui/material";
import { Container } from "@mui/system";
import Taskform from "../components/Taskform";
// import Header from "./Header";
// import dayjs from "dayjs";

const TaskCreate = () => {
  // Function to validate date format
  // const isValidDate = (dateString) => {
  //   return dayjs(dateString, "YYYY-MM-DD").isValid();
  // };

  return (
    <Box>
      <Container>
        {/* Pass the isValidDate function as a prop to Taskform */}
        <Taskform mode="create" />
      </Container>
    </Box>
  );
};

export default TaskCreate;
