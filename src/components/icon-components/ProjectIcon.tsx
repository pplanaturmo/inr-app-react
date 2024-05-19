import React from "react";
import { Box } from "@mui/material";
import projectIcon from "../../assets/images/iconoProyecto.png";

interface ProjectIconProps {
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

const ProjectIcon: React.FC<ProjectIconProps> = ({
  width = "auto",
  height = "auto",
  style = {},
}) => {
  return (
    <Box
      component="img"
      src={projectIcon}
      alt="Project Icon"
      sx={{
        width: width,
        height: height,
        objectFit: "contain",
        ...style,
      }}
    />
  );
};

export default ProjectIcon;
