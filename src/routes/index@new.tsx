import { component$, } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';
import { supabase } from '~/services/firebase';


export default component$(() => {
  
/*

 <div class="flex my-auto mx-auto  flex-col space-y-3">
  <div class="space-y-4 flex flex-col co">
  <label class="coin">Bus Attendance</label>
  <Link class="subm" href="/admin">Attendance</Link>
  </div>
  <div class="space-y-4 flex flex-col co">
  <label class="coin">Day Boarding</label>
  <Link class="subm" href="/db">Attendance</Link>
  </div>
  <div class="space-y-4 flex flex-col co">
  <label class="coin">CS Lab</label>
  <Link class="subm" href="/cs">Attendance</Link>
  <Link class="subm" href="/tathva">Tathva</Link>
  <Link class="subm" href="/recnote">Record Note</Link>
  <Link class="subm" href="/assignment">Assignment</Link>
  <Link class="subm" href="/lab">Lab Manual</Link>
  </div>
  
 </div>
 */
  return (
    <div class="flex flex-col content-center h-auto w-screen font-jost">
     <div class="px-4 pr-3 sm:px-4 sm:pr-4 bg-blue-500 flex flex-row content-center items-center lg:py-1 -py-2 border-b border-neutral-100"><h1 class="text-white font-inter font-medium sm:font-semibold text-md lg:text-lg mr-auto">Welcome!</h1><button onclick$={()=>window.location.href='https://thetvsschool.retool.com'} class="outline-none my-auto font-medium text-white mr-2 text-sm md:text-md p-2 py-[6px] m-2 font-inter" id="admin">Admin</button> <button onclick$={()=>supabase.auth.signOut} class="outline-none font-medium text-white ml-2 mr-2 text-blue-500 bg-white rounded-xs text-sm md:text-md p-2 py-[6px] m-2 px-4 font-inter">Logout</button> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ant-design text-white font-semibold md:text-lg text-lg font-jost ml-4 mr-4 mb-0 md:mr-0" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" onclick="openNav()" data-icon="ant-design:menu"><path fill="currentColor" d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg></div>

<div class="">
   <h1 class="text-md text-gray-700 font-jost p-5 py-3 pb-0 font-medium">Day Boarding</h1>
   <ul class="rounded-lg w-auto my-auto flex flex-col p-2 px-0 text-gray-900" id="formlist">
     
      <Link href="/db" class="px-6 py-2   w-full rounded-t-lg font-inter text-sm md:text-md flex flex-row content-center items-center ">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ep mr-2 inline-flex my-auto items-center content-center" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" data-icon="ep:document">
         <path fill="currentColor" d="M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"></path>
      </svg>
      <span class="my-auto items-center content-center inline-flex">Attendance</span>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ep ml-auto inline-flex my-auto items-center content-center  " width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" data-icon="ep:arrow-right">
         <path fill="currentColor" d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512L340.864 831.872a30.592 30.592 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
      </svg>
      </Link>
   </ul>
</div>
<div class="">
   <h1 class="text-md text-gray-700 font-jost p-5 py-3 pb-0 font-medium">Transport</h1>
   <ul class="rounded-lg w-auto my-auto flex flex-col p-2 px-0 text-gray-900" id="formlist">
     
      <Link href="/admin" class="px-6 py-2   w-full rounded-t-lg font-inter text-sm md:text-md flex flex-row content-center items-center ">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ep mr-2 inline-flex my-auto items-center content-center" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" data-icon="ep:document">
         <path fill="currentColor" d="M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"></path>
      </svg>
      <span class="my-auto items-center content-center inline-flex">Attendance</span>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ep ml-auto inline-flex my-auto items-center content-center  " width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" data-icon="ep:arrow-right">
         <path fill="currentColor" d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512L340.864 831.872a30.592 30.592 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
      </svg>
      </Link>
   </ul>
</div>
<div class="">
   <h1 class="text-md text-gray-700 font-jost p-5 py-3 pb-0 font-medium">Comp. Sci Department</h1>
   <ul class="rounded-lg w-auto my-auto flex flex-col p-2 px-0 text-gray-900" id="formlist">
     
      <Link href="/cs" class="px-6 py-2   w-full rounded-t-lg font-inter text-sm md:text-md flex flex-row content-center items-center ">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ep mr-2 inline-flex my-auto items-center content-center" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" data-icon="ep:document">
         <path fill="currentColor" d="M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"></path>
      </svg>
      <span class="my-auto items-center content-center inline-flex">Attendance</span>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ep ml-auto inline-flex my-auto items-center content-center  " width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" data-icon="ep:arrow-right">
         <path fill="currentColor" d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512L340.864 831.872a30.592 30.592 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
      </svg>
      </Link>
      <Link href="/tathva" class="px-6 py-2   w-full rounded-t-lg font-inter text-sm md:text-md flex flex-row content-center items-center ">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ep mr-2 inline-flex my-auto items-center content-center" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" data-icon="ep:document">
         <path fill="currentColor" d="M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"></path>
      </svg>
      <span class="my-auto items-center content-center inline-flex">Tathva</span>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ep ml-auto inline-flex my-auto items-center content-center  " width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" data-icon="ep:arrow-right">
         <path fill="currentColor" d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512L340.864 831.872a30.592 30.592 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
      </svg>
      </Link>
      <Link href="/assignment" class="px-6 py-2   w-full rounded-t-lg font-inter text-sm md:text-md flex flex-row content-center items-center ">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ep mr-2 inline-flex my-auto items-center content-center" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" data-icon="ep:document">
         <path fill="currentColor" d="M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"></path>
      </svg>
      <span class="my-auto items-center content-center inline-flex">Assignment</span>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ep ml-auto inline-flex my-auto items-center content-center  " width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" data-icon="ep:arrow-right">
         <path fill="currentColor" d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512L340.864 831.872a30.592 30.592 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
      </svg>
      </Link>
      <Link href="/recnote" class="px-6 py-2   w-full rounded-t-lg font-inter text-sm md:text-md flex flex-row content-center items-center ">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ep mr-2 inline-flex my-auto items-center content-center" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" data-icon="ep:document">
         <path fill="currentColor" d="M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"></path>
      </svg>
      <span class="my-auto items-center content-center inline-flex">Record Note</span>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ep ml-auto inline-flex my-auto items-center content-center  " width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" data-icon="ep:arrow-right">
         <path fill="currentColor" d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512L340.864 831.872a30.592 30.592 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
      </svg>
      </Link>
      <Link href="/lab" class="px-6 py-2   w-full rounded-t-lg font-inter text-sm md:text-md flex flex-row content-center items-center ">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ep mr-2 inline-flex my-auto items-center content-center" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" data-icon="ep:document">
         <path fill="currentColor" d="M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"></path>
      </svg>
      <span class="my-auto items-center content-center inline-flex">Lab Manual</span>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ep ml-auto inline-flex my-auto items-center content-center  " width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" data-icon="ep:arrow-right">
         <path fill="currentColor" d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512L340.864 831.872a30.592 30.592 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"></path>
      </svg>
      </Link>

   </ul>
</div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Internal Tools - The TVS School',
};
