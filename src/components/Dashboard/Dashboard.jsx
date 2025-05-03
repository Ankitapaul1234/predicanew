// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import styles from "./styles.module.css";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     alert("You have been logged out.");
//     navigate("/login");
//   };

//   return (
//     <div className={styles.dashboard}>
//       <h1>Welcome to Your Dashboard 🎉</h1>
//       <p>Select an option below:</p>

//       <div className={styles.button_container}>
//         <Link to="/">
//           <button className={styles.white_btn}>Go to Home Page</button>
//         </Link>
//         <Link to="/prediction">
//           <button className={styles.green_btn}>Go to Prediction Page</button>
//         </Link>
//         <button className={styles.logout_btn} onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import styles from "./styles.module.css";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove token on logout
//     alert("You have been logged out.");
//     navigate("/login"); // Redirect to Login Page
//   };

//   return (
//     <div className={styles.dashboard}>
//       <h1>Welcome to Your Dashboard 🎉</h1>
//       <p>Select an option below:</p>

//       <div className={styles.button_container}>
//         <Link to="/">
//           <button className={styles.white_btn}>Go to Home Page</button>
//         </Link>
//         <Link to="/prediction">
//           <button className={styles.green_btn}>Go to Prediction Page</button>
//         </Link>
//         <button className={styles.logout_btn} onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Navbar from "../navbar/Navbar";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Clear the token
//     alert("You have been logged out.");
//     navigate("/"); // Redirect to home page
//   };

//   return (
//     <div>
//       <h1>Welcome to Your Dashboard 🎉</h1>
//       <p>Select an option below:</p>
//       <button onClick={handleLogout}>Logout</button>
//       <Link to="/">Go to Home Page</Link>
//       <Link to="/prediction">Go to Prediction Page</Link>


      
//     </div>

//   );
// };

// export default Dashboard;















// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Navbar from "../navbar/Navbar";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Clear the token
//     alert("You have been logged out.");
//     navigate("/"); // Redirect to home page
//   };

//   return (
//     <div>

//       {/* Why Prediction is Important Section */}
//       <section style={{ marginTop: '40px' }}>
//         <h2 style={{ color: '#d81b60' }}>Why Prediction is Important</h2>
//         <p>
//   AI-powered prediction systems analyze health data to detect early signs of breast cancer, helping in early diagnosis which enhances treatment options and significantly improves survival rates. 
//   By identifying risks at an early stage, these systems provide personalized insights and recommend preventive measures. 
//   Using prediction technology can lead to timely intervention, reducing treatment complexities, minimizing healthcare costs, and ensuring better long-term health outcomes.
// </p>
// <p>
//   To ensure accurate predictions, it is essential for users to provide complete and precise data. Parameters such as <strong>radius_mean</strong>, <strong>texture_mean</strong>, <strong>perimeter_mean</strong>, <strong>area_mean</strong>, <strong>smoothness_mean</strong>, <strong>compactness_mean</strong>, <strong>concavity_mean</strong>, <strong>concave points_mean</strong>, along with their worst values, are critical for effective analysis. 
//   Proper data input enhances the reliability of the AI model, enabling it to deliver accurate and actionable insights.
// </p>

//     <br />

//     <p>Click below to navigate to the prediction page:</p>
//     <button 
//         onClick={() => navigate('/prediction')} 
//         style={{ 
//           backgroundColor: '#d81b60', 
//           color: 'white', 
//           padding: '10px 20px', 
//           border: 'none', 
//           borderRadius: '5px', 
//           cursor: 'pointer', 
//           marginBottom: '20px'
//         }}
//       >
//         Go to Prediction Page
//       </button>

//       <br />

//       {/* Image Section */}
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
//         <img 
//           src="src/img/dashpre.jpg" 
//           alt="Dashboard Illustration" 
//           className="animatedImage" 
//           style={{ width: '100%', maxWidth: '800px', height: 'auto', objectFit: 'contain', borderRadius: '12px' }}
//         />
//       </div>

//       </section>


//       <br />

//       <p>Click below to navigate to the home page:</p>

//       {/* Buttons for Navigation with Inline Styling */}
//       <button 
//         onClick={() => navigate('/')} 
//         style={{ 
//           backgroundColor: '#d81b60', 
//           color: 'white', 
//           padding: '10px 20px', 
//           border: 'none', 
//           borderRadius: '5px', 
//           cursor: 'pointer', 
//           marginBottom: '20px'
//         }}
//       >
//         Go to Home Page
//       </button>

