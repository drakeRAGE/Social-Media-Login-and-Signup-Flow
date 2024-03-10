import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import QRCode from "qrcode";
import ReactQRCode from "react-qr-code";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const [qrCode, setQrCode] = React.useState("");

  // Generate a unique QR code for the user's profile page
  const generateQRCode = async () => {
    try {
      const qrCodeData = `https://social-media-login-and-signup-flow.vercel.app/profile/${currentUser.uid}`;

      const qrCodeUrl = await QRCode.toDataURL(qrCodeData);
      console.log(qrCodeUrl);
      setQrCode(qrCodeData);
    } catch (error) {
      console.error(error);
    }
  };

  // Call the generateQRCode function when the component mounts
  useEffect(() => {
    generateQRCode();
  }, []);

  return currentUser ? (
    <section>
      <div className="profile_container">
        <div className="text_container">
          <img src={currentUser.photoURL} alt="" />

          <h3>{currentUser.displayName}</h3>
          <p>{currentUser.email}</p>
          <p>User ID: {currentUser.uid}</p>
          <hr />


          <h3>My Unique QR Code</h3>
          {/* Display the QR code */}
          {qrCode && <ReactQRCode value={qrCode} size={256} />}
        </div>
      </div>
    </section>
  ) : "Pls first login or register !";
};

export default Profile;
