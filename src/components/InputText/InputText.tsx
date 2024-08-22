import {
  Box,
  InputAdornment,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export interface InputTextProps {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  textFieldSx?: SxProps<Theme>;
  searchIconSx?: SxProps<Theme>;
  helpOutlineIconSx?: SxProps<Theme>;
  boxSx?: SxProps<Theme>;
  disabled: boolean;
  error: boolean;
}

const textFieldStyles: SxProps<Theme> = {
  "& .MuiOutlinedInput-input": {
    padding: "0",
    height: {
      xs: "24px",
      md: "36px",
      lg: "40px",
      xl: "48px",
    },
    fontSize: {
      xs: "12px",
      lg: "14px",
    },
    fontWeight: 400,
  },
};

const adornmentStyles: SxProps<Theme> = {
  marginLeft: "4px",
  borderRadius: "4px",
};

const typographyStyles: SxProps<Theme> = {
  fontSize: {
    xs: "12px",
    md: "16px",
    lg: "20px",
  },
  padding: "0 8px",
};

export const InputText: React.FC<InputTextProps> = ({
  id,
  value,
  onChange,
  placeholder,
  textFieldSx,
  searchIconSx,
  helpOutlineIconSx,
  boxSx,
  disabled,
  error,
}) => {
  return (
    <TextField
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      variant="outlined"
      disabled={disabled}
      error={error}
      sx={{ ...textFieldStyles, ...textFieldSx }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={searchIconSx} />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <HelpOutlineIcon sx={helpOutlineIconSx} />
            <Box sx={{ ...adornmentStyles, ...boxSx }}>
              <Typography
                sx={typographyStyles}
              >
                ⌘K
              </Typography>
            </Box>
          </InputAdornment>
        ),
      }}
    />
  );
};
