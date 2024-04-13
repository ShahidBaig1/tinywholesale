import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core';



const ScrollToTopButton = () => {
  const classes = useStyles();
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`${classes.scrollToTop} ${showButton ? classes.visible : ''}`}
      onClick={scrollToTop}
      title="Scroll to Top"
    >
      <FaArrowCircleUp />
    </button>
  );
};

export default ScrollToTopButton;
const useStyles = makeStyles((theme) => ({
    scrollToTop: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#f7c9d3',
      color: '#2f3035',
      border: 'none',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      fontSize: '24px',
      cursor: 'pointer',
      opacity: 0, /* Hidden by default */
      transition: 'opacity 0.3s ease',
  
      '&:hover': {
        backgroundColor: '#f7c9d3', // Change background color on hover
      },
      '& svg': {
        width: '1.5em', // Change SVG width to 2em
        height: '1.5em', // Change SVG height to 2em
      },
    },
    visible: {
      opacity: 1, /* Visible when scrolled down */
    },
  }));