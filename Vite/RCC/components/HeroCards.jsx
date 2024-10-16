import React from "react";
import Cards from "./Cards";

const HeroCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Cards
            bg="bg-red-500"
            tittle="For Developers"
            text="Browse our React jobs and start your career today"
            linkPath="/jobs.html"
            linkText="Browse Jobs"
          />
          <Cards
            bg="bg-indigo-100"
            tittle="For Employers"
            text="List your job to find the perfect developer for the role"
            linkPath="/add-job.html"
            linkText="Add Job"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroCards;
