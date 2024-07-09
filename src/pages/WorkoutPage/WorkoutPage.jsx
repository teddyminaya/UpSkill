import React from "react";
import "./WorkoutPage.scss";
import Footer from "../../components/Footer/Footer";
import Timer from "../../components/Timer/Timer";
import { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import Gym from "../../assets/images/gym.jpg"

const WorkoutPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

  return (
    <>
      <div className="workout-page">
        <div className="workout-image">
          <div className="image-placeholder">
          <img src={Gym} className="image-placeholder"></img>
          </div>
        </div>
        <div className="workout-details">
          <h2 className="workout-title">WORKOUT</h2>
          <div className="workout-stats">
            <div className="stat">
              <span className="stat-label">Duration</span>
              <span className="stat-value">45 min</span>
            </div>
            <div className="stat">
              <span className="stat-label" onClick={handleOpen}>
                Exercises
              </span>
              <span className="stat-value">6 exercises</span>
            </div>
            <div className="stat">
              <span className="stat-label">Rest</span>
              <span className="stat-value">30 sec</span>
            </div>
          </div>
          <Timer></Timer>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{fontSize: '2.0rem'}}>
            NBA WORKOUT 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '1.8rem', 
        lineHeight: 1.5  }}>
            4 BOX SQUATS <br />
            4 Bench Press <br />
            40 Push Ups <br />
          </Typography>
        </Box>
      </Modal>
      <Footer></Footer>
    </>
  );
};

export default WorkoutPage;
