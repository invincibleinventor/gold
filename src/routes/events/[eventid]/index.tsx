import { component$ } from '@builder.io/qwik';
export default component$(() => {

  return (
    <div class="flex flex-col lg:flex-row mt-24 lg:mt-0">
      <div class="lg:w-1/2 md:p-20 p-10 lg:pr-10 lg:pl-[120px] lg:py-10">
        
<img src="https://picsum.photos/300/400" class="w-full shadow-2xl md:h-[526px] rounded-2xl"></img>
      </div>
      <div class="lg:w-1/2 md:px-20 px-10 lg:px-20 lg:py-16 flex flex-col ">
      <h1 class="font-bold text-white drop-shadow-xl font-poppins mb-3 lg:mb-6 lg:text-blue-50  text-4xl md:text-4xl xl:text-5xl mr-auto  block">Turn Coat</h1>
      <p class="font-medium text-white xl:pl-[6px]   font-inter mb-2 lg:mb-[4px] lg:text-blue-50 xl:text-xl text-lg mr-auto  block leading-loose">Turn Coat is an event conducted by the blah blah blah blah blah</p>
      <ul class="rules pl-10 py-5 text-white font-inter font-medium lg:text-xl text-lg">
      <li>Instruction 1</li>
      <li>Instruction 2</li>
      <li>Instruction 3</li>
      <li>Instruction 4</li>
      </ul>

      <p class="font-medium text-white xl:pl-[6px] mt-4  font-inter mb-2 lg:mb-[4px] lg:text-blue-50 xl:text-2xl text-xl mr-auto  block leading-loose">Report at <span class="font-bold">Venue</span> at <span class="font-bold">Timings</span>. <span class="mt-4 block xl:text-xl text-lg leading-loose">Bring all necessary items (if any). The judge is the ultimate decision maker and his/her judgment(s) stand(s) final.</span></p>





        
      </div>
      
    </div>
  );
});