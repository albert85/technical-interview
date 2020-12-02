import { Box, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import InputAdornment from '@material-ui/core/InputAdornment';
import { InputContainer, PasswordHideIcon, PasswordShowIcon } from './style';

export default function InputField({
  inputName,
  control,
  errors,
  textProps,
  type,
  ...restProps
}) {
  const [passwordShow, setPasswordShow] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Controller
        control={control}
        name={inputName}
        render={({ onChange, onBlur, value }) => {
          return (
            <InputContainer
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              type={passwordShow ? 'text' : type}
              InputProps={{
                disableUnderline: true,
                endAdornment: type === 'password' && (
                  <InputAdornment position="end">
                    <span
                      aria-label="toggle password visibility"
                      onClick={() => setPasswordShow(!passwordShow)}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {!passwordShow ? (
                        <PasswordShowIcon />
                      ) : (
                        <PasswordHideIcon />
                      )}
                      {/* {!passwordShow ? "Show" : "Hide"} */}
                    </span>
                  </InputAdornment>
                ),
              }}
              {...textProps}
            />
          );
        }}
        rules={{
          required: 'This is required',
        }}
        {...restProps}
      />
      <Box mb="15px">
        <Typography style={{ fontSize: '10px' }} color="error">
          {errors[inputName]?.message}
        </Typography>
      </Box>
    </div>
  );
}
