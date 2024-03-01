import React from 'react';

const CourseData = [
  {
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.J5OLn7vqGbLSodNYKQwIhwHaEE&pid=Api&P=0&h=220',
    youtubeLink: 'https://www.youtube.com/watch?v=G3e-cpL7ofc&pp=ygUIaHRtbCBjc3M%3D',
  },
  {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDWXzWN7uIGLrUN16Z9LpZhTi26CJDK-dwlg&usqp=CAU',
    youtubeLink: 'https://www.youtube.com/watch?v=SBmSRK3feww&pp=ygUKamF2YXNjcmlwdA%3D%3D',
  },
  {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HB55YrPWmBe1Ys1a5O38tmU1pQ1l_f2iYA&usqp=CAU',
    youtubeLink: 'https://www.youtube.com/watch?v=SqcY0GlETPk&pp=ygURcmVhY3QganMgdHV0b3JpYWw%3D',
  },
  {
    imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.GzVbCamxpMEN5oZqVNWORAHaDj&pid=Api&P=0&h=220',
    youtubeLink: 'https://www.youtube.com/watch?v=7H_QH9nipNs&pp=ygUTZXhwcmVzcyBqcyB0dXRvcmlhbA%3D%3D',
  },
  {
    imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.iWsHU_6Lw7Ss3zTt95gQZgHaD8&pid=Api&P=0&h=220',
    youtubeLink: 'https://www.youtube.com/watch?v=J6mDkcqU_ZE&pp=ygUQbW9uZ29kYiB0dXRvcmlhbA%3D%3D',
  },
  {
    imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.AhThgsRhWKeHt1fvt4rM2AHaDN&pid=Api&P=0&h=220',
    youtubeLink: 'https://www.youtube.com/watch?v=8Xyn8R9eKB8&pp=ygUGU3FsaXRl',
  },
];


const Course = () => {
  const handleImageClick = (youtubeLink) => {
    window.open(youtubeLink, '_blank');
  };

  return (
    <div>
      <h1 style={{ color: 'gold', textAlign:'center'}}>Courses</h1>
      <div className="page-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <div className="Course-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {CourseData.map((course) => (
            <div key={course.id} className="Course-item" style={{ flex: '0 0 33%', margin: '10px 0' }}>
              <div
                className="course-image"
                onClick={() => handleImageClick(course.youtubeLink)}
                style={{
                  position: 'relative',
                  width: '280px',
                  height: '150px',
                  border: '1px solid #ccc',
                  overflow: 'hidden',
                  boxShadow: '0 0 50px 0 rgba(226, 226, 229, 0.7)',
                  display: 'flex',
                  justifyContent: 'center', 
                  alignItems: 'center',     
                  marginLeft: '140px'
                }}
              >
                <img
                  src={course.imageUrl}
                  alt={`Course ${course.id}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s',
                  }}
                />
                <div
                  className="highlight-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.5)',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                  }}
                />
              </div>  
              <div className="Course-info" style={{ textAlign: 'center' }}>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;