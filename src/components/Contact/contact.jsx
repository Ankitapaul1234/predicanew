// import React from 'react';
// import Navbar from "../navbar/Navbar";
// import styles from "./styles.module.css";

// const contact = () => {
//   return (
//     <>
//       <div className={styles.contactContainer}>
//         <Navbar />
//         <div className={styles.contentWrapper}>
//           <h1 className={styles.title}>Overview</h1>

            
           
          
//         </div>
//         {/* Footer Section */}
//         <footer className={styles.footer}>
//           <p>© 2024 Predica. All rights reserved.</p>
//         </footer>
//       </div>
//     </>
//   );
// }

// export default contact























// import React, { useState } from 'react';
// import Navbar from "../navbar/Navbar";
// import styles from "./styles.module.css";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     setSubmitted(true);
//   };

//   return (
//     <>
//       <div className={styles.contactContainer}>
//         <Navbar />
//         <div className={styles.contentWrapper}>
//           <h1 className={styles.title}>Contact Us</h1>
//           {submitted ? (
//             <p className={styles.successMessage}>Thank you for reaching out! We'll get back to you soon.</p>
//           ) : (
//             <form onSubmit={handleSubmit} className={styles.form}>
//               <div>
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Message</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <button type="submit">Submit</button>
//             </form>
//           )}

//           <div className={styles.contactInfo}>
//             <h2>Contact Information</h2>
//             <p><FaPhone /> +914567890235</p>
//             <p><FaEnvelope /> <a href="mailto:Predica@gmail.com">Predica@gmail.com</a></p>
//             <p><FaMapMarkerAlt /> 123 L.N Road, Kolkata, India</p>
//           </div>
//         </div>

//         {/* Footer Section */}
//         {/* <footer className={styles.footer}>
//           <p>© 2024 Predica. All rights reserved.</p>
//         </footer> */}
//       </div>
//     </>
//   );
// };

// export default Contact;



import React, { useState } from 'react';
import Navbar from "../navbar/Navbar";
import styles from "./styles.module.css";
import { databases } from '../../appwriteConfig';

const Review = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    review: '',
    rating: 5
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID,
        'unique()',
        {
          name: formData.name,
          email: formData.email,
          review: formData.review,
          rating: parseInt(formData.rating),
        }
      );
      setSubmitted(true);
    } catch (err) {
      console.error("Appwrite Error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.contactContainer}>
      <Navbar />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Leave a Review</h1>

        {submitted ? (
          <p className={styles.successMessage}>
            ✅ Thank you for your review!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Rating</label>
              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>
                    {Array(num).fill("⭐").join("")} ({num})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Your Review</label>
              <textarea
                name="review"
                value={formData.review}
                onChange={handleChange}
                placeholder="Write your review here..."
                required
              />
            </div>

            {error && <p className={styles.errorMessage}>{error}</p>}

            <button type="submit">Submit Review</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Review;