//       <br />


//         {/* Awareness Section */}
// <section style={{ marginTop: '40px' }}>
//   <h2 style={{ color: '#e91e63' }}>Awareness About Breast Cancer</h2>
//   <p>
//     Breast cancer awareness plays a critical role in early detection and effective treatment. 
//     Understanding the symptoms, recognizing risk factors, and attending regular screenings can significantly improve survival rates. 
//     Promoting awareness also empowers individuals to take proactive measures towards their health.
//   </p>
//   <p>
//     Self-examinations, mammograms, and consultations with healthcare professionals are essential for early diagnosis. 
//     Educating others and breaking the stigma around breast cancer discussions can foster a supportive community and ensure timely medical intervention. 
//     Stay informed and encourage your loved ones to prioritize their health.
//   </p>
// </section>

// <br />






//       <p>for logout:</p>
//       {/* Logout Button with Dark Pink Style */}
//       <button 
//         onClick={handleLogout}
//         style={{ 
//           backgroundColor: '#d81b60', 
//           color: 'white', 
//           padding: '10px 20px', 
//           border: 'none', 
//           borderRadius: '5px', 
//           cursor: 'pointer', 
//           marginBottom: '20px'
//         }}
//       >
//         Logout
//       </button>

      

      

//       <br />

      

//       <p style={{ marginTop: '20px' }}>Or use the links below for navigation:</p>
//       <Link to="/" style={{ color: '#2196F3', textDecoration: 'none', marginRight: '15px' }}>Go to Home Page</Link>
//       <Link to="/prediction" style={{ color: '#4CAF50', textDecoration: 'none' }}>Go to Prediction Page</Link>
//         <br />
//         <p>© 2024 Predica. All rights reserved.</p>
//     </div>
//   );
// };

// export default Dashboard;




























