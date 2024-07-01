import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) tx -= 25;
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) tx += 25;
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Shreya Agarwal</h3>
                  <span>Uttar Pradesh, India</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3> Arjun Verma</h3>
                  <span>California, USA</span>
                </div>
              </div>
              <p>
                Deciding to earn my degree at Edusity was an incredible choice.
                The welcoming community, cutting-edge facilities, and dedication
                to academic excellence have far surpassed my hopes.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Meera Bhatt</h3>
                  <span>Moscow, Russia</span>
                </div>
              </div>
              <p>
                Choosing Edusity for my studies was one of the best decisions
                I've made. The nurturing community, advanced facilities, and
                relentless pursuit of academic excellence have gone beyond my
                expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Yash Khanna</h3>
                  <span>Tokyo, Japan</span>
                </div>
              </div>
              <p>
                Opting for Edusity for my degree was a fantastic decision. The
                supportive atmosphere, modern facilities, and unwavering focus
                on academic excellence have greatly impressed me.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
