import { useState } from "react";
import { CTA } from "../components";

const resumeUrl = "https://drive.google.com/file/d/1e8GhtV_yt3z2ynFVXd8ZmiZYLjowaBl9/view?usp=sharing"; 

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Resume-manu vahan (2).pdf"; 
    link.click();
    setIsDownloading(false);
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Resume
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        Want to know more about my skills, experience, and education? You can download my full resume below!
      </p>

      <div className="mt-5 text-center">
        <button
          className="neo-brutalism-white neo-btn"
          onClick={handleDownload}
          disabled={isDownloading}
        >
          {isDownloading ? "Downloading..." : "Download My Resume"}
        </button>
      </div>

      <hr className="border-slate-200 my-10" />

      <CTA />
    </section>
  );
};

export default Resume;
