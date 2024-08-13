/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Contact.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { LazyMotion, domAnimation, m } from "framer-motion";
import qr from "../assets/projects/donate.jpg";
const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full overflow-hidden-web flex flex-col items-center"
    >
      <div className="w-full min-h-[200px] flex flex-col xl:w-[70%]">


        <div className="w-full flex justify-center items-center">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-full sm:w-[90%] md:w-[80%] sm:h-[600px] p-4 flex flex-col sm:flex-row gap-4  "
            >
              <div className="flex justify-center"></div>
              <img src={qr} className="aspect-square flex w-full object-scale-down rounded-3xl justify-center items-center border-2 p-5 border-primary-500" />
            </m.div>
          </LazyMotion>
        </div>
      </div>

    </div>
  );
};

export default Contact;
