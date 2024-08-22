import { InputLabel as InputLabelMUI, Tooltip, SxProps, Theme } from "@mui/material";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import { useTheme } from "@mui/material/styles";
import { colors } from "../../theme";

export interface InputLabelProps {
  htmlFor: string;
  children: React.ReactNode;
  labelSx?: SxProps<Theme>;
  infoIconSx?: SxProps<Theme>;
  tooltipTitle?: string;
}

export const InputLabel: React.FC<InputLabelProps> = ({
  htmlFor,
  children,
  labelSx,
  infoIconSx,
  tooltipTitle,
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  return (
    <InputLabelMUI
      htmlFor={htmlFor}
      sx={{
        fontSize: {
          xs: "12px",
          lg: "14px",
        },
        fontWeight: 500,
        ...labelSx,
      }}
    >
      {children}
      <Tooltip
        title={tooltipTitle || "This is tooltip!"}
        arrow
        placement="top"
      >
        <span>
          <InfoIcon
            sx={{
              verticalAlign: "middle",
              marginLeft: "8px",
              fontSize: {
                xs: "12px",
                lg: "14px",
              },
              color: isDarkMode
                ? colors.text.secondary.darker
                : colors.text.primary.darker,
              ...infoIconSx,
            }}
          />
        </span>
      </Tooltip>
    </InputLabelMUI>
  );
};
