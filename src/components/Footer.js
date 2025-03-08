import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {new Date().getFullYear()} Project Manager. All rights reserved.
      </p>
    </footer>
  );
};

// Basic inline styles
const styles = {
  footer: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "grey",
    borderTop: "1px solid #ccc",
    marginTop: "auto",
  },
  text: {
    margin: "0",
    fontSize: "0.9rem",
    color: "#333",
  },
};

export default Footer;