import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using emailjs-com
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then((result) => {
        console.log("Email sent:", result.text);
        // Add code to handle successful email sending (e.g., show a success message)
      })
      .catch((error) => {
        console.error("Email error:", error);
        // Add code to handle email sending error (e.g., show an error message)
      });

    // Reset form fields after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={classes.contactContainer}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.formInput}
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          className={classes.formInput}
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          className={classes.formInput}
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
        />
        <Button
          className={classes.submitButton}
          type="submit"
          variant="contained"
          color="primary">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    backgroundColor: "#f5f5f5",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "50px auto",
  },
  formInput: {
    marginBottom: "20px",
  },
  submitButton: {
    marginTop: "20px",
  },
}));
