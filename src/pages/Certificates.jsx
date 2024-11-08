import { CTA } from "../components";

const certificates = [
  {
    name: "Software Engineer Intern",
    issuer: "HackerRank",
    date: "July 2024",
    link: "https://drive.google.com/file/d/1qhGjp9CG74XX7JaREMDOBv08sMIGOtAH/view?usp=sharing",
  },
  {
    name: "Public Policy BootCamp 2024",
    issuer: "Rishihood University",
    date: "June 2024",
    link: "https://drive.google.com/file/d/1hIoke-WVHRkP_RwDyuabIx_osYOSVqMn/view?usp=sharing", 
  },
  {
    name: "Entrepreneurship and Innovation",
    issuer: "Rishihood University",
    date: "Feburary 2024",
    link: "https://drive.google.com/file/d/1I0H0Ab5wmDRI3iQlGzdYBjncB9EInnRw/view?usp=sharing", 
  },
  {
    name: "Avadhanakala",
    issuer: "Centre for Human Sciences Rishihood University",
    date: "December 2023",
    link: "https://drive.google.com/file/d/1hoj2fIlwCAWIM2jLvzxAjfBFvffS-GhV/view?usp=drive_link", 
  },

];

const Certificates = () => {
  return (
    <section className="max-container py-10">
      <h1 className="head-text">
        My <span className="blue-gradient_text drop-shadow font-semibold">Certificates</span>
      </h1>

      <p className="text-slate-500 mt-5 leading-relaxed">
        Below are some of the certifications I've earned over the years to enhance my skills and stay up-to-date with the latest technologies.
      </p>

      <div className="mt-10">
        <h3 className="subhead-text">My Certifications</h3>

        <ul className="mt-6 space-y-6">
          {certificates.map((cert) => (
            <li key={cert.name} className="p-6 bg-white shadow-md rounded-md hover:bg-gray-50 transition-all">
              <p className="font-semibold text-xl">{cert.name}</p>
              <p className="text-sm text-gray-500">
                Issued by {cert.issuer} in {cert.date}
                
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-3 inline-block"
              >
                View Certificate
              </a>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-slate-200 my-10" />

      <CTA />
    </section>
  );
};

export default Certificates;
