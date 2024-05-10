import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface CustomUserIconProps {
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomUserIcon: React.FC<CustomUserIconProps> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <AccountCircleIcon style={{ color: "black" }} />
    </IconButton>
  );
};

export default CustomUserIcon;
