import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useForm } from 'react-hook-form';

const currencies = [
  { value: 'user', label: 'user' },
  { value: 'mangar', label: 'mangar' },
  { value: 'admin', label: 'admin' },

];

export default function D() {

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success', 
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // إغلاق الـ Snackbar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };


  const onSubmit = (data) => {
    console.log('بيانات المدخلات:', data);
    setSnackbar({
      open: true,
      message: 'تم إرسال البيانات بنجاح!',
      severity: 'success',
    });
  };

 
  const onError = (errors) => {
    console.log('أخطاء الإدخال:', errors);
    setSnackbar({
      open: true,
      message: 'يرجى تعبئة جميع الحقول المطلوبة بشكل صحيح!',
      severity: 'error',
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit, onError)}
      noValidate
      autoComplete="off"
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', p: 2 }}
    >
       


      <div style={{marginBottom:"13px"}}>
        <h1 style={{ color: 'blue' }}>CREATE USER</h1>
        <p>Create a new user profile</p>
      </div>
      

      <Stack spacing={2} direction="row">
        {/* First Name */}
        <TextField
          label="First name"
          variant="outlined"
          fullWidth
          error={!!errors.firstName}
          helperText={errors.firstName ? 'هذا الحقل مطلوب (أكثر من حرفين)' : ''}
          {...register('firstName', { required: true, minLength: 2 })}
        />

        {/* Last Name */}
        <TextField
          label="Last name"
          variant="outlined"
          fullWidth
          error={!!errors.lastName}
          helperText={errors.lastName ? 'هذا الحقل مطلوب' : ''}
          {...register('lastName', { required: true })}
        />
      </Stack>

      {/* Email */}
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        error={!!errors.email}
        helperText={errors.email ? 'يرجى إدخال بريد إلكتروني صحيح' : ''}
        {...register('email', {
          required: true,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        })}
      />

      {/* Contact Number */}
      <TextField
        label="Contact Number"
        variant="outlined"
        fullWidth
        error={!!errors.contactNumber}
        helperText={errors.contactNumber ? 'رقم الهاتف مطلوب' : ''}
        {...register('contactNumber', { required: true })}
      />

      {/* Address 1 */}
      <TextField
        label="Address 1"
        variant="outlined"
        fullWidth
     
      />
        {/* Address 2 */}
      <TextField
        label="Address 2"
        variant="outlined"
        fullWidth
      />
 

      {/* Select Currency */}
      <TextField
        select
        label="Select Currency"
        defaultValue="USD"
        variant="filled"
        fullWidth
        {...register('currency')}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      {/* زر الإرسال */}
      <Box sx={{ textAlign: 'right' }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ backgroundColor: 'blue', color: 'white' }}
        >
          Create User
        </Button>
      </Box>
      {/* شريط التنبيهات (Snackbar / Alert) */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}