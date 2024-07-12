"use client";

import RenderTeamCards from "./TeamCard";
import Dashboard from "./EventDashboard";
import Header from "./Header";

type MainTeamComponentProps = {
  eventID: string;
};

const MainTeamComponent = ({ eventID }: MainTeamComponentProps) => {
  return (
    <div className="mt-3 pl-2 lg:pr-2 mb-3.5 rounded-xl">
      <Header />
      <div className="flex flex-col  lg:flex-row gap-y-4 w-full ">
        <div className=" w-full pb-10 lg:pb-0 lg:w-1/3 mt-[95px] md:mt-[105px]">
          <Dashboard eventName={eventID} />
        </div>
        <div className="flex flex-col justify-center  items-center w-auto mt-[20px] lg:mt-[105px] gap-y-4">
          <RenderTeamCards eventName={eventID} />
        </div>
      </div>
    </div>
  );
};

export default MainTeamComponent;
