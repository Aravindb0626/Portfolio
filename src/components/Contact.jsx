import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [popup, setPopup] = useState({ show : false, message : "", sucess : false})

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_21btjur", 
        "template_7w57gj6",
        form.current,
        "XVUrmgqJYuD4_wga7"
      )
      .then(
        () => {
          setPopup({ show : true, message :"✅ Message sent successfully!", success: true})
          e.target.reset();
        },
        () => {
          setPopup({show : true, message :"❌ Failed to send message. Try again.", success: false})
        }
      );

      setTimeout(() => setPopup({ show : false, message : "", sucess : false}), 3000)
  };

  return (
     <section id="contact" className="relative bg-[#111] text-white py-24 px-6 md:px-20">

      {/* ✅ Popup Notification */}
      <AnimatePresence>
        {popup.show && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-4 rounded-xl shadow-xl text-center ${
              popup.success ? "bg-green-500" : "bg-red-500"
            }`}
          >
            <p className="text-white text-lg font-semibold">{popup.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold">Have Any Question?</h2>
        <p className="text-gray-400 mt-2">
          It is a long established fact that a reader will be distracted <br />
          content of a page when looking.
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#1a1a1a] p-6 sm:p-10 rounded-xl shadow-xl w-full max-w-4xl mx-auto"
      >
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input name="user_name" type="text" placeholder="Your Name*" required className="w-full bg-transparent border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-500" />

            <input name="user_email" type="email" placeholder="Your Email*" required className="w-full bg-transparent border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-500" />
          </div>

          <textarea name="message" rows="5" required placeholder="Message.." className="w-full bg-transparent border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-500"></textarea>

          <div className="text-center">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto px-10 py-3 rounded-full font-semibold bg-gradient-to-r from-yellow-500 to-green-500 text-black shadow-lg transition-all">
              Send Message
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
