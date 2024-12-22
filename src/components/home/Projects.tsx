import { ProjectCard } from "../ui/ProjectCard";

export const Projects = () => {
  return (
    <section className="w-full">
      <div className="w-full text-center pb-5">
        <h3 className="text-4xl">Top Projects</h3>
      </div>

      <div>
        <ProjectCard
          projectName="Safemind"
          type="Website"
          title="Anonymous Mental Health Support"
          description="
Safemind is a decentralized mental health platform that connects users anonymously with professional therapists or listeners, it ensures secure, private, and judgment-free interactions. The platform also features its native token, SMD, which powers transactions and rewards within the ecosystem, fostering a seamless and engaging user experience."
          image="https://res.cloudinary.com/dnz4clv0s/image/upload/v1734380088/dtj37tef4nafak1esbic.png"
          link="https://safemind.app"
        />

        <ProjectCard
          projectName="AuraRoom"
          type="Website"
          title="Anonymous Messaging Platform"
          description="
AuraRoom is an anonymous chat platform where users can create password-protected rooms, share links with friends, and chat using randomly assigned fruit names to maintain anonymity. Conversations are encrypted, ephemeral, and dynamic, with real-time typing visibility. It's designed for secure, private, and fun interactions without sign-ups. Trusted by over 1,200 users globally, AuraRoom offers a playful and secure chatting experience. "
          image="https://res.cloudinary.com/dnz4clv0s/image/upload/v1734379052/er7rgab8ybdra9rawfhx.png"
          link="https://auraroom.xyz"
        />

        {/* <ProjectCard /> */}
      </div>
    </section>
  );
};
