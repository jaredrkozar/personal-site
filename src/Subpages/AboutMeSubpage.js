import NavBar from "../NavBar/NavBar";
import Picture from "../Images/jared-picture.jpeg"
import Footer from  "../Footer/Footer";

function AboutMeSubpage() {
  return (

    <div class="w-full bg-inherit relative min-h-screen">
        <div className="flex flex-col fixed w-full bg-inherit z-10">
            <NavBar showBackButton={true}/>
        </div>

        <div className="ml-5 relative mr-5 space-y-10 py-28">
                <div className="text-5xl font-bold">
                    <h1>About Me</h1>
                </div>
                <br></br>
                <div className="text-2xl">
                    <img class="float-right h-80 w-80 rounded-full relative m-5" src={Picture}></img>
                    <div className="relative mr-5">
                        <h1>Hi, my name is Jared Kozar, and I am a senior computer science major at the University of Hartford. My passion in life is to create software that will help people more productive, especially those who are visually impaired. </h1>
                        <br></br>
                        <h1>When I'm not programming, I love talking walks around Central Park, reading books, or trying out many new foods at some of Manhattan's awesome restaurants.</h1>
                    </div>
                </div>
                <Footer></Footer>
            </div>
    </div>
  );
}

export default AboutMeSubpage;