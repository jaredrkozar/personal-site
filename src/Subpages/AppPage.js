import { useParams } from "react-router-dom";
import { appList } from '../Apps/BaseApp.js';
import Swiper, { Navigation, Pagination, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});

function AppPage() {
  const { slug } = useParams();
  const app = appList[slug];
  document.title = app.name;

  return (
    <div class="space-y-28 ml-5 relative left-20 top-24">
      <div className="relative gap-6 flex flex-wrap">
          <img class="object-cover h-40 w-40 rounded-xl" src={app.appIcon} alt="app icon"></img>
          <div className="grid grid-rows-2 gap-y-2">
              <h1 class="text-5xl font-bold">{app.name}</h1>
              <h1 class="text-4xl italic">{app.language}</h1>
            </div>
        </div>
        <h1 class="text-5xl font-bold">Screenshots</h1>

        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    </div>
  );
}

export default AppPage;