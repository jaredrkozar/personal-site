import { useParams } from "react-router-dom";
import { appList } from '../Apps/BaseApp.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { AppStoreButton, GithubButton, IPhoneButton, IPadButton, MacButton, WatchButton } from "../Components/Buttons.js";
import { useState } from "react";

function AppPage() {
  const { slug } = useParams();
  const app = appList[slug];
  document.title = app.name;
  const [screenshots, setScreenshots] = useState(app.macScreenshots);

  const iPhoneButtonsClicked = () => {
    console.log(app.iPhoneScreenshots.length)
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

  return (
    <div class="space-y-20 ml-5 relative left-20 top-24">
      <div className="relative gap-6 flex flex-wrap">
          <img class="object-cover h-40 w-40 rounded-xl" src={app.appIcon} alt="app icon"></img>
          <div className="grid grid-rows-2 gap-y-2">
              <h1 class="text-5xl font-bold">{app.name}</h1>
              <h1 class="text-4xl italic">{app.language}</h1>
              <div className="relative gap-6 flex flex-wrap">
                <AppStoreButton link="www.google.com"></AppStoreButton>
                <GithubButton link="www.google.com"></GithubButton>
              </div>
            </div>
        </div>
        <h1 class="text-5xl font-bold">Screenshots</h1>

        <div className="relative gap-6 flex flex-wrap">
          {app.watchScreenshots ? <WatchButton onClick={watchButtonsClicked}></WatchButton> : null}
          {app.iPhoneScreenshots ? <IPhoneButton onClick={iPhoneButtonsClicked}></IPhoneButton> : null}
          {app.iPadScreenshots ? <IPadButton onClick={iPadButtonsClicked}></IPadButton> : null}
          {app.macScreenshots ? <MacButton onClick={macButtonsClicked}></MacButton> : null}
        </div>

        <div className="relative top-4 right-20 container mx-auto">
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
  );
}

export default AppPage;