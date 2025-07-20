import { GoArrowUpRight } from "react-icons/go";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const AboutMe = () => {
  return (
    <section className="w-full my-10 flex items-center  justify-between md:flex-row flex-col-reverse">
      <div className="md:w-[50%] w-full mt-5 md:mt-0">
        <h3 className="md:text-6xl text-4xl">
          Who’s behind all this <br className="hidden md:block" /> great work?
        </h3>

        <p className="mt-5 md:text-md text-xl">
          I'm Collins, a full-stack and blockchain developer proficient in
          technologies like Node.js, React, Typescript and Solidity. I create
          scalable, user-friendly web applications and automate workflows with
          bots. Passionate about blockchain, I build decentralized solutions and
          explore how technology can make a meaningful impact.
        </p>

        <div className="flex items-center mt-10 text-2xl">
          <a href="https://x.com/codellins" target="_blank">
            <div className="flex items-center">
              <h3 className="font-bold">
                <BsTwitterX />
              </h3>{" "}
              {/* <span className="ml-2">
              <GoArrowUpRight />
            </span> */}
            </div>
          </a>

          <a href="https://linkedin.com/in/collinsadi" target="_blank">
            <div className="flex items-center ml-5">
              <h3 className="font-bold">
                <FaLinkedin />
              </h3>{" "}
            </div>
          </a>

          <a href="https://github.com/collinsadi" target="_blank">
            <div className="flex items-center ml-5">
              <h3 className="font-bold">
                <FaGithub />
              </h3>{" "}
              {/* <span className="ml-2">
              <GoArrowUpRight />
            </span> */}
            </div>
          </a>

          <a href="https://collinsadi.hashnode.dev/" target="_blank">
            <div className="flex items-center ml-5">
              <h3 className="font-bold">
                <FaHashnode />
              </h3>{" "}
              {/* <span className="ml-2">
              <GoArrowUpRight />
            </span> */}
            </div>
          </a>
        </div>

        <div className="mt-10">
          <a href="https://cal.com/collinsadi/30min" target="_blank">
            <div className="flex items-center text-xl">
              <h3 className="font-bold">Book a call with me.</h3>{" "}
              <span className="ml-2">
                <GoArrowUpRight />
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className="md:w-[50%] w-full flex items-center justify-end">
        <img className="rounded-xl" src="/allien.JPG" alt="" />
      </div>
    </section>
  );
};
