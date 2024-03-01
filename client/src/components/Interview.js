import React from 'react';

class InterviewComponent extends React.Component {

    render() {
        
        return (
          <div style={{ 
            backgroundColor: '#074968', 
            textAlign: 'left', 
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 60px 0 rgba(226, 226, 229, 0.7)',
            width: '60%',
            margin: 'auto',
            alignItems: 'left',
            margin: '370px',
            marginTop: '20px'
        }}>
                <h1 style={{ color: 'gold', textAlign: 'center' }}>Interview Questions</h1><br />
                
                <div className="row">
                    <div className="col-1">
                    <h1 style={{ color: 'gold'}}>HTML(L1)</h1><br></br>
                        <ul>
                           <h2>1. What does HTML stand for?</h2>
                           <h2>2. What is an HTML tag? Give an example.</h2>
                           <h2>3. What is the purpose of the 'head' section in an HTML document?</h2>
                           <h2>4. Explain the difference between HTML and HTML5.</h2>
                           <h2>5. What is the role of the 'img' tag in HTML?</h2>
                           <h2>6. What is the purpose of the 'a' tag in HTML?</h2> 
                           <h2>7. What is the difference between inline and block-level elements in HTML?</h2> 
  
                        </ul>
                        <h1 style={{ color: 'gold'}}>CSS(L1)</h1><br></br>
                        <ul>
                            <h2>1. What does CSS stand for?</h2>
                            <h2>2. How do you apply CSS to an HTML document?</h2>
                            <h2>3. What is the difference between inline, internal,external CSS?</h2>
                            <h2>4. Explain the purpose of a CSS selector.</h2>
                            <h2>5. What is the difference between margin and padding in CSS?</h2>
                        </ul>
                        <h1 style={{ color: 'gold'}}>JavaScript(L1)</h1><br></br>
                        <ul>
                            <h2>1. What is JavaScript?</h2>
                            <h2>2. How do you declare a variable in JavaScript?</h2>
                            <h2>3. What is a function in JavaScript?</h2>
                            <h2>4. Explain the difference between let, const, and var for variable.</h2>
                            <h2>5. What is the purpose of conditional statements (e.g., if, else) in JavaScript?</h2>
                        </ul>
                        <h1 style={{ color: 'gold'}}>Bootstrap(L1)</h1><br></br>
                        <ul>
                            <h2>1. What is Bootstrap?</h2>
                            <h2>2. How do you include Bootstrap in an HTML document?</h2>
                            <h2>3. Explain the concept of responsive web design.</h2>
                            <h2>4. What is a Bootstrap grid system?</h2>
                            <h2>5. What are Bootstrap components?</h2>
                        </ul>
                        <h1 style={{ color: 'gold'}}>ReactJS(L1)</h1><br></br>
                        <ul>
                            <h2>1. What is React.js?</h2>
                            <h2>2. Explain the concept of a React component.</h2>
                            <h2>3. How do you create a React component?</h2>
                            <h2>4. What is JSX in React?</h2>
                            <h2>5. What is state in React, and how is it different from props?</h2>

                        </ul>
                        <h1 style={{ color: 'gold'}}>NodeJS(L1)</h1><br></br>
                        <ul>
                            <h2>1. What is Node.js?</h2>
                            <h2>2. How do you create a simple web server using Node.js?</h2>
                            <h2>3. How do you include external libraries in Node.js?</h2>
                            <h2>4. Explain the purpose of the package.json file in a Node.js project.</h2>
                            <h2>5. What are some popular frameworks or libraries built on top of Node.js</h2>
                            <p>.</p>
                            <p>.</p>
                            <p>.</p>
                            <p>.</p>
                            <p>.</p>
                            <p>.</p>
                            <p>.</p>
                        </ul>
                      <div>

                        
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InterviewComponent;
