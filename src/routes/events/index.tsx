import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Card from '~/components/card/card';



export default component$(() => {
    return(
      <div class="flex flex-col items-center content-center lg:py-20 py-10 mt-16 lg:mt-0">
      <div class="mx-auto w-full">


      <div class="flex flex-row lg:ml-20 lg:h-56 h-72 items-center content-center">
    <div class="w-3 h-44 lg:block shadow-lg hidden my-auto rounded-full bg-white bg-opacity-70"></div>
    <div class="flex flex-col my-auto lg:pl-10  my-20 lg:py-0 lg:pt-0 ">
    <h1 class="font-bold text-white drop-shadow-xl font-poppins mb-2 lg:mb-[4px] lg:text-blue-50  text-4xl md:text-5xl lg:text-5xl mx-auto lg:mx-0 block">Verseny'22</h1>
    <h1 class=" font-poppins leading-loose font-medium  lg:font-normal lg:pl-1 sm:text-lg text-md mx-auto lg:mx-0 my-4 mt-2 md:mt-4 lg:my-0 text-white lg:text-blue-100  lg:text-left text-center lg:text-[20px] md:w-4/6 md:leading-9 px-9 md:px-0 lg:mt-3 lg:leading-8">Verseny'22 is the flagship event of Swarnotsav. It refers to an array of interschool events organized to engage and empower young pupils. <span class="hidden sm:inline-block xl:block"> Scroll down to view them.</span></h1>
    <a href="/registration" class="lg:mx-0 mx-6 bg-white shadow-2xl font-medium lg:font-semibold font-poppins text-blue-900 px-10 mt-3 mb-3 block lg:hidden lg:mt-0 transition-all ease-linear duration-100 hover:scale-105 py-3 rounded-md text-lg text-center"><span class="mx-auto">Register Now</span></a>

    </div>
    </div>
     
    <div class="grid 2xl:grid-cols-3  md:grid-cols-2 grid-cols-1  grs lg:mx-20 lg:my-10 lg:mt-0 mt-0 ">
      
    <Card title="Turn Coat" url="turn-coat" src="https://picsum.photos/300/200" desc="It is an event conducted by the English department promoting usage of profilic vocabulary amongst children"></Card>
    <Card title="Turn Coat" url="turn-coat" src="https://picsum.photos/300/200" desc="It is an event conducted by the English department promoting usage of profilic vocabulary amongst children"></Card>
    <Card title="Turn Coat" url="turn-coat" src="https://picsum.photos/300/200" desc="It is an event conducted by the English department promoting usage of profilic vocabulary amongst children"></Card>
    <Card title="Turn Coat" url="turn-coat" src="https://picsum.photos/300/200" desc="It is an event conducted by the English department promoting usage of profilic vocabulary amongst children"></Card>
    <Card title="Turn Coat" url="turn-coat" src="https://picsum.photos/300/200" desc="It is an event conducted by the English department promoting usage of profilic vocabulary amongst children"></Card>
    
    </div>
      </div>
      </div>
    )
})
export const head: DocumentHead = {
    title: 'Swarnotsav',
  };