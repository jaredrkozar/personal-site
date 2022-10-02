import { useParams } from "react-router-dom";
import { appList, otherAppList } from '../Apps/BaseApp.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { AppStoreButton, GithubButton, IPhoneButton, IPadButton, MacButton, WatchButton, CommandLineButton } from "../Components/Buttons.js";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { DetailStyle } from "../Components/TextStyles.js";
import Footer from  "../Footer/Footer";

function AppPage() {
  const { slug } = useParams();
  const app = appList[slug] ?? otherAppList[slug];
  console.log(app);
  document.title = app.name;
  const [screenshots, setScreenshots] = useState(app.iPhoneScreenshots ?? app.iPadScreenshots ?? app.macScreenshots ?? app.commandLineScreenshots);

  const iPhoneButtonsClicked = () => {
    setScreenshots(app.iPhoneScreenshots)
  };

  const iPadButtonsClicked = () => {
    console.log(app.iPadScreenshots.length)
    setScreenshots(app.iPadScreenshots)
  };

  const macButtonsClicked = () => {
    setScreenshots(app.macScreenshots)
  };

  const watchButtonsClicked = () => {
    setScreenshots(app.watchScreenshots)
  };

  const CommandLineButtonsClicked = () => {
    setScreenshots(app.commandLineScreenshots)
  };
  return (
    <div class="w-full bg-inherit relative">
       <div className="flex flex-col fixed w-full bg-inherit z-10">
        <NavBar showBackButton={true}/>
      </div>
      <div class="space-y-4 relative top-28 left-20 mr-20 lg:mr-28">
      <div className="relative gap-6 flex flex-wrap">
          <img class="object-cover h-40 w-40 rounded-3xl" src={app.appIcon} alt="app icon"></img>
          <div className="grid grid-rows-2 gap-y-2">
              <DetailStyle mainText={app.name} detailText={app.language} isItalic={true}></DetailStyle>
              <div className="relative gap-6 flex flex-wrap h-10">
                {app.appStoreLink ? <AppStoreButton link="www.google.com"></AppStoreButton> : null}
                <GithubButton link={app.githubLink}></GithubButton>
              </div>
            </div>
        </div>

        <div className="space-y-8">
        {app.technologies ? 
          <div>
          <h1 className="text-5xl font-bold">
          Technologies
        </h1>
        
          <div className="flex flex-wrap">
        
        {app.technologies.map((tag, id) => (
          <h1 key={tag.id}>
            <h1 className="bg-blue-500 text-white p-2 m-2 rounded-md">{tag}</h1>
          </h1>
        ))}
        </div>

          </div> : null}
      </div>

      <div className="space-y-8">
      <h1 class="text-5xl font-bold">Screenshots</h1>

      <div className="relative gap-6 flex flex-wrap">
        {app.watchScreenshots ? <WatchButton onClick={watchButtonsClicked}></WatchButton> : null}
        {app.iPhoneScreenshots ? <IPhoneButton onClick={iPhoneButtonsClicked}></IPhoneButton> : null}
        {app.iPadScreenshots ? <IPadButton onClick={iPadButtonsClicked}></IPadButton> : null}
        {app.macScreenshots ? <MacButton onClick={macButtonsClicked}></MacButton> : null}
        {app.commandLineScreenshots ? <CommandLineButton onClick={CommandLineButtonsClicked}></CommandLineButton> : null}
      </div>

        <div className="relative space-y-5 right-20 container mx-auto">
          <Swiper
          modules={[Navigation, Keyboard]}
          className="object-cover"
          tag="section"
          wrapperTag="ul"
          navigation
          keyboard={{ enabled: true }}
          spaceBetween={10}
          breakpoints={{
            100: { slidesPerView: 1},
            768: { slidesPerView: 2},
            1024: { slidesPerView: 3},
          }}
          onInit={(swiper) => console.log('Swiper initialized!', swiper)}
          onSlideChange={(swiper) => {
            console.log('Slide index changed to: ', swiper.activeIndex);
          }}
          loop={true}
          onReachEnd={() => console.log('Swiper end reached')}
          >

          {screenshots.map((user, id) => (
            <SwiperSlide>
            <img 
                className="rounded-xl h-64 left-16 relative"
                src={user} key={id}
            />
            </SwiperSlide>
          ))}
            </Swiper>
        </div>
      </div>
      <DetailStyle mainText="Description" detailText={app.longDescription} isItalic={false}></DetailStyle>
    </div>
    <div className="relative py-28">
      <Footer></Footer>
    </div>
    </div>
  );
}

export default AppPage;