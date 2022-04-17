import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton: React.FC = () => {
   return (
      <Button startIcon={<ArrowBackIcon />} component={NavLink} to="/" variant="outlined">
         Back
      </Button>
   );
};

export default BackButton;
