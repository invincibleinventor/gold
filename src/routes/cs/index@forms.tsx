//@ts-ignore
import { component$, useClientEffect$ } from '@builder.io/qwik';
import { useStore } from '@builder.io/qwik';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth } from '~/services/firebase';
import dt from '../config.json'
import { $ } from '@builder.io/qwik';
import { supabase } from '~/services/firebase';
import { Ov, QRReader } from '~/integrations/react/registration';
export async function check(adm){
  const {data,error }= await supabase.from('Bus Log').select('*').eq('uid',adm)
  if(error){
    alert(error)

  }
  else{return data}
}
/*

<form preventdefault:submit onSubmit$={handleSubmit$}>
      <h1 class="font-poppins text-white text-lg md:text-[28px] font-bold text-center">{"Logger"}</h1>
      <h1 class="font-poppins text-white opacity-80 text-sm md:text-lg my-4 leading-relaxed mt-4 md:mt-4  font-medium text-center mb-10">{"Log attendance of the students"}</h1>
      

<div class={`${!state.qr?'hidden': 'flex flex-col mb-10'}`}>
<label class="text-white text-md md:text-lg font-poppins font-medium opacity-80 ">Name</label>
<input disabled value={state.name} name="name2" id="name" class="text-md md:text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6"  >
</input>
</div>

<div class={`${!state.qr?'hidden': 'flex flex-col mb-10'}`}>
<label class="text-white text-md md:text-lg font-poppins font-medium opacity-80 ">Admission</label>
<input disabled value={state.email} name="email" id="email" class="text-md md:text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6"  >
</input>
</div>
<div class={`${!state.qr?'hidden': 'flex flex-col mb-10'}`}>
<label class="text-white text-md md:text-lg font-poppins font-medium opacity-80 ">Bus Stop</label>
<input value={state.stop} name="stop" id="stop" class="text-md md:text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6"  >
</input>
</div>
<div class={`${!state.qr?'hidden': 'flex flex-col mb-10'}`}>
<label class="text-white text-md md:text-lg font-poppins font-medium opacity-80 ">Route</label>
<input value={state.route} name="stop" id="stop" class="text-md md:text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6"  >
</input>
</div>



<div class={`${!state.qr?'hidden': 'flex flex-col mb-10'}`}>
<label class="text-white text-md md:text-lg font-poppins font-medium opacity-80 ">Event</label>
<Options></Options>
</div>
<div class={`${!state.qr?'hidden': 'flex flex-col mb-10'}`}>
<button type="submit" class="py-5 text-md md:text-lg px-6 font-semibold bg-black bg-opacity-30 rounded-md w-full shadow-2xl text-white font-poppins">{"Log this participant"}</button>
</div>
*/

