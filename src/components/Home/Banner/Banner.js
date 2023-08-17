import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import "./Banner.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { HashLink } from "react-router-hash-link";
import { red } from "@mui/material/colors";

const Banner = () => {
  function Item(props) {
    return (
      <Paper>
        <div className="banner-container">
          <img src={props.item.img} alt="" />
          <div className="banner-text tracking-in-expand">
            <Typography component="h4" variant="h5">
              {props.item.name}
            </Typography>
            <Typography component="p">{props.item.description}</Typography>

            <HashLink
              smooth
              to="/appointment#appointment"
              className="text-style"
            >
              <Button
                sx={{
                  mt: 2,
                  borderRadius: 150,
                  blockSize: 35,
                }}
                variant="contained"
                className="CheckButton"
              >
                <h5>Make an Appointment</h5>
              </Button>
            </HashLink>
          </div>
        </div>
      </Paper>
    );
  }
  const items = [
    {
      name: "Consult with experts Online 24/7",
      description:
        "Get Online support from oue expert Doctor 24/7 and lead a healthy life",
      img: "https://img.freepik.com/premium-photo/doctor-white-background_38810-7325.jpg?w=1800",
    },
    {
      name: "Unlock the Power of Personalised Wellness",
      description: "Probably the most random thing you have ever seen!",
      img: "https://img.freepik.com/free-photo/wooden-spoon-filled-with-pills-medical-supplies_23-2148439033.jpg?size=626&ext=jpg&uid=R105309617&ga=GA1.2.1203045657.1691589692&semt=ais",
    },

    {
      name: "Check Your Mind-Health Conditions Regularly",
      description:
        "Upto date with your Mind-Health conditions, prevention is always better than cure",
      img: "https://img.freepik.com/free-photo/mindfulness-meditation-patient-young-woman-doctor-keep-calm-hold-hands-mudra-namaste-gesture_1258-120094.jpg?w=1800&t=st=1692095210~exp=1692095810~hmac=4f8d1728e8227056267a60735f3f49790f32c11496ddfb2a58915740309d4770",
    },
  ];
  return (
    <div>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
