//@ts-ignore
import { component$, useClientEffect$ } from '@builder.io/qwik';
import { useStore } from '@builder.io/qwik';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth } from '~/services/firebase';
import dt from '../config.json'
import { $ } from '@builder.io/qwik';
import { supabase } from '~/services/firebase';
import { QRReader } from '~/integrations/react/registration';

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
    user:''
  })
  useClientEffect$(() => {
    onAuthStateChanged(auth, (user) => {
      stoot.isLoggedIn = !!user;
      if(user?.email!=null && user?.email != undefined){stoot.user = user?.email}

    })
  })
  const state = useStore({
    hidden:true,
    name:'',
    loading:true,
    email:'',
    data:'',
    input:'',
    qr:'',
    stop:''
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
      });
    } catch (error: any) {
      alert(error.message);
    } finally {
      state.loading = false;
    }
  });
  const handleSubmit$ = $( async (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = form.name2.value;
    const adm = form.email.value;
    const stop = form.stop.value
    console.log(adm)
    const eve = form.event.value;

    let dts = new Date()
    const date = new Date()
    dts= new Date(date.getTime() - date.getTimezoneOffset()*60000);

    const { error } = await supabase
    .from('Bus Log')
    .insert({ uid:adm,name:name, time:dts,event:eve,stop:stop })
    if(error){
      console.log(error)
        }
        else{
          alert('Logged')
        }    

  })

  const getResults = $(async (res:any) => {
    state.qr=res
console.log(state.qr)
    let col = "Hash"
    if(res.length>8){
    col="Hash"

    }
    else if (res.length==8 )[
      col = "Admission Num"

    ]

const { data } = await supabase
.from('Bus')
.select("*")
.eq(col,`${res}`)
if(data && data.length!=0){state.data;state.stop=data[0]["Bus Stop"];state.name=data[0]["StudName"];state.email=data[0]["Admission Num"];console.log(data)}else{console.log('no data')}

  })




return(
    <>
 <div class="flex flex-col items-center content-center lg:py-20 py-10 mt-16 lg:mt-0">
      <div class="mx-auto w-full">


    {(!(stoot.isLoggedIn) && !(stoot.user == "invincibleinventor@gmail.com")) &&
    <>
    <h1 class="my-6  mb-8 text-xl text-white font-semibold font-poppins ml-10">{stoot.isLoggedIn?'No Admin Access':'Please sign in to your account'}</h1>
    <button class={stoot.isLoggedIn?`hidden`:`bg-white shadow-2xl ml-10 font-semibold font-poppins text-blue-900 px-10 transition-all ease-linear duration-100 hover:scale-105 py-3 rounded-md text-md`} onClick$={()=>handleGoogleAuth()}>Sign In With Google</button>

    </>
    }
    {((stoot.isLoggedIn) && (stoot.user == "invincibleinventor@gmail.com")) &&
<div>
<div class={`mx-auto my-8 md:my-16 lg:my-20 rounded-xl lg:rounded-2xl p-8 md:p-16 md:px-10 bg-black bg-opacity-30  md:w-3/5 lg:w-2/4 xl:w-2/5 `} >

<form preventdefault:submit onSubmit$={handleSubmit$}>
      <h1 class="font-poppins text-white text-[28px] font-bold text-center">{"Logger"}</h1>
      <h1 class="font-poppins text-white opacity-80 text-lg my-4 leading-relaxed mt-2 md:mt-4  font-medium text-center mb-10">{"Log attendance of the students"}</h1>
      

<div class={`${!state.qr?'hidden': 'flex flex-col mb-10'}`}>
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Name</label>
<input disabled value={state.name} name="name2" id="name" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6"  >
</input>
</div>

<div class={`${!state.qr?'hidden': 'flex flex-col mb-10'}`}>
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Admission</label>
<input disabled value={state.email} name="email" id="email" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6"  >
</input>
</div>
<div class={`${!state.qr?'hidden': 'flex flex-col mb-10'}`}>
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Bus Stop</label>
<input value={state.stop} name="stop" id="stop" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6"  >
</input>
</div>



<div class={`${!state.qr?'hidden': 'flex flex-col mb-10'}`}>
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Event</label>
<Options></Options>
</div>
<div class={`${!state.qr?'hidden': 'flex flex-col mb-10'}`}>
<button type="submit" class="py-5 text-lg px-6 font-semibold bg-black bg-opacity-30 rounded-md w-full shadow-2xl text-white font-poppins">{"Log this participant"}</button>
</div>
<QRReader className={state.qr?`hidden`:''} onResult$={(result:any) => {
  
          if (result) {
            getResults(result)
          }}} constraints={{facingMode: 'environment'}}/>
          <h1 className={state.qr?`hidden`:''} >{state.qr}</h1>
          <div className={state.qr?`hidden`:''}>         <h1 class="text-white mt-4 text-lg text-center mx-auto font-poppins font-medium opacity-80 ">Or</h1>
          <h1 class="text-white  text-lg font-poppins font-semibold opacity-80 mt-6 my-4">Type Admission Number</h1>
          </div>


</form>

<input className={state.qr?`hidden`:''}  onChange$={(e:any)=>state.input=e.target.value} name="adm" id="adm" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md w-full py-4 px-6"  ></input>
          <button className={state.qr?`hidden`:''} onClick$={async (e:any)=>(e.preventDefault(),getResults(state.input))} class="py-5 my-6 text-lg px-6 font-semibold bg-black bg-opacity-30 rounded-md w-full shadow-2xl text-white font-poppins">{"Check this number"}</button>

</div>
</div>
}



        </div>
        </div>

    </>
)
})