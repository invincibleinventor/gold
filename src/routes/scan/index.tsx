//@ts-ignore
import { component$, useClientEffect$ } from '@builder.io/qwik';
import { useStore } from '@builder.io/qwik';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '~/services/firebase';
import dt from '../config.json'
import { $ } from '@builder.io/qwik';
import { supabase } from '~/services/firebase';
import { BarCode } from '~/integrations/react/registration';
export const users = ['invincibleinventor@gmail.com','bhargavanrajeshr@gmail.com','aish160490@gmail.com','erp.thetvs2021@gmail.com','srameshnba@gmail.com']

export const Options = component$(()=>{
  const a:any=Object.values(dt.carnival.events)
  const eles = []

  for (let i=0;i<=a.length;i++){
      eles.push(<option value={a[i]}>{a[i]}</option>)

  }
  return(
      <select name="event"  id="event" class={`text-lg  font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6`} style=" -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;">
{eles}
</select>
  )

})




export const Magic = component$(()=>{
  const a:any=Object.values(dt.carnival.magic)
  const eles = []

  for (let i=0;i<=a.length;i++){
      eles.push(<option value={a[i]}>{a[i]}</option>)

  }
  return(
      <select name="magic"  id="magic" class={`text-lg  font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6`} style=" -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;">
{eles}
</select>
  )

})





export const Slots = component$(()=>{
  const a:any=Object.values(dt.carnival.slots)
  const eles = []

  for (let i=0;i<=a.length;i++){
      eles.push(<option value={a[i]}>{a[i]}</option>)

  }
  return(
      <select name="slots"  id="slots" class={`text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6`} style=" -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;">
{eles}
</select>
  )

})

export const Parents = component$(()=>{
  const a:any=Object.values(dt.carnival.parents)
  const eles = []

  for (let i=0;i<=a.length;i++){
      eles.push(<option value={a[i]}>{a[i]}</option>)

  }
  return(
      <select name="parents"  id="parents" class={`text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6`} style=" -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;">
{eles}
</select>
  )

})

