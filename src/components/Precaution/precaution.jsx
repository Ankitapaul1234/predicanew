
import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./styles.module.css";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Precaution = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/hospitals');
  };

  return (
    <>
      <div className={styles.precautionContainer}>
        <Navbar />
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Breast Cancer Precaution</h1>

          {/* Symptoms Section */}
          <section className={styles.section}>
            <h2>Symptoms of Breast Cancer</h2>
            <ul>
              <li>Development of a lump or thickened area in the breast or underarm that feels different from surrounding tissue.</li>
              <li>Noticeable change in the size, shape, or appearance of one or both breasts, often without an obvious cause.</li>
              <li>Redness, dimpling, or puckering of the skin on the breast, sometimes resembling the texture of an orange peel.</li>
              <li>An inverted nipple, changes in nipple position, or unusual discharge from the nipple, which may be clear, bloody, or yellowish.</li>
              <li>Persistent pain or tenderness in the breast or underarm area, which is not related to the menstrual cycle.</li>
              <li>Swelling in part or all of the breast, often accompanied by skin irritation or changes in skin texture.</li>
            </ul>
          </section>

          <br/>


            {/* Video Section */}
            <section className={styles.videoSection}>
            <h2>Learn More About Breast Cancer</h2>
            <div className={styles.videoWrapper}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/srDdIbFLbJY"
                title="Breast Cancer Awareness Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </section>

          <br />

          {/* Risk Factors Section */}
          <section className={styles.section}>
            <h2>Risk Factors of Breast Cancer</h2>
            <p>Breast cancer can affect anyone, but certain factors may significantly increase the likelihood of developing the disease. While some risk factors are beyond a person’s control, understanding them can help individuals make informed lifestyle choices and manage their health proactively.</p>
            
            <h3>1. Age and Gender</h3>
            <p>The risk of developing breast cancer increases with age. Women over the age of 50 are at a higher risk, and although men can develop breast cancer, the incidence is significantly lower in men compared to women.</p>
            
            <h3>2. Family History and Genetics</h3>
            <p>Having a close relative, such as a mother, sister, or daughter with breast cancer increases the risk. Inherited genetic mutations, particularly in the BRCA1 and BRCA2 genes, significantly raise the likelihood of developing breast and ovarian cancer.</p>
            
            <h3>3. Hormonal Factors</h3>
            <p>Hormones play a major role in breast cancer development. Factors such as early menstruation (before age 12), late menopause (after age 55), and hormone replacement therapy (HRT) after menopause can increase the risk. Extended exposure to estrogen and progesterone without breaks may contribute to abnormal cell growth in breast tissue.</p>
            
            <h3>4. Lifestyle and Environmental Factors</h3>
            <p>Lifestyle choices can have a significant impact on breast cancer risk. Obesity, particularly after menopause, is linked to higher estrogen levels, contributing to breast cancer development. A sedentary lifestyle, excessive alcohol consumption, and poor diet can also elevate the risk. Additionally, exposure to radiation, including previous cancer treatments, may increase susceptibility.</p>
            
            <h3>5. Reproductive History</h3>
            <p>Women who have not had children, had their first child after age 30, or never breastfed may be at a slightly higher risk. Pregnancy and breastfeeding lower estrogen levels, providing some protective effect against breast cancer.</p>
            
            <h3>6. Dense Breast Tissue</h3>
            <p>Women with dense breast tissue are more likely to develop breast cancer. Dense tissue contains more connective tissue than fatty tissue, making it harder to detect abnormalities using traditional mammograms.</p>
            
            <h3>7. Previous Breast Conditions</h3>
            <p>Individuals who have previously experienced benign breast conditions, such as atypical hyperplasia or lobular carcinoma in situ (LCIS), have a higher risk of developing invasive breast cancer. Regular monitoring and early detection are crucial in such cases.</p>
          </section>

          <br/>


          {/* Prevention Section */}
          <section className={styles.section}>
            <h2>How to Prevent the Risks of Breast Cancer</h2>
            <p>Maintaining a healthy lifestyle is one of the most effective precautions for breast cancer. Here are some preventive measures that a person can take to prevent the risks of breast cancer:</p>

            <h3>◻ Maintaining a Healthy Weight</h3>
            <p>Maintaining a healthy weight is essential for reducing the risk of breast cancer. Studies have shown that being overweight or obese can increase the likelihood of developing breast cancer, especially after menopause. Excess body fat can lead to higher levels of estrogen, which is linked to breast cancer growth. Aim for a balanced diet rich in fruits, vegetables, whole grains, and lean proteins, and monitor your portion sizes to help maintain a healthy weight.</p>
  
                            <br /> 

            
                            <h3>◻ Healthy Diet Plan for Breast Cancer Prevention</h3>
<p>Following a balanced diet is crucial for breast cancer prevention. Focus on consuming a variety of fruits, vegetables, whole grains, and legumes, which provide essential vitamins, fiber, and antioxidants that support immune function and reduce inflammation. Incorporate foods rich in omega-3 fatty acids like salmon, flaxseeds, and walnuts, and limit red meat, processed foods, and sugary beverages. Choosing organic produce when possible and reducing exposure to pesticides may also help. Staying hydrated and practicing mindful eating habits are additional steps toward better overall health and cancer prevention.</p>

<br />

{/* Diet Plan Video Section */}
<div className={styles.videoWrapper}>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/WZqq5jr4guU"
    title="Breast Cancer Prevention Diet Plan"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>

<br />


            <h3>◻ Exercising Regularly</h3>
            <p>Exercising regularly is another critical precaution for breast cancer. Physical activity helps control weight, reduces estrogen levels, and improves overall health. Aim for at least 150 minutes of moderate aerobic exercise or 75 minutes of vigorous exercise each week, combined with strength training exercises at least twice a week. Activities like walking, swimming, cycling, or group fitness classes can be enjoyable ways to incorporate exercise into your routine.</p>
              
              <br /> 

              {/* Additional Video Section */}
            <div className={styles.videoWrapper}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/6KEcnKzpOmE"
                title="Breast Cancer Exercise Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

          <br />

          <h3>◻ Avoiding Alcohol and Smoking</h3>
<p>Limiting alcohol consumption and avoiding smoking are crucial precautions for reducing the risk of breast cancer. Research shows that even moderate alcohol intake can increase breast cancer risk, so it is recommended that women limit alcohol to no more than one drink per day or avoid it entirely. Likewise, smoking has been linked to various types of cancer, including breast cancer. Quitting smoking can significantly lower the risk and improve overall health.</p>

<br />


              
         

<div
              className={styles.imageContainer}
              style={{ width: "600px", height: "auto", margin: "20px auto" }}
            >
              <img
                src="src/img/precaution.jpg"
                alt="Breast Cancer Awareness"
                className={`${styles.image} ${styles.animatedImage}`}
              />
            </div>

            <br />

            <h3>◻ Breastfeeding, If Possible</h3>
            <p>Breastfeeding can also serve as a precaution for breast cancer. Research indicates that women who breastfeed may have a lower risk of developing breast cancer, particularly if they breastfeed for an extended period. Breastfeeding helps to reduce the number of menstrual cycles a woman experiences, which in turn lowers estrogen levels. If you are able to breastfeed, consider doing so for at least six months to reap the potential protective benefits.</p>
          </section>


                      <br />

{/* Extra Tips to Prevent Breast Cancer */}
<h3>◻ Extra Tips to Prevent Breast Cancer</h3>
  <p>Along with maintaining a healthy lifestyle, following additional preventive measures can further reduce the risk of breast cancer. Staying informed, regular screenings, managing stress, and avoiding exposure to harmful chemicals are all important steps toward better breast health.</p>

  <div className={styles.videoWrapper}>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/yyY5A7HnGrA"
      title="Extra Tips for Breast Cancer Prevention"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>

  <br />

                {/* Treatment Options Section */}
          <section className={styles.section}>
            {/* <h2>Breast Cancer Treatment Options</h2>
            <p>If a woman is diagnosed with breast cancer, there are several breast cancer treatment options available. The choice of treatment depends on the stage and type of breast cancer, as well as the patient’s overall health and preferences. Some common treatment options include:</p>

            <p>Advancements in breast cancer treatment have significantly improved patient outcomes through a multidisciplinary approach. Initial treatments often involve surgery, such as lumpectomy or mastectomy, depending on tumor size and location. Newer surgical techniques, like skin-sparing and nipple-sparing mastectomies, aim to enhance cosmetic results. Post-surgery, radiation therapy targets remaining cancer cells, while chemotherapy may shrink tumors before surgery or address residual cancer. Hormone therapy, targeted therapy, and immunotherapy further personalize treatment by blocking hormones, targeting specific cancer cell abnormalities, or enhancing the immune system’s response.</p>

            <p>Roche has been pivotal in this field, starting with HERCEPTIN’s approval in 1998 and expanding with subsequent drugs like PERJETA, KADCYLA, and PHESGO. Increased public awareness and innovative therapies are driving progress, with emerging drugs showing promise for more personalized treatments. Companies such as Roche, AstraZeneca, and Olema Pharmaceuticals are at the forefront, developing novel therapies targeting genetic markers and specific pathways. These advancements are expected to enhance survival rates and quality of life for breast cancer patients by offering more tailored and effective treatment options.</p> */}


<h2>Breast Cancer Treatment Options</h2>
<p>Breast cancer treatment depends on the stage, type, and patient’s health and preferences. Common options include surgery (lumpectomy or mastectomy), radiation therapy, chemotherapy, hormone therapy, targeted therapy, and immunotherapy. Newer surgical techniques like skin-sparing and nipple-sparing mastectomies focus on better cosmetic results.</p>

<p>Advancements by companies like Roche, AstraZeneca, and Olema Pharmaceuticals are driving more personalized treatments. Since HERCEPTIN’s approval in 1998, therapies like PERJETA, KADCYLA, and PHESGO have improved survival rates and quality of life. Emerging therapies targeting genetic markers promise even better outcomes for breast cancer patients.</p>

<h3>Find your nearest hospitals:  </h3>
<button className="animatedButton" onClick={handleClick}>
      Find cancerous hospitals
    </button>

            <div
                        className={styles.imageContainer}
                        style={{ width: "600px", height: "auto", margin: "20px auto" }}
                      >
                        <img
                          src="src/img/doctor.jpg"
                          alt="doctor for Breast Cancer"
                          className={`${styles.image} ${styles.animatedImage}`}
                        />

            </div>

            <br />

            <ul>
              <li>Surgery (Lumpectomy, Mastectomy, Skin-Sparing or Nipple-Sparing Mastectomy)</li>
              <li>Radiation Therapy</li>
              <li>Chemotherapy</li>
              <li>Hormone Therapy</li>
              <li>Targeted Therapy</li>
              <li>Immunotherapy</li>
            </ul>

            <br />

            {/* <p>For a doctor’s appointment, click the button below to find Oncologists in your area:</p>
            <a href="https://www.justdial.com/Kolkata/Oncologists-in-Narendrapur/nct-10343365" target="_blank" rel="noopener noreferrer">
              <button className={styles.animatedButton}>Find Oncologists</button>
            </a> */}



              <p>We sincerely hope for the best for you or your loved ones and wish you strength throughout this journey. Thank you for choosing our website as a source of information.
                 We truly hope that the content here proves helpful in providing the guidance you need. For any additional support, our AI assistant is always available to assist you with further information and personalized help. 
                 You're not alone — we’re here with you every step of the way.</p>

          </section>        

            <br />

        </div>
        {/* Footer Section */}
        <footer className={styles.footer}>
          
          <p>
  For CONTACT us please click the link :🔗{" "}
  <Link 
    to="/contact" 
    style={{
      color: 'blue',
      textDecoration: 'underline',
      fontWeight: '500'
    }}
  >
    Contact
  </Link>
</p>
<p>© 2024 Predica. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default Precaution;




