import type { NextPage } from "next";
import Head from "next/head";
import Opportunity from "../components/Opportunity";

const Opportunities: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Opportunities | TECC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Opportunities</h1>
        <div className="opportunityGrid">
          <Opportunity
            href="https://uva.wd1.myworkdayjobs.com/en-US/UVAJobs/job/Charlottesville-VA/Postdoctoral-Fellowship-in-Data-Science-and-Mobile-Health_R0037543"
            src="./favicon.ico"
            alt="Postdoctoral Fellowship in Cancer Health Disparities and Technology"
          >
            Postdoctoral Fellowship in Cancer Health Disparities and Technology
          </Opportunity>
          <Opportunity
            href="https://uva.wd1.myworkdayjobs.com/en-US/UVAJobs/details/Postdoctoral-Fellowship-in-Compassionate-Care--Compassionate-Care-Postdoctoral-Research-Associate-_R0040320"
            src="./favicon.ico"
            alt="Postdoctoral Fellowship in Compassionate Care"
          >
            Postdoctoral Fellowship in Compassionate Care
          </Opportunity>
          <Opportunity
            href="https://docs.google.com/document/d/1V9XJXWULqSbCyCVM3UTW-OjMbIKuClLV/edit?usp=sharing&ouid=114197689007378729669&rtpof=true&sd=true"
            src="./favicon.ico"
            alt="Student Opportunities"
          >
            Student Opportunities
          </Opportunity>
        </div>
      </main>
    </div>
  );
};

export default Opportunities;