import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const questions = [
  {
    question: "Do you have a family history of breast cancer?",
    options: [
      { text: "Yes, close relative (mother/sister)", score: 2 },
      { text: "Yes, distant relative (aunt/grandmother)", score: 1 },
      { text: "No family history or I don't know", score: 0 },
      
    ],
  },
  {
    question: "Have you noticed any lump or thickening?",
    options: [
      { text: "Yes, recently", score: 2 },
      { text: "Yes, but long ago and treated", score: 1 },
      { text: "No or Not sure", score: 0 },
    ],
  },
  {
    question: "Changes in breast shape, size, or skin texture?",
    options: [
      { text: "Significant changes recently", score: 2 },
      { text: "Minor changes", score: 1 },
      { text: "No changes", score: 0 },
    ],
  },
  {
    question: "Nipple discharge, redness, or pain?",
    options: [
      { text: "Yes", score: 2 },
      { text: "Sometimes", score: 1 },
      { text: "No or Not sure", score: 0 },
    ],
  },
  {
    question: "Your age group?",
    options: [
      { text: "Below 30", score: 0 },
      { text: "30-60", score: 1 },
      { text: "Above 60", score: 2 },
    ],
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [quizStarted, setQuizStarted] = useState(false);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState("");

  const handleOptionChange = (score) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = score;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateRisk();
    }
  };

  const calculateRisk = () => {
    const totalScore = answers.reduce((acc, curr) => acc + (curr || 0), 0);

    if (totalScore === 0) {
      setResult("No Risk");
    } else if (totalScore <= 2) {
      setResult("Low Risk");
    } else if (totalScore <= 5) {
      setResult("Medium Risk");
    } else {
      setResult("High Risk");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    alert("You have been logged out.");
    navigate("/"); // Redirect to home page
  };

  const cancelQuiz = () => {
    setQuizStarted(false);
    setAnswers(Array(questions.length).fill(null)); // Reset answers to null
    setCurrentQuestion(0); // Reset to first question
    setResult(""); // Clear result
  };

  return (
    <div style={{ backgroundColor: "#121212",color: "#fff", padding: "20px" }}>
      <Navbar />

      {/* Why Prediction is Important Section */}
      <section style={{ marginTop: "40px" }}>
        <h2 style={{ color: "#d81b60" }}>Why Prediction is Important</h2>
        <p>
          AI-powered prediction systems analyze health data to detect early signs of breast cancer, helping in early diagnosis which enhances treatment options and significantly improves survival rates. By identifying risks at an early stage, these systems provide personalized insights and recommend preventive measures. Using prediction technology can lead to timely intervention, reducing treatment complexities, minimizing healthcare costs, and ensuring better long-term health outcomes.
        </p>
        <p>
          To ensure accurate predictions, it is essential for users to provide complete and precise data. Parameters such as <strong>radius_mean</strong>, <strong>texture_mean</strong>, <strong>perimeter_mean</strong>, <strong>area_mean</strong>, <strong>smoothness_mean</strong>, <strong>compactness_mean</strong>, <strong>concavity_mean</strong>, <strong>concave points_mean</strong>, along with their worst values, are critical for effective analysis. Proper data input enhances the reliability of the AI model, enabling it to deliver accurate and actionable insights.
        </p>

        <p>Click below to navigate to the prediction page for more accurate result:</p>
     <button 
        onClick={() => navigate('/prediction')} 
        style={{ 
          backgroundColor: '#d81b60', 
          color: 'white', 
          padding: '10px 20px', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer', 
          marginBottom: '20px'
        }}
      >
        Go to Prediction Page
      </button>

      <p style={{ color: "#ddd", textAlign: "center", marginBottom: "20px" }}>
  If you don't have test results yet, you can assess your breast cancer risk by answering a few simple questions. Alternatively, you can go to the prediction page using your existing test results.
</p>
        <button
          onClick={() => setQuizStarted(true)}
          style={{
            backgroundColor: "#d81b60",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Start Quiz
        </button>
      </section>

      

      {/* Quiz Section */}
      {quizStarted && !result ? (
        <div style={{ backgroundColor: "#333", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
          <h2 style={{ color: "#d81b60", textAlign: "center" }}>Breast Cancer Risk Prediction Quiz</h2>
          <div style={{ margin: "20px 0", color: "#ddd" }}>
            <p>{questions[currentQuestion].question}</p>
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index} style={{ display: "block", margin: "10px 0" }}>
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option.score}
                  onChange={() => handleOptionChange(option.score)}
                  checked={answers[currentQuestion] === option.score}
                  style={{ marginRight: "10px" }}
                />
                {option.text}
              </label>
            ))}
            <button
              onClick={handleNext}
              disabled={answers[currentQuestion] === null}
              style={{
                backgroundColor: "#d81b60",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
            </button>
            {/* ................................. */}
             {/* Cancel Quiz Button */}
             <button
              onClick={cancelQuiz}
              style={{
                backgroundColor: "#bbb",
                color: "black",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            >
              Cancel Quiz
            </button>
          </div>
        </div>
      ) : result ? (
        <div style={{ marginTop: "20px", color: "#ddd" }}>
          Prediction:{" "}
          <span
            style={{
              color:
                result === "High Risk"
                  ? "red"
                  : result === "Medium Risk"
                  ? "orange"
                  : result === "Low Risk"
                  ? "green"
                  : "gray",
            }}
          >
            {result}
          </span>
        </div>
      ) : null}

      <br />

      <br />

       {/* Image Section */}
       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
         <img 
           src="src/img/dashpre.jpg" 
           alt="Dashboard Illustration" 
           className="animatedImage" 
           style={{ width: '100%', maxWidth: '800px', height: 'auto', objectFit: 'contain', borderRadius: '12px' }}
         />
       </div>


               {/* Awareness Section */}
 <section style={{ marginTop: '40px' }}>
   <h2 style={{ color: '#e91e63' }}>Awareness About Breast Cancer</h2>
   <p>
     Breast cancer awareness plays a critical role in early detection and effective treatment. 
     Understanding the symptoms, recognizing risk factors, and attending regular screenings can significantly improve survival rates. 
     Promoting awareness also empowers individuals to take proactive measures towards their health.
   </p>
   <p>
     Self-examinations, mammograms, and consultations with healthcare professionals are essential for early diagnosis. 
     Educating others and breaking the stigma around breast cancer discussions can foster a supportive community and ensure timely medical intervention. 
     Stay informed and encourage your loved ones to prioritize their health.
   </p>
 </section>

 <br />

      {/* Logout Section */}
      <p>Click below to navigate to the home page:</p>
      <button
        onClick={handleLogout}
        style={{
          backgroundColor: "#d81b60",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Logout
      </button>

      <p>© 2024 Predica. All rights reserved.</p>
    </div>
  );
};

export default Dashboard;

































