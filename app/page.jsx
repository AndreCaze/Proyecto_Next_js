import { Kanit } from 'next/font/google'

//Variable of the imported Google Fonts
const kanit = Kanit({ subsets: ['latin'], weight: ["400"], style: ["italic"] });

//Main Page Template
function Home() {
  return (
    <div className="bg-primary h-screen w-full">
      <h1 className={`${kanit.className} text-white h-screen w-full text-center m-5 text-[40px] `}>
        Home
      </h1>
    </div>
    
  );
}

export default Home;