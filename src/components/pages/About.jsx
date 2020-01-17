import React from 'react';
import flashCardIcon from '../../images/flashcardsIcon.png';

import styled from 'styled-components';

const About = () => {
  return (
    <>
      <AboutWrapper>
        <h1>About</h1>
        <div style={{ width: '30vw' }}>
          <div className="about">
            Relevocab is at the core a flashcards studying app.
            <br /> <br />
            This version currently targets users looking to expand Spanish
            vocabulary. Users create decks of cards to practice through either
            custom entry or using the Words search.
            <br /> <br />
            This project is created using React with Redux and hooks, with a
            Firebase backend. Relevant Vocabulary searches are populated using
            Wikipedia API and Words API, and translated using Google Translate
            API.
          </div>
          <div className="contact-form">
            <div className="feedback">Send Feedback / Comments</div>
            <div>What do you wish to see?</div>
            <div>Encounter a bug? What were you doing?</div>
            <br />
            <form
              action=""
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <input type="text" placeholder=" Name" />
              <textarea
                placeholder=" Write something..."
                cols="30"
                rows="5"
              ></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
      </AboutWrapper>

      <BGImage src={flashCardIcon} alt="" />
    </>
  );
};

export default About;

const AboutWrapper = styled.div`
  margin-left: 400px;
  margin-top: 15vh;
  font-size: 1.25em;
  .contact-form {
    margin-top: 8vh;
    form {
      display: 'flex',
      flex-direction: 'column'
    }
    input,
    textarea {
      margin: 5px 0;
    }
  }
  .feedback {
    font-weight: bold
  }

  button {
  color: #107bbd;
  margin-top: 5px;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  height: 50x;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #107bbd;
  outline: none;
  }

  .bgImage {
    position: absolute;
    top: 20vh;
    z-index: 0;
    right: 0;
    img {
      
    height: 50%;
    width: 50%;
    }
  }
`;

const BGImage = styled.img`
  position: absolute;
  top: 20vh;
  left: calc(300px + 40vw);
  height: 30%;
  width: auto;
`;