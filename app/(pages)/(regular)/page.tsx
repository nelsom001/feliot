import { Topper, TopperType } from "../../components/js/carousel/carousel";
import { FOODMENU } from "../../components/js/config";

import GridBox from "../../components/js/grid/grid";

export default function Home() {
  const data: TopperType = {
    img: "/assets/eat.jpg",
    text: "We make sure every visit is an experience. We pride ourselves on offering a relaxed and sophisticated atmosphere, the perfect backdrop for our diverse menu and exquisite drinks.",
    title: "Welcome to Felioth Signature",
  };
  return (
    <div>
      <Topper data={data} />

      <GridBox
        data={{
          title: "Food Menu",

          data: FOODMENU,
        }}
      />
    </div>
  );
}
