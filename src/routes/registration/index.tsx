import { $, component$, useStore } from '@builder.io/qwik';
import { authuser } from '../../services/firebase';
import 'firebase/compat/auth';
import { supabase } from '../../services/firebase';


export const LoadingComponent = () => <div class="container" style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
 
</div>;

console.log(authuser)




export default component$(() => {
 

  const log = useStore({
    logged: false,
    loading: false
  });

 
 




 const handleSubmit$ = $( async (event: Event) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const email = form.email.value;
  const name = form.name2.value;
  const date = form.date.value;
  const classs = form.class.value;
  const schl = form.schl.value;
  const wa = form.wa.value;
  const ph = form.ph.value;

  const { error } = await supabase
  .from('Verseny')
  .insert({ uid:email,name:name, date:date,class:classs, school:schl,wa:wa,ph:ph })
  if(error){
if(error?.code=='23505'){alert('Someone has already registered with this email address')}
  }
  else{
    alert('Registered')
    location.href='/'
  }

});



  if(!log.logged){


  return (
    
    <>
        

    <div class="px-5 md:px-0 mt-24 lg:mt-0">
      <form class="mx-auto my-8 md:my-16 lg:my-20 rounded-xl lg:rounded-2xl p-8 md:p-16 md:px-10 bg-black bg-opacity-30  md:w-3/5 lg:w-2/4 xl:w-2/5" preventdefault:submit onSubmit$={handleSubmit$}>
      <h1 class="font-poppins text-white text-[28px] font-bold text-center">Common Registration</h1>
      <h1 class="font-poppins text-white opacity-80 text-lg my-4 leading-relaxed mt-2 md:mt-3  font-medium text-center mb-10">Fill the below form for registering to Swarnotsav</h1>
      

<div class="flex flex-col mb-10">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Name</label>
<input name="name2" id="name" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
</input>
</div>

<div class="flex flex-col mb-10">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Email</label>
<input name="email" id="email" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
</input>
</div>

<div class="flex flex-col mb-10">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Class</label>
<input name="class" id="class" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
</input>
</div>

<div class="flex flex-col mb-10">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Date</label>
<input name="date" id="date" type="date" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
</input>
</div>

<div class="flex flex-col mb-10">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">WhatsApp Number</label>
<input name='wa' id="whatsapp" type="number" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
</input>
</div>

<div class="flex flex-col mb-10">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Phone Number</label>
<input name="ph" id="phone" type="number" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
</input>
</div>

<div class="flex flex-col mb-10">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">School</label>
<input name="schl" id="school" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
</input>
</div>

<button type="submit" class="py-5 text-lg px-6 font-semibold bg-black bg-opacity-30 rounded-md w-full shadow-2xl text-white font-poppins">Register Now</button>


      </form>
    </div>
    </>
   
  )
  
  }
  else{
    return( <>
    <button onClick$={()=>
        console.log('ok')
      }
    >Register</button></>)
  }
  
  })
 