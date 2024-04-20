import NewCollection from "./components/NewCollection";
import { ScopriDiPiù } from "./components/ScopriDiPiù";
import { BannerPub } from "./components/shared/BannerPub";
import { Story } from "./components/shared/Story";
import { TwoGender } from "./components/shared/TwoGender";

function App() {
  return (
    <div>
      <BannerPub/>
      <TwoGender/>
      <Story/>
      <ScopriDiPiù/>
      <NewCollection/>
      
    </div>
  );
}

export default App;
