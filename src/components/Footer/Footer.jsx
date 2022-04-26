import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-title">
        <h2>SAYAKAT</h2>
      </div>

      <div className="contacts">
        <ul>
          <li>🇰🇬 The Kyrgyz Republic, Central Asia</li>
          <li>📞 Phone: +996 990 990 000</li>
          <li>📨 Email: booking@sayakat.com</li>
        </ul>
      </div>

      <hr />
      <div className="footer-bottom">
        <p>
          © 2022 Sayakat, All rights to photos belong to the owner Albert Dros
        </p>
        <img
          src="https://shop.tumar.com/wp-content/uploads/2019/02/payments.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
