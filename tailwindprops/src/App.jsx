import { useState } from "react";
import "./App.css";
import { Card } from "./components/card.components";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-2 rounded-xl mb-3">My favs</h1>
      <div className=" flex">
        <Card
          username="wolverine"
          btnText="visit link"
          imgLink="https://the-comics-journal.sfo3.digitaloceanspaces.com/wp-content/uploads/2023/07/D7B703F6-3D6F-4CED-AE6E-D466B0E832F8-1010x1536.jpeg"
          quote="I'm the best there is at what I do, and what I do isn't very nice"
        />
        <Card
          username="deadpool"
          btnText="click me"
          imgLink="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/424b4e7e-df3c-4d76-a996-927cced18d13/devksi3-dd8abcd4-d3c0-48d7-a5ec-f9146bbbda13.png/v1/fit/w_750,h_1158/deadpool_comic_by_theericks_by_theeriiicks_devksi3-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAwMCIsInBhdGgiOiJcL2ZcLzQyNGI0ZTdlLWRmM2MtNGQ3Ni1hOTk2LTkyN2NjZWQxOGQxM1wvZGV2a3NpMy1kZDhhYmNkNC1kM2MwLTQ4ZDctYTVlYy1mOTE0NmJiYmRhMTMucG5nIiwid2lkdGgiOiI8PTMyMzYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4xuTujqNg38XaPkEfm_XOueYLNYWcc2t4Pe8SaioIHE"
          quote="Well, I May Be Super, But I'm No Hero."
        />
      </div>
    </>
  );
}

export default App;
