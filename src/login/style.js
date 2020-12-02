import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';
import Google from 'react-google-login';


export const LoginContainer = styled(Box)`
  width: 50%;
  padding: 20px;
  min-height: 300px;
  box-shadow: 1px 1px 10px #e4e4e4;
`;

export const GoogleText = styled(Typography)`
  font-size: 30px !important;
  font-weight: 700;
`;

export const SignInText = styled(Typography)`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Divider = styled.hr`
  width: 100%;
  height: 0;
`;

export const OrText = styled(Typography)`
  margin: 10px 20px;
`;

export const LoginLabel = styled(Typography)`
  font-size: 15px;
  font-weight: bold;
`;

export const GoogleContainer = styled(Google)`
  width: 100%;
  height: 50px;
`;