export const Payment = component$(()=>{
  const a:any=Object.values(dt.carnival.payment)
  const eles = []

  for (let i=0;i<=a.length;i++){
      eles.push(<option value={a[i]}>{a[i]}</option>)

  }
  return(
      <select name="payment"  id="payment" class={`text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6`} style=" -webkit-appearance: none;
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
    id:'',
    data:'',
    qr:'',
    events:'',
    numbermagic:'',
    numberparents:''
    ,class:'',
    parent:'',
    magic:'',
    slot:'',
    payment:'',
    totalprice:'',
    magicprice:0,
    parentsprice:0,
    magicstate:true
  })
  const handleSubmit$ = $( async (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = form.name2.value;
    const adm = form.code.value;
    let eve = ''
   
    let numbermagic = Number(form.numbermagic.value);
    const numberparents = Number(form.numberparents.value);
    
    const classs=form.classs.value;
let slots = form.slots.value;
if(!state.magicstate){
slots="Not Applicable"
numbermagic=0
}
const magic = form.magic.value;
const parents = form.parents.value;

if(magic.value==true){
  eve+='magic '


}
if(parents.value==true){
  eve+='parents'


}
const payment = form.payment.value;

    let dts = new Date()
    const date = new Date()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dts= new Date(date.getTime() - date.getTimezoneOffset()*60000);
    const {data}=await supabase.from('Total').select('*').eq('ADM NO',adm)
    const b=data?data:[]
    const { error } = await supabase
    .from('Total')
    .upsert({ "ADM NO":adm,"ROLL NO":b[0]["ROLL NO"],"GEN":b[0]["GEN"],"STUDENT NAME":name, "EVENTS":eve, "CLASS":classs, "MAGIC NUMBER":numbermagic,"PARENTS NUMBER":numberparents, "HASH":b[0]["HASH"],"MAGIC SHOW":magic,"PAYMENT MODE":payment,"PARENTS CARNIVAL":parents,"SLOT":slots})
    if(error){
      console.log(error)
        }
        else{
          alert('Logged')
        }    

  })

  const getResults = $(async (res:any) => {
    state.qr=res.text
const { data } = await supabase
.from('Total')
.select("*")
.eq("HASH",`${res}`)
if(data && data.length!=0){state.data;state.name=data[0]["STUDENT NAME"];state.id=data[0]["ADM NO"];state.class=data[0]["CLASS"];state.numbermagic=data[0]["MAGIC NUMBER"];state.numberparents=data[0]["PARENTS NUMBER"];state.slot=data[0]["SLOT"];state.magic=data[0]["MAGIC SHOW"];state.payment=data[0]["PAYMENT MODE"];state.parent=data[0]["PARENTS CARNIVAL"];console.log(data)}else{console.log('no data')}

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
      <h1 class="font-poppins text-white text-[28px] font-bold text-center">{"Logger"}</h1>
      <h1 class="font-poppins text-white opacity-80 text-lg my-4 leading-relaxed mt-2 md:mt-3  font-medium text-center mb-10">{"Log the details of the participants"}</h1>
      

<div class="flex flex-col mb-10">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Name</label>
<input disabled value={state.name} name="name2" id="name" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6"  >
</input>
</div>

<div class="flex flex-col mb-10">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Admission Number</label>
<input disabled value={state.id} name="code" id="email" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6"  >
</input>
</div>

<div class="flex flex-col mb-10">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Class</label>
<input disabled value={state.class} name="classs" id="classs" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6"  >
</input>
</div>



<div class={`flex flex-col mb-8 ${state.magicstate?'':'hidden'}`}>
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Magic Show no of participants</label>
<input type="number" value={state.numbermagic} name="numbermagic" id="numbermagic" onInput$={(e:any) => (state.magicprice=Number(e.target.value)*150)} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6"  >
</input>
</div>

<div class="flex flex-col mb-10">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Parents Carnival no of participants</label>
<input type="number" value={state.numberparents} onInput$={(e:any) => (state.parentsprice=Number(Number(50)+Number((Number(e.target.value)-Number(1))*100)))} name="numberparents" id="numberparents" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6"  >
</input>
</div>

<div class="flex flex-col mb-8">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Magic Show</label>
<select name="magic" onInput$={
  (e:any)=>(
    state.magicstate=(e.target.value === 'true'),
    console.log(state.magicstate)
  )
} id="magic" class={`text-lg  font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6`} style=" -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;">
        <option id="yes" value={"true"}>Yes</option>
        <option id="no" value={"false"}>No</option>
        </select>
      </div>

<div class="flex flex-col mb-8">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Parents Carnival</label>
<Parents></Parents>
</div>

<div class={`flex flex-col mb-8 ${state.magicstate?'':'hidden'}`}>
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Slot for Magic Show</label>
<Slots></Slots>
</div>


<div class="flex flex-col mb-8">
<label class="text-white text-lg font-poppins font-medium opacity-80 ">Payment Method</label>
<Payment></Payment>
</div>

<h1 class="text-white text-xl font-poppins font-medium opacity-80 mb-8">
  Total Price:- Rs {state.magicprice+state.parentsprice}

</h1>



<div class="flex flex-col mb-10">
<button type="submit" class="py-5 text-lg px-6 font-semibold bg-black bg-opacity-30 rounded-md w-full shadow-2xl text-white font-poppins">{"Log this participant"}</button>
</div>
<BarCode
onUpdate$={ (err: any, resp:any): void => {
         if(resp) {
             getResults(resp.getText())
             console.log(resp.getText())
         }
         if(err){
          console.log(err)
         }
      }}
      >
</BarCode>
          <h1>{state.qr}</h1>
</form>
</div>
}



        </div>
        </div>

    </>
)
})