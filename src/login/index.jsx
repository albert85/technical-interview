import { Box, Button, Grid } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { ReactComponent as LoginIcon } from '../assets/blog.svg';
import InputField from '../components/InputField';
import {
  Divider,
  GoogleContainer,
  LoginContainer,
  LoginLabel,
  OrText,
  SignInText,
} from './style';

const Login = () => {
  const history = useHistory();
  const { control, errors, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const responseGoogle = (response) => {
    localStorage.setItem('token', '123344');
    history.push('/dashboard')
  };

  return (
    <Box width="100%">
      <Grid container>
        <Grid item sm={4} xs={12}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{ backgroundColor: '#D5EFCA', height: '100vh' }}
          >
            <LoginIcon width="80%" />
          </Box>
        </Grid>
        <Grid item sm={8} xs={12}>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ height: '100vh' }}
          >
            <LoginContainer>
              <SignInText>SIGN IN</SignInText>
              <GoogleContainer
                clientId={process.env.REACT_APP_CLIENT_ID}
                buttonText="Login"
                style={{ width: '500px' }}
                onSuccess={responseGoogle}            
              />
              <Box display="flex" alignItems="center">
                <Divider />
                <OrText>Or</OrText>
                <Divider />
              </Box>
              <Box>
                <LoginLabel>Email</LoginLabel>
                <InputField
                  errors={errors}
                  control={control}
                  inputName="email"
                  textProps={{ placeholder: 'Email', type: 'email', }}
                  rules={{
                    required: 'This is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address"
                    }
                  }}
                />
                <LoginLabel>Password</LoginLabel>
                <InputField
                  errors={errors}
                  control={control}
                  inputName="password"
                  textProps={{ placeholder: 'Password' }}
                  type='password'
                />
              </Box>
              <Button
              onClick={handleSubmit(responseGoogle)}
                style={{
                  width: '100%',
                  backgroundColor: '#6C63FF',
                  color: '#fff',
                  minHeight: '45px',
                  textTransform: 'none'
                }}
              >
                Login
              </Button>
            </LoginContainer>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
