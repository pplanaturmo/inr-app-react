import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface CustomMenuIconProps {
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomMenuIcon: React.FC<CustomMenuIconProps> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <MenuIcon />
    </IconButton>
  );
};

export default CustomMenuIcon;
