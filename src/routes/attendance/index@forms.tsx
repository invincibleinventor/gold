//@ts-ignore
import { component$, useClientEffect$ } from '@builder.io/qwik';
import { useStore } from '@builder.io/qwik';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '~/services/firebase';
import { supabase } from '~/services/firebase';
import { QRReader } from '~/integrations/react/registration';
import { $ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
export const users = ['invincibleinventor@gmail.com','bhargavanrajeshr@gmail.com','aish160490@gmail.com','erp.thetvs2021@gmail.com','srameshnba@gmail.com','goldenjubileeprince@gmail.com',"ttsparentscarnival@gmail.com"]


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
 

  const state = useStore({
    qr:'',
    name:'',
    adm:0,
    class:'',
    adults:0,
    children:0,
    input:''
  })
   
    const fetch = $(async(res:any='ADM NO') => {
        const {data,error} = await supabase.from('Total').select('*').eq(res,state.adm)
        if(error){
    
            alert(error)
        }
        else{
            if(data){
                state.name=String(data[0]["STUDENT NAME"])
                state.class=String(data[0]["CLASS"])
                state.adm=Number(data[0]["ADM NO"])
                state.adults=Number(data[0]["PARENTS NUMBER"])
                state.children=Number(data[0]["CHILDREN NUMBER"])
    
            }
        }
    })
const getResults  = $(async (res:any)=>{
    state.qr = res
   const {data,error}= await supabase.from('Mapping').select('*').eq('ID',Number(res))
   if(error){
    alert(error)

    

   }
   else{
    if(data){
        console.log(data[0])
    state.adm=Number(data[0]["Adm No"])

   await fetch()
    }
   }
})

const getAdm  = $(async (res:any)=>{
  let nodename = 'ADM NO'
  if(res.length<=6){
    nodename='ROLL NO'
  }
state.qr = res
  state.adm=res

 await fetch(nodename)
  }
)




const handleSubmit$ = $(async (event:any)=>{
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = form.name2.value;
    const classs=form.class.value;
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
 <div class="flex flex-col items-center content-center ">
      <div class="mx-auto w-full">


    {(!(stoot.isLoggedIn) && !(users.includes(stoot.user))) &&
    <h1 class="my-4 text-2xl text-white font-semibold font-poppins mx-auto">No Admin Access</h1>
    }
    {((stoot.isLoggedIn) && (users.includes(stoot.user))) &&
<div>
    
<div class={``} preventdefault:submit onSubmit$={handleSubmit$}>
<form class={`mx-auto  mt-3 mb-3 rounded-xl lg:rounded-2xl `} preventdefault:submit onSubmit$={handleSubmit$}>
          

          

          <div class="bg-white mb-3 rounded-lg border border-neutral-300 relative">
           <div class="h-3 w-full rounded-t-lg bg-yellow-600  "></div>
           <div class="py-5 px-6">        <div class="">        <h1 style="line-height:1.25;" class="font-google text-black text-[24pt]  font-normal text-left">{"Attendance Logging"}</h1>
           <h1 style="font-family: 'Roboto';
       font-weight: 400;
       font-size: 11pt;
       line-height: 1.5;
       letter-spacing: 0;
       margin-top:30px; margin-bottom:12px">{"Log the Attendance"}</h1>
       </div>
       <div style="    border-top: 1px solid #dadce0;
     
     width: 100%;" class="absolute left-0 my-3"></div>
     <div style="font-family: Roboto,Arial,sans-serif;
     font-size: 14px;
     font-weight: 400;
     letter-spacing: .2px;
     line-height: 20px; margin-top:42px; color:#5f6368">{stoot.user}</div>
           </div>
           </div>
   
   
      <div class={state.qr?``:'hidden'}>

<div class="co">
<label class="coin">Name</label>
<input disabled value={state.name} name="name2" id="name" class="coout"  >
</input>
</div>


<div class="co">
<label class="coin">Class</label>
<input disabled value={state.class} name="class" id="class" class="coout"  >
</input>
</div>


<div class="co">
<label class="coin ">Admission Number</label>
<input disabled value={state.adm} name="adm" id="adm" class="coout">
</input>
</div>


<div class="co">
<label class="coin">Adults Number</label>
<input  value={state.adults} name="parents" id="parents" class="coout">
</input>
</div>

<div class="co">
<label class="coin">Children Number</label>
<input  value={state.children} name="child" id="child" class="coout"  >
</input>
</div>


<div class="mb-4">
<button type="submit" class="subm">{"Log this participant"}</button>
</div>
</div>
<div class={state.qr?'hidden':'flex flex-col mb-3 rounded-lg border px-7 py-6 border-neutral-300 bg-white'}>
<QRReader onResult$={(result:any) => {
  
          if (result) {
            console.log(result.text)
            getResults(result.text)
          }}} constraints={{
            facingMode: 'environment'
        }}
        />
          
</div>


</form>
<div class={state.qr?'hidden':''}>
<h1 class="coin mx-auto text-center mb-4">Or</h1>
<div class="co">
<label class="coin">Type ID On QR</label>
<input type="number"  onChange$={(e:any)=>state.input=e.target.value} class="coout"  >
</input>
</div>
<div class="flex flex-col mb-4">
<button onClick$={async (e:any)=>(e.preventDefault(),getResults(state.input))}  class="subm">{"Check with ID Number"}</button>
</div>
<h1 class="coin mx-auto text-center mb-4">Or</h1>
<div class="co">
<label class="coin">Type Admission/Roll Number</label>
<input type="number"  onChange$={(e:any)=>state.input=e.target.value} class="coout"  >
</input>
</div>
<div class="flex flex-col mb-4">
<button onClick$={async (e:any)=>(e.preventDefault(),getAdm(state.input))}  class="subm">{"Check with Adm or Roll no"}</button>
</div>
</div>

</div>
</div>
}



        </div>
        </div>

    </>
)
})

export const head: DocumentHead = {
  title: 'Attendance - The TVS School',
};