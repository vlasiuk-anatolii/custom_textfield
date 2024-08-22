import { Button, Tooltip } from "@mui/material";
import React, { ReactNode } from "react";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import EditOffOutlinedIcon from "@mui/icons-material/EditOffOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

interface ToggleButtonProps {
  tooltipTitle: string;
  isActive: boolean;
  activeIcon: ReactNode;
  inactiveIcon: ReactNode;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  tooltipTitle,
  isActive,
  activeIcon,
  inactiveIcon,
  onClick,
}) => (
  <Tooltip title={tooltipTitle} arrow>
    <Button onClick={onClick} sx={{ margin: "8px" }}>
      {isActive ? activeIcon : inactiveIcon}
    </Button>
  </Tooltip>
);

interface ThemeToggleButtonProps {
  darkMode: "light" | "dark";
  onClick: () => void;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  darkMode,
  onClick,
}) => (
  <ToggleButton
    tooltipTitle="Toggle dark or light!"
    isActive={darkMode === "dark"}
    activeIcon={<WbSunnyOutlinedIcon />}
    inactiveIcon={<NightlightOutlinedIcon />}
    onClick={onClick}
  />
);

interface DisableToggleButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}

const DisableToggleButton: React.FC<DisableToggleButtonProps> = ({
  isDisabled,
  onClick,
}) => (
  <ToggleButton
    tooltipTitle="Disable or enable the input!"
    isActive={isDisabled}
    activeIcon={<EditOffOutlinedIcon />}
    inactiveIcon={<CreateOutlinedIcon />}
    onClick={onClick}
  />
);

interface ErrorToggleButtonProps {
  isError: boolean;
  onClick: () => void;
}

const ErrorToggleButton: React.FC<ErrorToggleButtonProps> = ({
  isError,
  onClick,
}) => (
  <ToggleButton
    tooltipTitle="Turn on/off Error mode!"
    isActive={isError}
    activeIcon={<ErrorOutlineOutlinedIcon />}
    inactiveIcon={<CircleOutlinedIcon />}
    onClick={onClick}
  />
);

export { ThemeToggleButton, DisableToggleButton, ErrorToggleButton };
