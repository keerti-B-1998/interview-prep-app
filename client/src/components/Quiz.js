import React from 'react';

class QuizComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.lastClickedButton = null;
        this.originalButtonColor = 'white';
    }

    handleButtonClick = (questionNumber, isCorrect) => {
        const color = isCorrect ? 'green' : 'red';
    
        // Reset the color of the last clicked button to original white color
        if (this.lastClickedButton !== null) {
            this.setState({ ['buttonColor' + this.lastClickedButton]: this.originalButtonColor });
        }
    
        // Set the color of the current clicked button
        this.setState({
            ['buttonColor' + questionNumber]: color,
        });
    
        // Update the last clicked button
        this.lastClickedButton = questionNumber;
    
        // Display the answer only if it's correct
        if (isCorrect) {
            this.setState({
                ['text' + questionNumber]: 'Correct',
            });
        } else {
            // If it's wrong, display "Wrong"
            this.setState({
                ['text' + questionNumber]: 'Wrong',
            });
        }
    };

    render() {
        return (
            <div style={{
                backgroundColor: '#074968',
                textAlign: 'left',
                color: 'white',
                padding: '20px',
                borderRadius: '40px',
                boxShadow: '0 0 60px 0 rgba(226, 226, 229, 0.7)',
                width: '80%',
                margin: '260px',
                marginTop: '20px'
            }}>
                <h1 align="center">QUIZ QUESTIONS</h1><br />

                <div className="row">
                    <div className="col-1">
                        <h3>1. What does HTML stand for?</h3><br></br>

                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(1, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor1 || this.originalButtonColor,
                                color: this.state.buttonColor1 === 'green' || this.state.buttonColor1 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            a. Hyper text transfer protocol
                        </button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(2, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor2 || this.originalButtonColor,
                                color: this.state.buttonColor2 === 'green' || this.state.buttonColor2 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            b. HighText Machine Language
                        </button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(3, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor3 || this.originalButtonColor,
                                color: this.state.buttonColor3 === 'green' || this.state.buttonColor3 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            c. Hyper Text Markup Language
                        </button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(4, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor4 || this.originalButtonColor,
                                color: this.state.buttonColor4 === 'green' || this.state.buttonColor4 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            d. Hyper text multiple Language
                        </button>
                        <br></br>
                    </div>
                </div> <br />
                
                <div className="row">
                    <div className="col-1">
                        <h3>2. An HTML file can be edited and previewed in:?</h3><br></br>
                        
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(5, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor5 || this.originalButtonColor,
                                color: this.state.buttonColor5 === 'green' || this.state.buttonColor5 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            a. Microsoft Excel </button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(6, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor6 || this.originalButtonColor,
                                color: this.state.buttonColor6 === 'green' || this.state.buttonColor6 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            b. Visual Studio Code</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(7, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor7 || this.originalButtonColor,
                                color: this.state.buttonColor7 === 'green' || this.state.buttonColor7 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >   
                            c. Adobe Acrobat</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(8, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor8 || this.originalButtonColor,
                                color: this.state.buttonColor8 === 'green' || this.state.buttonColor8 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            d. Windows Media Player</button>
                            <br></br>
                    </div>
                </div>  <br />

                <div className="row">
                    <div className="col-1">
                        <h3>3. How can we change the background color of an element?</h3><br></br>
                        
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(9, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor9 || this.originalButtonColor,
                                color: this.state.buttonColor9 === 'green' || this.state.buttonColor9 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            a. background-color </button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(10, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor10 || this.originalButtonColor,
                                color: this.state.buttonColor10 === 'green' || this.state.buttonColor10 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            b. color</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(11, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor11 || this.originalButtonColor,
                                color: this.state.buttonColor11 === 'green' || this.state.buttonColor11 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            c. Both A and B</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(12, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor12 || this.originalButtonColor,
                                color: this.state.buttonColor12 === 'green' || this.state.buttonColor12 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >d. None of the above</button><br></br>
                    </div>
                </div>  <br />

                <div className="row">
                    <div className="col-1">
                        <h3>4. In CSS, what does the padding property control?</h3><br></br>
                    
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(13, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor13 || this.originalButtonColor,
                                color: this.state.buttonColor13 === 'green' || this.state.buttonColor13 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            a. Adds space around an element </button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(14, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor14 || this.originalButtonColor,
                                color: this.state.buttonColor14 === 'green' || this.state.buttonColor14 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            b. Sets the text color</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(15, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor15 || this.originalButtonColor,
                                color: this.state.buttonColor15 === 'green' || this.state.buttonColor15 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            c.  Defines the size of the text</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(16, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor16 || this.originalButtonColor,
                                color: this.state.buttonColor16 === 'green' || this.state.buttonColor16 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            d. Adds space within an element</button><br></br>
                    </div>
                </div>  <br />
              
                <div className="row">
                    <div className="col-1">
                        <h3>5. What is Bootstrap?</h3><br></br>

                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(17, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor17 || this.originalButtonColor,
                                color: this.state.buttonColor17 === 'green' || this.state.buttonColor17 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >a.  A programming language</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(18, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor18 || this.originalButtonColor,
                                color: this.state.buttonColor18 === 'green' || this.state.buttonColor18 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            b. A front-end framework</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(19, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor19 || this.originalButtonColor,
                                color: this.state.buttonColor19 === 'green' || this.state.buttonColor19 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >c. A database management system</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(20, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor20 || this.originalButtonColor,
                                color: this.state.buttonColor20 === 'green' || this.state.buttonColor20 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >d. A server-side scripting language</button><br></br>
                    </div>
                </div>  <br />

                <div className="row">
                    <div className="col-1">
                        <h3>6. Which Bootstrap class is used to create a basic button?</h3><br></br>
                        
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(21, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor21 || this.originalButtonColor,
                                color: this.state.buttonColor21 === 'green' || this.state.buttonColor21 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            a. button-basic</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(22, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor22 || this.originalButtonColor,
                                color: this.state.buttonColor22 === 'green' || this.state.buttonColor22 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            b. btn-default</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(23, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor23 || this.originalButtonColor,
                                color: this.state.buttonColor23 === 'green' || this.state.buttonColor23 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            c. btn-basic</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(24, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor24 || this.originalButtonColor,
                                color: this.state.buttonColor24 === 'green' || this.state.buttonColor24 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            d. btn</button><br></br>
                    </div>
                </div> <br />
                
                <div className="row">
                    <div className="col-1">
                        <h3>7. What class is used for styling text as green in Bootstrap?</h3><br></br>
                        
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(25, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor25 || this.originalButtonColor,
                                color: this.state.buttonColor25 === 'green' || this.state.buttonColor25 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            a. text-success</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(26, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor26 || this.originalButtonColor,
                                color: this.state.buttonColor26 === 'green' || this.state.buttonColor26 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            b. text-green</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(27, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor27 || this.originalButtonColor,
                                color: this.state.buttonColor27 === 'green' || this.state.buttonColor27 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            c. green-text</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(28, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor28 || this.originalButtonColor,
                                color: this.state.buttonColor28 === 'green' || this.state.buttonColor28 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            d. text-primary</button><br></br>
                    </div>
                </div>  <br />
                
                <div className="row">
                    <div className="col-1">
                        <h3>8. A collection and a document in MongoDB is equivalent to which of the SQL concepts respectively?</h3><br></br>
                        
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(29, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor29 || this.originalButtonColor,
                                color: this.state.buttonColor29 === 'green' || this.state.buttonColor29 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            a. Table and Column</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(30, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor30 || this.originalButtonColor,
                                color: this.state.buttonColor30 === 'green' || this.state.buttonColor30 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            b. Table and Row </button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(31, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor31 || this.originalButtonColor,
                                color: this.state.buttonColor31 === 'green' || this.state.buttonColor31 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            c. Column and Row</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(32, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor32 || this.originalButtonColor,
                                color: this.state.buttonColor32 === 'green' || this.state.buttonColor32 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            d. Database and Table</button><br></br>
                    </div>
                </div>  <br />
                
                <div className="row">
                    <div className="col-1">
                        <h3>9. Which MongoDB command is used to display the database you are currently using??</h3><br></br>
                        
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(33, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor33 || this.originalButtonColor,
                                color: this.state.buttonColor33 === 'green' || this.state.buttonColor33 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            a. show currentDatabase</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(34, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor34 || this.originalButtonColor,
                                color: this.state.buttonColor34 === 'green' || this.state.buttonColor34 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            b. show db</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(35, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor35 || this.originalButtonColor,
                                color: this.state.buttonColor35 === 'green' || this.state.buttonColor35 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            c. use db</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(36, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor36 || this.originalButtonColor,
                                color: this.state.buttonColor36 === 'green' || this.state.buttonColor36 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            d. db</button><br></br>
                    </div>
                </div> <br />
                
                
                <div className="row">
                    <div className="col-1">
                        <h3>10. Which of the following commands will show you all the collections in your current database?</h3><br></br>
                        
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(37, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor37 || this.originalButtonColor,
                                color: this.state.buttonColor37 === 'green' || this.state.buttonColor37 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            a. show collections</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(38, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor38 || this.originalButtonColor,
                                color: this.state.buttonColor38 === 'green' || this.state.buttonColor38 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            b. list collections</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(39, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor39 || this.originalButtonColor,
                                color: this.state.buttonColor39 === 'green' || this.state.buttonColor39 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            c. display collections</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(40, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor40 || this.originalButtonColor,
                                color: this.state.buttonColor40 === 'green' || this.state.buttonColor40 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            d. db.collections()</button><br></br>
                    </div>
                </div>  <br />

                <div className="row">
                    <div className="col-1">
                        <h3>11. What is ExpressJS?</h3><br></br>
                        
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(41, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor41 || this.originalButtonColor,
                                color: this.state.buttonColor41 === 'green' || this.state.buttonColor41 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            a. A database</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(42, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor42 || this.originalButtonColor,
                                color: this.state.buttonColor42 === 'green' || this.state.buttonColor42 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            b. A Node.js web application framework</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(43, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor43 || this.originalButtonColor,
                                color: this.state.buttonColor43 === 'green' || this.state.buttonColor43 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            c. A JavaScript framework</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(44, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor44 || this.originalButtonColor,
                                color: this.state.buttonColor44 === 'green' || this.state.buttonColor44 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            d. A front-end library</button><br></br>
                    </div>
                </div> <br />

                <div className="row">
                    <div className="col-1">
                        <h3>12. Middleware in ExpressJS is used for_______</h3><br></br>
                        
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(45, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor45 || this.originalButtonColor,
                                color: this.state.buttonColor45 === 'green' || this.state.buttonColor45 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            a. Handling errors only</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(46, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor46 || this.originalButtonColor,
                                color: this.state.buttonColor46 === 'green' || this.state.buttonColor46 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            b. Storing data</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(47, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor47 || this.originalButtonColor,
                                color: this.state.buttonColor47 === 'green' || this.state.buttonColor47 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            c. Routing</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(48, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor48 || this.originalButtonColor,
                                color: this.state.buttonColor48 === 'green' || this.state.buttonColor48 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            d. Processing requests and responses</button><br></br>
                    </div>
                </div> <br />

                <div className="row">
                    <div className="col-1">
                        <h3>13. What is express.Router() used for?</h3><br></br>
                        
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(49, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor49 || this.originalButtonColor,
                                color: this.state.buttonColor49 === 'green' || this.state.buttonColor49 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            a. Routing to different servers</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(50, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor50 || this.originalButtonColor,
                                color: this.state.buttonColor50 === 'green' || this.state.buttonColor50 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            b.  Redirecting requests</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(51, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor51 || this.originalButtonColor,
                                color: this.state.buttonColor51 === 'green' || this.state.buttonColor51 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            c. Creating modular route handlers</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(52, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor52 || this.originalButtonColor,
                                color: this.state.buttonColor52 === 'green' || this.state.buttonColor52 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            d. Logging requests</button><br></br>
                    </div>
                </div> <br />

                <div className="row">
                    <div className="col-1">
                        <h3>14. What is module.css in React.js used for?</h3><br></br>
                       
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(53, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor53 || this.originalButtonColor,
                                color: this.state.buttonColor53 === 'green' || this.state.buttonColor53 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            a. Managing component state</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(54, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor54 || this.originalButtonColor,
                                color: this.state.buttonColor54 === 'green' || this.state.buttonColor54 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            b.  Defining global styles</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(55, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor55 || this.originalButtonColor,
                                color: this.state.buttonColor55 === 'green' || this.state.buttonColor55 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            c. Handling routing in React applications</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(56, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor56 || this.originalButtonColor,
                                color: this.state.buttonColor56 === 'green' || this.state.buttonColor56 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            d. Styling React components using CSS Modules</button><br></br>
                     </div>
                </div> <br />

                <div className="row">
                    <div className="col-1">
                        <h3>15. Which method starts a server in ExpressJS?</h3><br></br>

                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(57, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor57 || this.originalButtonColor,
                                color: this.state.buttonColor57 === 'green' || this.state.buttonColor57 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            a. app.start</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(58, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor58 || this.originalButtonColor,
                                color: this.state.buttonColor58 === 'green' || this.state.buttonColor58 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            b. app.run</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(59, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor59 || this.originalButtonColor,
                                color: this.state.buttonColor59 === 'green' || this.state.buttonColor59 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            c. app.listen</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(60, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor60 || this.originalButtonColor,
                                color: this.state.buttonColor60 === 'green' || this.state.buttonColor60 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            d. app.execute</button><br></br>
                    </div>
                </div> <br />

                <div className="row">
                    <div className="col-1">
                        <h3>16. How do you apply multiple CSS classes to a React element when using CSS Modules?</h3><br></br>
                        
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(61, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor61 || this.originalButtonColor,
                                color: this.state.buttonColor61 === 'green' || this.state.buttonColor61 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            a. Separate class names with a comma</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(62, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor62 || this.originalButtonColor,
                                color: this.state.buttonColor62 === 'green' || this.state.buttonColor62 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            b. Separate class names with a space</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(63, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor63 || this.originalButtonColor,
                                color: this.state.buttonColor63 === 'green' || this.state.buttonColor63 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            c. Use the applyClassNames function</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(64, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor64 || this.originalButtonColor,
                                color: this.state.buttonColor64 === 'green' || this.state.buttonColor64 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            d. It's not possible to apply multiple classes</button><br></br>
                    </div>
                </div> <br />

                <div className="row">
                    <div className="col-1">
                        <h3>17. What is the purpose of lifting state up in React?</h3><br></br>
                        
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(65, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor65 || this.originalButtonColor,
                                color: this.state.buttonColor65 === 'green' || this.state.buttonColor65 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            a. To share state between sibling components</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(66, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor66 || this.originalButtonColor,
                                color: this.state.buttonColor66 === 'green' || this.state.buttonColor66 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            b. To enhance performance</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(67, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor67 || this.originalButtonColor,
                                color: this.state.buttonColor67 === 'green' || this.state.buttonColor67 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            c. To interact with APIs</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(68, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor5 || this.originalButtonColor,
                                color: this.state.buttonColor68 === 'green' || this.state.buttonColor68 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            d. To persist state</button><br></br>
                    </div>
                </div> <br />

                <div className="row">
                    <div className="col-1">
                        <h3>18. Which library is commonly used for global state management in React?</h3><br></br>
                        
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(69, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor69 || this.originalButtonColor,
                                color: this.state.buttonColor69 === 'green' || this.state.buttonColor69 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            a. jQuery</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(70, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor70 || this.originalButtonColor,
                                color: this.state.buttonColor70 === 'green' || this.state.buttonColor70 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            b. Redux</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(71, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor71 || this.originalButtonColor,
                                color: this.state.buttonColor71 === 'green' || this.state.buttonColor71 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            c. Axios</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(72, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor72 || this.originalButtonColor,
                                color: this.state.buttonColor72 === 'green' || this.state.buttonColor72 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            d. Lodash</button><br></br>
                    </div>
                </div> <br />

                <div className="row">
                    <div className="col-1">
                        <h3>19. What does immutability in React state management mean?</h3><br></br>
                        
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(73, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor73 || this.originalButtonColor,
                                color: this.state.buttonColor73 === 'green' || this.state.buttonColor73 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            a. The state cannot be updated</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(74, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor74 || this.originalButtonColor,
                                color: this.state.buttonColor74 === 'green' || this.state.buttonColor74 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            b. The state should not be directly modified</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(75, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor75 || this.originalButtonColor,
                                color: this.state.buttonColor75 === 'green' || this.state.buttonColor75 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            c. The state is hidden</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(76, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor76 || this.originalButtonColor,
                                color: this.state.buttonColor76 === 'green' || this.state.buttonColor76 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            d. The state is always public</button><br></br>
                    </div>
                </div> <br />

                <div className="row">
                    <div className="col-1">
                        <h3>20. What is the primary advantage of using CSS Modules in React?</h3><br></br>
                        
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(77, true)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor77 || this.originalButtonColor,
                                color: this.state.buttonColor77 === 'green' || this.state.buttonColor77 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                        >
                            a. Encapsulation of styles to avoid naming conflicts</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(78, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor78 || this.originalButtonColor,
                                color: this.state.buttonColor78 === 'green' || this.state.buttonColor78 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            b. Faster rendering of components</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(79, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor79 || this.originalButtonColor,
                                color: this.state.buttonColor79 === 'green' || this.state.buttonColor79 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            c. Easier integration with third-party libraries</button>
                        <br></br>
                        <button
                            type="button"
                            onClick={() => this.handleButtonClick(80, false)}
                            style={{
                                marginBottom: '8px',
                                width: '25%',
                                backgroundColor: this.state.buttonColor80 || this.originalButtonColor,
                                color: this.state.buttonColor80 === 'green' || this.state.buttonColor80 === 'red' ? 'white' : 'black', fontSize: '16px', fontWeight: 'bold',
                            }}
                         >
                            d. Improved performance in complex applications</button><br></br>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuizComponent;