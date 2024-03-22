import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <h4>Renewal Date: 04/04/2024</h4>
              <div className="profileScreen__plan">
                <div>
                  <h5>Netflix Standard</h5>
                  <h6>1080p</h6>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="profileScreen__plan">
                <div>
                  <h5>Netflix Basic</h5>
                  <h6>480p</h6>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="profileScreen__plan__current">
                <div>
                  <h5>Netflix Premium</h5>
                  <h6>4K+HDR</h6>
                </div>
                <button>Current Package</button>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
