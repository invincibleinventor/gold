import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import { url } from 'inspector';
import Radium from 'radium';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAmZmuckTBZuUwetU3xROn0DBmdFjGZpvE",
  authDomain: "ttstvsschool.firebaseapp.com",
  projectId: "ttstvsschool",
  storageBucket: "ttstvsschool.appspot.com",
  messagingSenderId: "557949322894",
  appId: "1:557949322894:web:564892b7f3b3600ff7abdf",
  measurementId: "G-H56FQJJJ16"
};

const app = initializeApp(firebaseConfig);

export default component$(() => {


  return (
    <> 
   
    <div style="
 width: 100%;
    height: calc(100vh - 60px);
    position: relative;
    background-color: #000;
    background-size: 60px 80px;
    background-image: linear-gradient(90deg,hsla(0,0%,100%,.1) 1px,transparent 0),linear-gradient(180deg,hsla(0,0%,100%,.1) 1px,transparent 0);
    max-height: 900px;
    min-height: 653px;
    overflow: hidden;
    " class=" pt-8 ">
       <div class="fade-in-border"  style="border: 12px solid #e8e8e8;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all .5s ease;"></div>
    <div class="relative w-screen ">
      <div class="fade-in-text mt-5">
  <h1 style="z-index:1;" class="  left-0 right-0 text-[45px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-neue font-bold opacity-80 mt-[2px] text-center text-neutral-700">Swarn<span style="text-underline-offset: 15px;" class="text-neutral-700 underline">otsav</span></h1>
  <h1 style="z-index:0;position: absolute;right:2px; bottom: -9px;
   left: 1%; " class="  left-0 right-0 mb-3  text-[45px] sm:text-[60px] md:text-[80px] mr-2 lg:text-[100px] font-neue font-bold  text-center text-[#e8e8e8]">Swarn<span style="text-underline-offset: 15px; text-decoration-color: #e8e8e8;" class="text-[#e8e8e8] underline">otsav</span></h1>
</div>  <div class="fade-in-other absolute left-0 right-0 mx-auto mt-12 md:mt-10  flex items-center content-center lg:bg-banner bg-no-repeat bg-center " id="banner" > <img class=" hiddenmain mx-auto fade-in-main  rounded-full w-[200px] h-[200px] md:w-[236px] md:h-[236px] " src="https://i.picsum.photos/id/43/300/300.jpg?hmac=Sm3OKu2moFYAaBOpd9SmwpJSwp54NijrGe-PZXNMBmc"></img></div>
</div>
<img class="hero-date" src="/svg/hero-date.svg" style="opacity: 1; transform: none;"></img>

  <div style="width: 100vw;
    position: absolute;
    bottom: 0px;
    right: 0px;
    display: flex;
    align-items: end;
    justify-content: between;
    flex-direction: column;">
<img class="slide-in" src="hero-biggest 1.svg" style="opacity: 1; transform: none;"></img>

    </div>
    <a href="/events" class="fade-in-slideup registeranim py-[10px] mt-[306px] md:mt-[340px] mx-auto absolute  md:py-[10px] px-[24px] right-0 left-0 w-max  text-black bg-[#e8e8e8] font-bold font-plex text-[16px]  mx-auto md:text-[18.5px] eventbutton" style="clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 90% 0);">View All Events</a>

 </div>
ok
 </>
 
  );
});

export const head: DocumentHead = {
  title: 'Swarnotsav',
};
