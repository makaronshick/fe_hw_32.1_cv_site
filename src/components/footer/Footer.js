import React from "react";
import "./footer.styles.css";

export default () => {
  return (
    <div className="footer-container">
      <h3>Contact Me</h3>
      <section className="footer-info">
        <h4>Our Contact Information</h4>
        <p>Email: contact@company.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Main St, City, Country</p>
      </section>
    </div>
  );
};
