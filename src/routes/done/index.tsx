import {component$} from '@builder.io/qwik'
export default component$(()=>{
    return(
        <div class="flex flex-col space-y-5 items-center content-center my-44">
               <button class="  mx-auto font-semibold font-poppins text-white px-10 transition-all ease-linear duration-100 hover:scale-105 py-3 rounded-md text-lg" >Your response has been recorded!</button>

        <button class="bg-white shadow-2xl mx-auto font-semibold font-poppins text-blue-900 px-10 transition-all ease-linear duration-100 hover:scale-105 py-3 rounded-md text-lg" onClick$={()=>window.location.replace('/')}>Go Back</button>
    </div>
    )
})