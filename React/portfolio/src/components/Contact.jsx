import React, { useState } from "react";
import vg from "../assets/vg.png";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: "0",
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: "0",
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });
      toast.success("Message sent");
      setDisableBtn(false);
      setEmail("");
      setName("");
      setMessage("");

    } catch (error) {
      toast.error("Error");
      console.log(error);
      setDisableBtn(false);
    }
  };
  return (
    <div id="contact">
      <section>
        <motion.form {...animations.form} onSubmit={submitHandler}>
          <h2>Contact Me</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            required
          />

          <motion.button
            className={disableBtn ? "disableBtn" : ""}
            disabled={disableBtn}
            {...animations.button}
            type="submit"
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="" />
      </aside>
    </div>
  );
};

export default Contact;
