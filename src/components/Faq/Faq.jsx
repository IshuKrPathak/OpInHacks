import React, { useRef, useState } from "react";
import "../Faq/Faq.css";
import spaceLines from "../../assets/space-lines.png";
// import { Faq } from "../../components/Faq/Faq.json";

export const Faq = () => {
  const faqData = [
    {
      question: "Who can participate?? ",
      reply:
        "OpinHacks welcomes all and presents you with a chance to be an enthusiastic coder who is passionate about learning, developing and growing together.",
    },
    {
      question:
        "Can we bring our own team or do we have to form a team at the event?",
      reply:
        "Participants can either bring their own team or form a team at the event. The team size should consist of 2 to 4 individuals.",
    },
    {
      question: "Is there any registration fee?",
      reply: "FREE. This hackathon is free for all participants.",
    },
    {
      question: "Accommodation /food??",
      reply: " Don't worry about where to stay and what to eat! We've got you covered. All participants will be cozy and comfortable in the college hostels with all the necessary amenities and meals.Plus, there will be unlimited coffee available to keep you fueled and focused. It's time to hack and relax! "
    },
    {
      question: "What should you bring with you for the hackathon?",
      reply:
        "A laptop and necessary charging equipment Any software or hardware tools needed for your project A valid government-issued ID for verification purposes A positive attitude towards collaboration",
    },
    {
      question: "Where will the event take place?",
      reply:
        `The venue of the event will be Bhilai Institute of Technology, Durg.`,
      links: "https://maps.app.goo.gl/Xg6qmbtKg8DXxEgZ8",  
    },
    {
      question: "Where can you find teammates?",
      reply:
        "If you do not have a team and are looking for people with a specific tech stack, you can join our discord server to network with others and form your teams.",
         links: "https://discord.gg/Gwztum9snV"  
      },
    {
      question: "More specific themes and problem statement will be disclosed soon??",
      reply:
        "Whichever track you choose, you can ideate & build either a software or a hardware project!",
        
    },
    {
      question: "Have a question aside from these?",
      reply:
        "Reach out to us at : ",
        links: "opinhacks@gmail.com",
    },
  ];

  const faqTab = (question, reply, links, index) => {
    return (
      <>
        <div className="faq-tab">
          
          <input
            className="faq-input"
            type="checkbox"
            name="faq"
            id={`id${index}`}
            // onChange={(e) => {
            //   setInputCheck(e.target);
            // }}
            // onClick={handleCross}
          />
          <label htmlFor={`id${index}`}>
            <h2>{question}</h2>
          </label>
          <div className="faq-content">
            <h5>{reply}</h5>
            {links ? <a href={links} target="_blank" className="faq-links">{links}</a>: " "}
          </div>
          
        </div>
      </>
    );
  };
  // const [inputCheck, setInputCheck] = useState();
  // const handleCross = () => {
  //   const checkedInput = document.querySelector('input[name="faq"]:checked');

  //     if (inputCheck && inputCheck.checked === checkedInput.checked) {

  //       document.querySelector('input[name="faq"]:checked').checked = false;
  //       console.log("running");

  //     }
  // };

 

  return (
    <section id="Faq" className="faq-section">
      <img className="space-lines space-line-footer"  src={spaceLines} alt="" />
      <h1>FAQ's</h1>
      <div className="faqs-container">
        {/* <div className="faq-tab">
          <input
            className="faq-input"
            type="checkbox"
            name="faq"
            id="id1"
            // onChange={(e) => {
            //   setInputCheck(e.target);
            // }}
            // onClick={handleCross}
          />
          <label htmlFor="id1">
            <h2>Is pizza legal ?</h2>
          </label>
          <div className="faq-content">
            <h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              minima est exercitationem recusandae odit reiciendis pariatur
              ducimus ipsum, veritatis deleniti.
            </h5>
          </div>
        </div> */}
        {/* {faqTab(1)}
        {faqTab(2)}
        {faqTab(3)}
        {faqTab(4)}
        {faqTab(5)}
        {faqTab(6)}
        {faqTab(7)}
        {faqTab(8)}
        {faqTab(9)}
        {faqTab(10)} */}

        {faqData.map((data, index) => {
          return faqTab(data.question, data.reply, data.links, index);
        })}
      </div>
    </section>
  );
};
