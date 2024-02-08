import React, { useState } from "react";
// import { Button, TextField, Paper, Grid, Typography, Box } from "@material-ui/core";
import { useForm } from "react-hook-form";

// const AddPatient = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     address: "",
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <Box>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Typography variant="h4">User Details Form</Typography>
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             label="Name"
//             variant="outlined"
//             fullWidth
//             {...register("name", { required: true })}
//             error={errors.name && <span>This field is required</span>}
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             label="Email"
//             variant="outlined"
//             fullWidth
//             {...register("email", {
//               required: true,
//               pattern:
//                 /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//             })}
//             error={
//               errors.email && (
//                 <span>
//                   This field is required and must be a valid email address
//                 </span>
//               )
//             }
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             label="Age"
//             variant="outlined"
//             fullWidth
//             {...register("age", { required: true, min: 18, max: 99 })}
//             error={
//               errors.age && (
//                 <span>
//                   This field is required and must be between 18 and 99
//                 </span>
//               )
//             }
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <TextField
//             label="Address"
//             variant="outlined"
//             fullWidth
//             {...register("address", { required: true })}
//             error={errors.address && <span>This field is required</span>}
//           />
//         </Grid>
//         <Grid item xs={12}>
//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             onClick={handleSubmit(onSubmit)}
//           >
//             Submit
//           </Button>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// import React, { useState } from 'react';
// import './App.css';

// Import necessary modules and components
// import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Grid,
} from '@mui/material';

const MyForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    phone: '',
    gender: '',
    age: '',
    address: '',
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission
    console.log('Form data submitted:', formData);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* ID Field */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="ID"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
            />
          </Grid>

          {/* Name Field */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>

          {/* Phone Number Field */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Grid>

          {/* Gender Field */}
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Age Field */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleInputChange}
            />
          </Grid>

          {/* Address Field */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={6}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default MyForm;



// export default AddPatient;
