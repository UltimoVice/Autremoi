import React from "react";
import { ScopriDiPiu } from "./shared/ScopriDiPiu";
import NewCollection from "./shared/NewCollection";
import { StoryBanner } from "./StoryBanner";

const PageStory = () => {
  return (
    <>
       <StoryBanner />
       <ScopriDiPiu />
       <NewCollection />
    </>
  );
};

export default PageStory;
