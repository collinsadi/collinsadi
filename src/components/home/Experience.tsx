import { GoArrowUpRight } from "react-icons/go";
export const Experience = () => {
  return (
    <section className="w-full my-20">
      <div className="w-full text-left pb-5 flex items-center justify-between md:flex-row flex-col">
        <h3 className="text-4xl">Experience</h3>

        <div>
          <a className="text-2xl font-bold flex items-center" href="">
            Browse full resume{" "}
            <span>
              <GoArrowUpRight />
            </span>{" "}
          </a>
        </div>
      </div>

      <div className="w-full my-10 flex items-center justify-between md:flex-row flex-col">
        <div className="md:w-[45%] border-t-2 pt-10 flex items-center ju">
          <div>
            <img
              src="https://cdn.prod.website-files.com/60e640d00fdb1e0bd76fae59/65553ec54895aba06185c4b8_agency-logo-webfolio-x-webflow-template.svg"
              alt=""
            />
          </div>

          <div className="ml-3">
            <div className="flex items-center">
              <h3>Rewod Technologies</h3>

              <div className="w-10 h-[1px] bg-black mx-4"></div>

              <h3>2023</h3>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mt-3">
                Frontend Developer
              </h3>
            </div>
          </div>
        </div>

        <div className="md:w-[45%] border-t-2 pt-10 mt-20 md:mt-0 flex items-center ju">
          <div>
            <img
              src="https://cdn.prod.website-files.com/60e640d00fdb1e0bd76fae59/65553ec54895aba06185c4b8_agency-logo-webfolio-x-webflow-template.svg"
              alt=""
            />
          </div>

          <div className="ml-3">
            <div className="flex items-center">
              <h3>Crypto Smart</h3>

              <div className="w-10 h-[1px] bg-black mx-4"></div>

              <h3>2024</h3>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mt-3">Backend Developer</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
