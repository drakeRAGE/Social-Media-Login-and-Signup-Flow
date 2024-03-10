// import React from 'react'
// import { useParams } from 'react-router-dom'

// const Scanned = () => {
//   const {id} = useParams();
//   return (
//     <div>{id}</div>
//   )
// }

// export default Scanned


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
const Scanned = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const db = getFirestore();

    // Fetch user details from Firestore based on the provided UID
    const fetchUserDetails = async () => {
      try {
        const userDocRef = doc(db, 'users', id); // replace 'users' with your Firestore collection name
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          // Set the user details in state
          setUserDetails(userDoc.data());
        } else {
          console.error('User not found');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();

    // Cleanup function
    return () => setUserDetails(null);
  }, [id]);

  return (
    <div>
      {userDetails ? (
        <section>
          <div className="profile_container">
            <div className="text_container">
              <img src={userDetails.photoURL} alt="" />

              <h3>{userDetails.displayName}</h3>
              <p>{userDetails.email}</p>
              <p>User ID: {userDetails.uid}</p>
              <hr />
            </div>
          </div>
        </section>
      ) : (
        <p>Wrong user details...</p>
      )}
    </div>
  );
};

export default Scanned;
