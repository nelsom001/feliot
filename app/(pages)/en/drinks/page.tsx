import Topper, { TopperType } from "@/app/components/js/carousel/carousel";
import { VIPDRINKSMENU } from "@/app/components/js/config";
import GridBox from "@/app/components/js/grid/grid";

export default function Home() {
  const data: TopperType = {
    img: "/assets/eat.jpg",
    text: "Settle in and let us pour you a drink. Our bar menu is designed to cater to every taste, from classic soft drinks and beers to a curated selection of fine whiskeys, cognacs, and tequilas.",
    title: "Drinks Menu",
  };
  return (
    <div>
      <Topper data={data} />

      {VIPDRINKSMENU.map((e, i) => (
        <GridBox
          data={{
            title: e.category,

            data: e.data,
          }}
          key={i}
        />
      ))}
    </div>
  );
}
