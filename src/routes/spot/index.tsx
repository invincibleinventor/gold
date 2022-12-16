//@ts-ignore
import { component$, useClientEffect$ } from '@builder.io/qwik';
import { useStore } from '@builder.io/qwik';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '~/services/firebase';
import { supabase } from '~/services/firebase';
import { $ } from '@builder.io/qwik';
export const users = ['invincibleinventor@gmail.com','admin@thetvs.com','bhargavanrajeshr@gmail.com','aish160490@gmail.com','erp.thetvs2021@gmail.com','srameshnba@gmail.com','ttsparentscarnival@gmail.com']


export default component$(() => {
  const stoot = useStore({
    isLoggedIn:false,
    user:''
  })
  useClientEffect$(() => {
    onAuthStateChanged(auth, (user) => {
      stoot.isLoggedIn = !!user;
      if(user?.email!=null && user?.email != undefined){stoot.user = user?.email}

    })
  })
 




const handleSubmit$ = $(async (event:any)=>{
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = form.name2.value;
    const classs='Spot Registration';
    const adm=form.adm.value;
    const parents = form.parents.value;
    const children = form.child.value;
    let dts = new Date()
    const date = new Date()
    dts= new Date(date.getTime());
   await supabase.from('Log').upsert({
        "NAME":name,"CLASS":classs,"ADM NO":adm,"ADULTS":parents,"CHILDREN":children ,"TIME":dts })
        alert('Logged Data')  

})
return(
    <>
 <div class="flex flex-col items-center content-center lg:py-20 py-10 mt-16 lg:mt-0">
      <div class="mx-auto w-full">


    {(!(stoot.isLoggedIn) && !(users.includes(stoot.user))) &&
    <h1 class="my-4 text-2xl text-white font-semibold font-poppins mx-auto">No Admin Access</h1>
    }
    {((stoot.isLoggedIn) && (users.includes(stoot.user))) &&
<div>
    
<form class={`mx-auto my-8 md:my-16 lg:my-20 rounded-xl lg:rounded-2xl p-8 md:p-16 md:px-10 bg-black bg-opacity-30  md:w-3/5 lg:w-2/4 xl:w-2/5 `} preventdefault:submit onSubmit$={handleSubmit$}>
      <h1 class="font-poppins text-white text-[28px] font-bold text-center">{"Spot Registration"}</h1>
      <h1 class="font-poppins text-white opacity-80 text-lg my-4 leading-relaxed mt-2 md:mt-3  font-medium text-center mb-10">{"Register people on the spot. No qr required"}</h1>
      
      <div>

<div class="flex flex-col mb-10">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Name</label>
<input  name="name2" id="name" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6"  >
</input>
</div>





<div class="flex flex-col mb-10">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Phone Number</label>
<input name="adm" id="adm" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6"  >
</input>
</div>


<div class="flex flex-col mb-10">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Adults Number</label>
<input name="parents" id="parents" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6"  >
</input>
</div>

<div class="flex flex-col mb-10">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Children Number</label>
<input   name="child" id="child" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6"  >
</input>
</div>


<div class="flex flex-col mb-10">
<button type="submit" class="py-5 text-lg px-6 font-semibold bg-black bg-opacity-30 rounded-md w-full shadow-2xl text-white font-poppins">{"Log this participant"}</button>
</div>
</div>

</form>
</div>
}



        </div>
        </div>

    </>
)
})
