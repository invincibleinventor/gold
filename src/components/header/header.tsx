import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
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
const provider = new GoogleAuthProvider();

const auth = getAuth(app);
export function signin(){
signInWithPopup(auth, provider)
  .then(() => {
   
  }).catch(() => {
   
   
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
   console.log(user)
  } else {
    console.log('no')
  }
});



export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="lg:p-4 fixed w-screen  ">
         <header class="lg:rounded-lg  bg-gradient-to-r from-blue-600 to-blue-500 shadow shadow-lg py-3 lg:py-3 relative   flex-col flex-col-reverse lg:flex lg:flex-row items-center content-center">
      <div class="flex flex-col items-start content-start  mr-auto lg:mb-0 mb-3 px-4 md:pl-6 mt-3 lg:mt-0">
        <h1 class=" font-mona  lg:text-[24px] text-[26px] ml-2  text-white bg-clip-text  font-bold w-auto flex">Swarnotsav</h1>

      </div>
      <div class="flex flex-col lg:absolute lg:w-max lg:mx-auto lg:left-0 lg:right-0 lg:flex-row py-3 pt-0 px-[10px] lg:p-0 lg:px-0  lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-7  lg:items-center lg:content-center ">
       
      <a  class="text-white font-lato text-md  lg:text-[16px] font-semibold opacity-80 pl-4 lg:ml-0 ">Home</a>
      <a  class="text-white font-lato  text-md lg:text-[16px] font-semibold  opacity-80 pl-4 lg:ml-0  ">Verseny'22</a>
      <a  class="text-white font-lato text-md   lg:text-[16px] font-semibold opacity-80 pl-4 lg:ml-0  ">About Us</a>
      <a  class="text-white font-lato  text-md lg:text-[16px] font-semibold opacity-80 pl-4 lg:ml-0 ">Contact Us</a>
      
      </div>
      <div class="pl-7 lg:pl-0 mb-2 lg:mb-0">
<button class="lg:py-[10px] lg:mr-4  lg:px-7   lg:bg-white lg:bg-opacity-[50%] rounded-sm md:rounded-lg font-lato shadow-md text-blue-800 lg:ml-7 ml-2 mt-1 lg:mt-0 text-md lg:text-[17px] md:ml-0 ml-auto font-bold ">Register</button>
</div>
    </header>
    </div>

  );
});
