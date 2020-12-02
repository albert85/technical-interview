import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

export const InputContainer = styled(TextField)`
  width: 100%;
  padding: 10px 0 !important;
  border-radius: 5px;
  border: 1px solid #e4e4e4;
  margin-top: 15px;
  height: 30px;

  .MuiInput-underline:hover:not(.Mui-disable):before {
    border-bottom: none !important;
  }

  .MuiInput-underline:after {
    border-bottom: none !important;
  }

  .MuiInput-underline:before {
    border-bottom: none !important;
  }

  .MuiFilledInput-underline:before {
    border-bottom: none !important;
  }

  .MuiFilledInput-underline:after {
    border-bottom: none !important;
  }

  .MuiFilledInput-underline:before,
  .MuiFilledInput-underline:after {
    display: none;
  }

  .MuiInputBase-input{
    padding: 10px;
  }
`;

export const PasswordHideIcon = styled(VisibilityOffIcon)`
  color: #000 !important;
  cursor: pointer;
`;

export const PasswordShowIcon = styled(VisibilityIcon)`
  color: #000;
  cursor: pointer;
`;