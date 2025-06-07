import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full-Stack Web Developer & Computer Vision Enthusiast
            </h3>

            <p className="text-muted-foreground">
            I have a strong interest in full-stack web development and computer vision. I’ve built several real-time, responsive applications using modern stacks like React.js, Node.js, Express.js, MongoDB, and Tailwind CSS, with a focus on clean architecture and great user experience.
            </p>

            <p className="text-muted-foreground">
            I'm passionate about solving real-world problems through code and constantly push myself to learn new technologies and best practices. Whether it's building scalable APIs, optimizing frontend performance, or exploring AI-driven features, I'm always ready to take on new challenges and contribute meaningfully to impactful projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/2022ucp1677_SDE.pdf" download 
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Computer Vision</h4>
                  <p className="text-muted-foreground">
                  Building computer vision solutions using CNNs and OpenCV, with a focus on performance and real-world applicability.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analysis & Visualization</h4>
                  <p className="text-muted-foreground">
                  Creating insightful and interactive data visualizations using tools like Matplotlib, Seaborn, and Plotly to drive data-driven decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
