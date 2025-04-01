import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Styled components
const SurveyWrapper = styled.div`
  position: relative;
  display: flex; /* Enable Flexbox */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  min-height: 100vh;
  background: url("https://imgs.search.brave.com/9pkatC8oTWiCP3DxjL-b7oDimTJwOmOko9A1SjgOz18/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ibGFjay1tYXAt/d29ybGQtd2l0aC1j/b3VudHJpZXMtYm9y/ZGVyc18xMTk5MTMy/LTgxMjU2LmpwZz9z/ZW10PWFpc19oeWJy/aWQ") no-repeat center center;
  background-size: cover;
  overflow: hidden;
  color: #fff;
  padding-top: 80px; /* Adjust for header height */
  padding-bottom: 60px; /* Adjust for footer height */
  cursor: none; /* Hide the default cursor */
`;

const Spotlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.89); /* Darker overlay for more contrast */
  pointer-events: none;

  &::after {
    content: "";
    position: absolute;
    top: ${(props) => props.y}px;
    left: ${(props) => props.x}px;
    width: 200px; /* Increase spotlight size */
    height: 200px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 0 0 50px 50px rgba(0, 0, 0, 0.74), /* Outer fade effect */
                0 0 0 9999px rgba(0, 0, 0, 0.5); /* Dark overlay outside spotlight */
    transform: translate(-50%, -50%);
  }
`;

const SurveyForm = styled.form`
  position: relative;
  background-color: #333;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  z-index: 1; /* Ensure the form is above the spotlight */
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
`;

const ProgressBar = styled.div`
  height: 5px;
  background-color: #555;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: "";
    display: block;
    height: 100%;
    width: ${(props) => props.progress}%;
    background-color: #fff;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #ddd;
  }
`;

// Component
function Survey() {
  const [step, setStep] = useState(1);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 5) setStep(step + 1);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Survey submitted!");
  };

  return (
    <>
      <Header />
      <SurveyWrapper onMouseMove={handleMouseMove}>
        <Spotlight x={cursorPosition.x} y={cursorPosition.y} />
        <SurveyForm>
          <Title>
            Step {step}:{" "}
            {step === 1
              ? "Personality and Travel Habits"
              : step === 2
              ? "Group Preferences"
              : step === 3
              ? "Travel Preferences"
              : step === 4
              ? "Safety and Comfort"
              : "Additional Information"}
          </Title>
          <ProgressBar progress={(step / 5) * 100} />
          {step === 1 && (
            <>
              <Label>Do you smoke?</Label>
              <Select required>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
              <Label>Do you drink?</Label>
              <Select required>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
              <Label>Do you enjoy partying?</Label>
              <Select required>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
              <Label>What type of activities do you prefer?</Label>
              <Select required>
                <option value="">Select</option>
                <option value="trekking">Trekking</option>
                <option value="camping">Camping</option>
                <option value="sightseeing">Sightseeing</option>
              </Select>
            </>
          )}
          {step === 2 && (
            <>
              <Label>What type of group do you want to join?</Label>
              <Select required>
                <option value="">Select</option>
                <option value="all-male">All-male</option>
                <option value="all-female">All-female</option>
                <option value="lgbtq">LGBTQ+ friendly</option>
                <option value="mixed">Mixed</option>
              </Select>
              <Label>Preferred age group?</Label>
              <Select required>
                <option value="">Select</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-50">36-50</option>
                <option value="50+">50+</option>
              </Select>
              <Label>Do you prefer solo or group travel?</Label>
              <Select required>
                <option value="">Select</option>
                <option value="solo">Solo</option>
                <option value="group">Group</option>
              </Select>
            </>
          )}
          {step === 3 && (
            <>
              <Label>Preferred mode of travel?</Label>
              <Select required>
                <option value="">Select</option>
                <option value="car">Car</option>
                <option value="train">Train</option>
                <option value="flight">Flight</option>
              </Select>
              <Label>Preferred accommodation type?</Label>
              <Select required>
                <option value="">Select</option>
                <option value="hotel">Hotel</option>
                <option value="hostel">Hostel</option>
                <option value="camping">Camping</option>
              </Select>
              <Label>Budget range for trips?</Label>
              <Select required>
                <option value="">Select</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Select>
            </>
          )}
          {step === 4 && (
            <>
              <Label>Are you comfortable sharing rooms?</Label>
              <Select required>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
              <Label>Any dietary restrictions?</Label>
              <Select required>
                <option value="">Select</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="none">None</option>
              </Select>
              <Label>Any medical conditions?</Label>
              <Select required>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </>
          )}
          {step === 5 && (
            <>
              <Label>What is your favorite travel destination?</Label>
              <Select required>
                <option value="">Select</option>
                <option value="beach">Beach</option>
                <option value="mountains">Mountains</option>
                <option value="city">City</option>
              </Select>
              <Label>Preferred travel season?</Label>
              <Select required>
                <option value="">Select</option>
                <option value="summer">Summer</option>
                <option value="winter">Winter</option>
                <option value="spring">Spring</option>
                <option value="autumn">Autumn</option>
              </Select>
              <Label>Additional preferences or comments?</Label>
              <textarea
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #555",
                  backgroundColor: "#000",
                  color: "#fff",
                  fontSize: "14px",
                  marginBottom: "15px",
                }}
                rows="4"
              ></textarea>
            </>
          )}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {step > 1 && <Button onClick={handlePrevious}>Previous</Button>}
            {step < 5 && <Button onClick={handleNext}>Next</Button>}
            {step === 5 && <Button onClick={handleSubmit}>Submit</Button>}
          </div>
        </SurveyForm>
      </SurveyWrapper>
      <Footer />
    </>
  );
}

export default Survey;