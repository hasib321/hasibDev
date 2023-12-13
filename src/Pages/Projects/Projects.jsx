import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Ridewave from "./Ridewave";
import TravelTrek from "./TravelTrek";
import GamingEvents from "./GamingEvents";
import TechBrandHub from "./TechBrandHub";

const Projects = () => {
  const [tabIndex, setTabIndex] = useState(0);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-8 mt-20">
      <div
        className="mt-12 pb-12 text-center"
        data-aos="flip-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <h4>Get To Know</h4>
        <h2 className="text-6xl font-bold">
          My <span className="text-[#663399]">Projects</span>
        </h2>
      </div>
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        data-aos="slide-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <TabList>
          <Tab>
            <span className="font-barlow "> Ridewave</span>
          </Tab>
          <Tab>TravelTrek</Tab>
          <Tab>GamingEvents</Tab>
          <Tab>TechBrandHub</Tab>
        </TabList>
        <TabPanel>
          <Ridewave></Ridewave>
        </TabPanel>
        <TabPanel>
          <TravelTrek></TravelTrek>
        </TabPanel>
        <TabPanel>
          <GamingEvents></GamingEvents>
        </TabPanel>
        <TabPanel>
          <TechBrandHub></TechBrandHub>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Projects;