export const Options = component$(()=>{
    const a:any=Object.values(dt.bus)
    const eles = []
    for (let i=0;i<=a.length;i++){
        eles.push(<option value={a[i]}>{a[i]}</option>)

    }
    return(
        <select name="event" id="event" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6" style=" -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;">
{eles}
</select>
    )

})

    
export default component$(() => {
 
  const stoot = useStore({
    isLoggedIn:false,
    user:'',
    access:false
  })
  const state = useStore({
    hidden:true,
    name:'',
    loading:false,
    email:'',
    data:'',
    roll:'',
    input:'',
    qr:'',
    success:false,
    stop:'',
    route: '',maps:{}
  })
  useClientEffect$(() => {

    onAuthStateChanged(auth, async (user) => {
      stoot.isLoggedIn = !!user;
      state.loading=true

      if(user?.email!=null && user?.email != undefined){  const {data,error } =  await supabase
      .from('allowed').select('*').eq('id',user.email);if(data && data.length>0){stoot.access=true;const {data,error} = await supabase.from('Maps').select('*'); state.maps=data}else{console.log(error)}stoot.user = user?.email;state.loading=false}
state.loading=false
    })
  })
 
  

  const handleGoogleAuth = $(async () => {
    state.loading = true;
    try {
      await signInWithPopup(auth, new GoogleAuthProvider()).then((user)=>{
        async function upload(){
       const {error } =  await supabase
        .from('users')
        .insert({id:user.user.uid,email:user.user.email})
        if(error){
  console.log(error)
        }
        }
        
        upload()
        window.location.replace('/admin')
        state.loading=false
      });
    } catch (error: any) {
      alert(error.message);
    } finally {
      state.loading = false;
    }
  });
  const handleSubmit$ = $( async () => {
    
    const name = state.name;
    const adm = state.email;
    const stop = state.stop;
    const roll = state.roll;
    var route = state.route;
    var r = state.maps
    console.log(adm)
    const eve = "Entry"

    let dts = new Date()
    const date = new Date()
    dts= new Date(date.getTime() - date.getTimezoneOffset()*60000);
   
    var c=await check(adm)
    var bd = new Date(c?c["time"]:'null')
    var diffInMillis = dts.getTime() - bd.getTime()
    var isLessThan1Hour = diffInMillis < 60 * 60 * 1000;

   // var a=r.length
   /* for(let i = 0 ; i <a; i++){
      if(r[i]["Area"]==stop){
        route=r[i]["Route"]
      }
    }*/
    if(!isLessThan1Hour){
    const { error } = await supabase
    .from('Stud Log')
    .insert({ uid:adm,name:name, time:dts,event:eve, "roll no":roll })
    if(error){
      console.log(error)
        }
        else{
          state.success=true
          setTimeout(()=>{
            state.success=false
            state.qr=''
          },3000)
        }    

  }else{
    alert('You cannot enter same value again')
  }}

  )
  

  const getResults = $(async (res:any) => {
    state.qr=res
console.log(state.qr)
    let col = "Hash"
    if(res.length>8){
    col="Hash"

    }
    else if (res.length==8 )[
      col = "ADM NO"

    ]

const { data } = await supabase
.from('List')
.select("*")
.eq(col,`${res}`)
if(data && data.length!=0){state.data;state.roll=data[0]["ROLL NO"];state.name=data[0]["STUDENT NAME"];state.email=data[0]["ADM NO"];handleSubmit$()}else{console.log('no data')}

  })




return(
    <>
    {!(state.loading) &&
 <div class="flex flex-col items-center content-center ">
      {!(state.success) && 
      <div class="mx-auto w-full">


    {(!(stoot.isLoggedIn) && !(stoot.access)) && 
    <>
    <div class="my-auto flex flex-col content-center items-center">
    <h1 class=" mt-8  mb-4 text-sm md:text-md lg:text-lg text-center text-black font-normal font-sans ">{stoot.isLoggedIn?'No Admin Access':'Please sign in to your account'}</h1>
    <button class={stoot.isLoggedIn?`hidden`:`bg-blue-200  mx-auto font-semibold font-sans text-blue-700 px-10 transition-all ease-linear duration-100 hover:scale-105 py-3 rounded-md text-xs md:text-sm`} onClick$={()=>handleGoogleAuth()}>Sign In With Google</button>
    </div>
    </>
    }
        {((stoot.isLoggedIn) && !(stoot.access)) && 
        <>
        <div class="my-auto flex flex-col content-center items-center">
            <h1 class="mt-8  mb-4 text-sm text-center md:text-md lg:text-lg text-black font-normal font-sans mx-10">{'No admin access for this account. Please sign in to an account with admin access'}</h1>
            <button class={`bg-blue-200  mx-auto font-semibold font-sans text-blue-700 px-10 transition-all ease-linear duration-100 hover:scale-105 py-3 rounded-md text-xs md:text-sm`} onClick$={()=>handleGoogleAuth()}>Use Another Account</button>
</div>
            </>
        }

    {((stoot.isLoggedIn) && (stoot.access)) &&
<div class="h-[100vh]">

<QRReader className={state.qr?`hidden`:'my-5 mx-auto rounded-md h-96 w-96'} onResult$={(result:any) => {
  
          if (result) {
            getResults(result)
          }}} constraints={{facingMode: 'environment'}}/>
          <h1 className={state.qr?`hidden`:''} >{state.qr}</h1>
          <div className={state.qr?`hidden`:'flex items-center content-center mx-auto flex-col'}>         <h1 class="text-black  text-sm  md:text-md text-center mx-auto font-sans font-medium opacity-80 ">Or</h1>

          <input placeholder="Type Admission Number" className={state.qr?`hidden`:'block w-auto bg-white mx-10 focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-3 px-4 block appearance-none leading-normal focus:border-blue-400 text-sm md:text-md my-5'}  onChange$={(e:any)=>state.input=e.target.value} name="adm" id="adm" ></input>
  


          <button className={state.qr?`hidden`:'bg-blue-200 mx-10  font-semibold font-sans text-blue-700 px-10 transition-all ease-linear duration-100 hover:scale-105 py-3 rounded-md text-xs md:text-sm mx-auto'} onClick$={async (e:any)=>(e.preventDefault(),getResults(state.input))}>{"Check this number"}</button>
</div>
</div>

}



        </div>
}

{state.success && 
<div class="h-[100vh] flex  items-center content-center">
<img class="w-48 h-48 my-auto" src="/success.gif"/>
</div>
}
          </div>
}
{state.loading &&
<div class="h-[100vh] flex items-center content-center">
<Ov/>

</div>
}
    </>
)
})
