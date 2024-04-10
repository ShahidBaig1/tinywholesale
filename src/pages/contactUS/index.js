import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const ContactUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.contactContainer}>
      <h2>Contact Us</h2>
      <div className={classes.contactInfo}>
        <div className={classes.contactItem}>
          <h3>Address:</h3>
          <p>123 Main Street, City, Country</p>
        </div>
        <div className={classes.contactItem}>
          <h3>Phone:</h3>
          <p>+123-456-7890</p>
        </div>
        {/* Add more contact information items as needed */}
      </div>
    </div>
  );
};

export default ContactUs;

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    height:'100vh',
    backgroundColor: '#f5f5f5',
    padding: '50px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '50px auto',
  },
  contactItem: {
    marginBottom: '20px',
  },
}));
