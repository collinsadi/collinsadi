export const WorkSkills = () => {
  return (
    <div className="my-20">
      <div className="w-full text-left pb-5">
        <h3 className="text-4xl">My work skills</h3>
      </div>

      <div className="w-full flex items-center justify-between my-10 md:flex-row flex-col">
        <div className="md:w-[33%] border p-5 mb-5 md:mb-0 rounded-xl">
          <div></div>

          <div>
            <h3 className="text-3xl font-semibold">
              Full-Stack <br /> Development
            </h3>
          </div>

          {/* tags */}

          <div className="my-4 flex items-center">
            <div className="px-4 py-2 rounded-full border-2 w-fit">
              React JS
            </div>

            <div className="px-4 py-2 rounded-full border-2 w-fit mx-2">
              Node JS
            </div>

            <div className="px-4 py-2 rounded-full border-2 w-fit">Next JS</div>
          </div>

          {/* Description */}

          <div>
            <p>
              I build robust and scalable web applications using modern
              frameworks and technologies, focusing on seamless user
              experiences.
            </p>
          </div>
        </div>

        <div className="md:w-[33%] border p-5   mb-5 md:mb-0  rounded-xl">
          <div></div>

          <div>
            <h3 className="text-3xl font-semibold">
              Mobile <br /> Development
            </h3>
          </div>

          {/* tags */}

          <div className="my-4 flex items-center">
            <div className="px-4 py-2 rounded-full border-2 w-fit">
              React Native
            </div>

            <div className="px-4 py-2 rounded-full border-2 w-fit mx-2">
              Expo
            </div>

            <div className="px-4 py-2 rounded-full border-2 w-fit">
              IOS/Android
            </div>
          </div>

          {/* Description */}

          <div>
            <p>
              I create intuitive and high-performing mobile applications for
              both iOS and Android platforms using modern technologies.
            </p>
          </div>
        </div>

        <div className="md:w-[33%] border p-5 rounded-xl">
          <div></div>

          <div>
            <h3 className="text-3xl font-semibold">
              Blockchain <br /> Development
            </h3>
          </div>

          {/* tags */}

          <div className="my-4 flex items-center flex-wrap">
            <div className="px-4 py-2 rounded-full border-2 w-fit">
              Solidity
            </div>

            <div className="px-4 py-2 rounded-full border-2 w-fit mx-2">
              Wagmi
            </div>

            <div className="px-4 py-2 rounded-full border-2 w-fit">Hardhat</div>
          </div>

          {/* Description */}

          <div>
            <p>
              I build Web3 applications by developing Solidity smart contracts
              and integrating them with frontend user interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
