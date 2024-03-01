import React from 'react';

const AboutUs = () => {
    return (
        <div style={styles.centeredContainer}>
            <div style={styles.aboutUsContainer}>
                <div style={styles.aboutUsTitle}>About Us</div>
                <h3>Empowering careers through innovation, delivers a personalized interview preparation experience. Join us in mastering interviews and unlocking professional success</h3><br></br>
                
                <div style={styles.missionContainer}>
                    <div style={styles.missionText}>
                        <h2 align='center'>Our Mission</h2><br></br>
                        <h4 align='center'>Our mission is to provide a comprehensive resource for individuals
                            preparing for interviews, whether they're seeking employment, aiming for
                            promotions, simply honing their skills. We understand the importance
                            of preparation in achieving success during interviews, and we're here to
                            support you every step of the way. </h4>
                    </div>
                    <div style={styles.missionImage}>
                        <img src="https://img.freepik.com/premium-photo/concept-mission-with-network-business-symbols_220873-12797.jpg" alt="Mission Image" style={styles.image} />
                    </div>
                </div><br></br>
                <h1 align='center'>Brands</h1>
                <div style={styles.companyLogosContainer}>
                    <CompanyCard logo="https://tse4.mm.bing.net/th?id=OIP.kBUzVYV5zXVggYEDzhHr1QHaD4&pid=Api&P=0&h=220" link="https://www.tcs.com/"/>
                    <CompanyCard logo="https://tse3.mm.bing.net/th?id=OIP.YjODjDA0O2rDqD_LQUzKDgAAAA&pid=Api&P=0&h=220" link="https://www.wipro.com/" />
                    <CompanyCard logo="https://tse2.mm.bing.net/th?id=OIP.0tL8ZiFsF32l8rZMXJR0uAHaE7&pid=Api&P=0&h=220" link="https://www.zohocorp.com/"/>
                    <CompanyCard logo="https://tse1.mm.bing.net/th?id=OIP.Nfdw6uKFXeP1oEmB7gdeBQHaE8&pid=Api&P=0&h=220" link="https://www.microsoft.com/en-in" />
                    <CompanyCard logo="https://tse3.mm.bing.net/th?id=OIF.9onbCyLgFRgYsK%2bCEdJeFQ&pid=Api&P=0&h=220"   link="https://www.mercedes-benz.co.in/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE"/>
                </div>
                <br></br>
                <h1 align='center'>Our Story</h1><br></br>
                <h4>Thank you for choosing our platform to aid you in your interview preparation journey. 
                    We're committed to helping you succeed and wish youthe best of luck in all your endeavors.</h4>
            </div>
        </div>
    );
};

const CompanyCard = ({ logo, link }) => {
    return (
        <div style={styles.companyLogo}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={logo} alt="Company Logo" style={{ ...styles.logo, objectFit: 'cover' }} />
            </a>
        </div>
    );
};

const styles = {
    centeredContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
    },
    aboutUsContainer: {
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(to right, blue, black)',
        borderRadius: '10px',
        margin: '-360px 20px 20px 20px',
        padding: '200px',
        paddingbottom:'0px',
        marginTop:'1px',
        height: '1100px',
        width: '1600px'
    },
    aboutUsTitle: {
        fontSize: '34px',
        fontWeight: 'bold',
        marginBottom: '20px',
        // background: 'linear-gradient(to right, gold, white)',
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 88%, rgba(252,176,69,1) 100%)',
        color: 'yellow'
    },
    missionContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10px',
        width: '1200px',
        maxWidth: '4800px',
        background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%), rgb(63,94,251)',
    },
    missionText: {
        flex: 1,
        textAlign: 'left',
        padding:'20px'
    },
    missionImage: {
        flex: 1,
        textAlign: 'right',
    },
    image: {
        width: '400px',
        height: '200px',
        padding:'30px'
    },
    companyLogosContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: '40px',
        width: '100%',
    },
    companyLogo: {
        width: '20%',
        textAlign: 'center',
        marginBottom: '10px',
        height: '100px', 
        padding: '10px', 
        boxShadow: '0 0 3px rgba(255, 255, 255, 1)', 
        border: '2px solid black', 
        borderRadius: '15px',
    },
    
    logo: {
        width: '220px',
        height: '80px',
        maxWidth: '100%', 
        borderRadius: '1px',
    },
};

export default AboutUs;
