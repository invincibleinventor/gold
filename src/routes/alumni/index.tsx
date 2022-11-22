// @ts-ignore
{/* 
  // @ts-ignore */}

  import { $, useClientEffect$, component$, useStore } from '@builder.io/qwik';
  import { supabase } from '../../services/firebase';
  import {  GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
  import {auth} from '../../services/firebase'
  import QRCode from 'qrcode';
  export const LoadingComponent = () => <div class="container" style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
   
  </div>;
  
  
  export const genqr = $(async (u:any) => {  
    const a= await QRCode.toDataURL(u, {type:"image/webp",})
    console.log(a)
  return  a
    
  })
  
  
  export default component$(() => {
   
  
    const log = useStore({
      logged: false,
      loading: false
    });
  
   
   
    const state = useStore({
      isLoggedIn: false,
      loading:false,
      user:'',
      uid:'',
      data:false,
      // eslint-disable-next-line @typescript-eslint/no-array-constructor
      d: Array(),
      nope:'hidden',
      qr:''
    });
    
    
  
  
  
    useClientEffect$(() => {
      onAuthStateChanged(auth, (user) => {
        state.isLoggedIn = !!user;
        if(user?.email!=null && user?.email != undefined){state.user = user?.email}
        if(user?.uid!=null && user?.uid != undefined){state.uid = user?.uid}
        console.log(state.uid)
  
        console.log(state.user)
        async function testing(){
          const { data } = await supabase
            .from("Alumni")
            .select("*")
            console.log(data)
          }

  async function validate(){
    
      const { data } = await supabase
      .from("Alumni")
      .select("*")
      .eq("uid",`${state.user}`)
      console.log('below')
    console.log(data)
    if(typeof data !== 'undefined' && data!=null && data.length > 0){
    state.data=true
    }
    else{
      state.data=false
      QRCode.toDataURL(state.user, function (err, url){
        if(err){
          console.log(err)
  
        }
        else{
          console.log(url)
          
          state.qr = url
        }
      }
      )
    }
    if(state.data && data!=null){state.d=data;state.qr=state.d[0]["qr"]}
    console.log(state.d,state.data)
  
      
  }
  
  if(state.user){
   testing()
    validate()
  }
  
  
  
      });
    });
  
    
  
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
        });
        
  
      } catch (error: any) {
        alert(error.message);
      } finally {
        state.loading = false;
      }
    });
  
  let btn="Register Now" ,title="Alumni Registration",desc="Fill in this form to register for Swarnotsav",name='',gender,st,wa,ph,email,year,classfrom,classupto,status,degree,course,college,employment,designation,org,country,city,spl,after,address,perma,number
    
  
  if (state.data){
    title="Update Details"
    desc="You have already registered. Update your profile details"
    name=state.d[0]['Name']
    wa=state.d[0]['WhatsApp Number']
    ph=state.d[0]['Mobile Number']
    address=state.d[0]['Address for communication']
    perma=state.d[0]['Permanent Address']
    email=state.d[0]['Email ID']
    gender=state.d[0]['Gender']
    employment=state.d[0]['Employment Type (Only if applicable)']
    degree=state.d[0]['Completed/Pursuing Degree']
    course=state.d[0]['Course/Discipline']
    college=state.d[0]['College/University Name']

    year=state.d[0]['Year of Completion']
    classfrom=state.d[0]['Class Studied From']
    classupto=state.d[0]['Class Studied Upto']
    status=state.d[0]['Status Of Higher Studies']
    designation = state.d[0]['Designation']
    country = state.d[0]['Country']
    city = state.d[0]['City']
    st = state.d[0]['State']
    org = state.d[0]['Name Of Organization']
    spl = state.d[0]['Special Achievements during Schooling']
    after = state.d[0]['Achievements after schooling']
    number = state.d[0]['No Of People Accomodating']

    
 
    btn="Update Details"
  }
  
  
   const handleSubmit$ = $( async (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const name = form.name2.value;
    const wa = form.wa.value;
    const ph = form.ph.value;
    const address = form.address.value;
    const number = form.number.value;
    const after = form.aft.value;
    const spl = form.spl.value;
    const org = form.org.value;
    const st = form.st.value;
    const city = form.city.value;
    const country = form.country.value;
    const designation = form.designation.value;
    const status = form.status.value;
    const classfrom = form.classfrom.value;
    const classupto = form.classupto.value;
    const year = form.year.value;
    const college = form.college.value;
    const course = form.course.value;
    const degree = form.degree.value;
    const employ = form.employ.value;
    const gender = form.gender.value;
    const email = form.email.value;
    const perma = form.perma.value;



  
  
  if(state.isLoggedIn){
    
  
  
   
  
    if(!state.data){
      const a = await genqr(state.uid)
      const { error } = await supabase
      .from('Alumni')
      .insert({ "uid": state.user, "Name": name, "Gender": gender, "Year of Completion": year, "Class Studied From": classfrom, "Class Studied Upto": classupto, "Status Of Higher Studies": status, "Completed/Pursuing Degree": degree, "Course/Discipline": course, "College/University Name": college, "Employment Type (Only if applicable)": employ, "Designation": designation, "Name Of Organization": org, "Country": country, "State": st, "City": city, "Special Achievements during Schooling": spl, "Achievements after schooling": after, "Address for communication": address, "Permanent Address": perma, "Mobile Number": ph, "WhatsApp Number": wa, "Email ID": email, "No Of People Accomodating": number, "qr":a})
  
      if(error){
        console.log(error)
          }
          else{
            alert('Registered')
            location.href='/registration'
          }
    }
   else{
    const { error } = await supabase
    .from('Alumni')
    .upsert({ "uid": state.user, "Name": name, "Gender": gender, "Year of Completion": year, "Class Studied From": classfrom, "Class Studied Upto": classupto, "Status Of Higher Studies": status, "Completed/Pursuing Degree": degree, "Course/Discipline": course, "College/University Name": college, "Employment Type (Only if applicable)": employ, "Designation": designation, "Name Of Organization": org, "Country": country, "State": st, "City": city, "Special Achievements during Schooling": spl, "Achievements after schooling": after, "Address for communication": address, "Permanent Address": perma, "Mobile Number": ph, "WhatsApp Number": wa, "Email ID": email, "No Of People Accomodating": number, "qr":state.qr})
    if(error){
      console.log(error)
        }
        else{
          alert('Updated')
        }
   }
  }
  
  
  
  else{
    alert('Not Logged In')
  }
  
  });
  
    if(!log.logged){
  
  
    return (
      
      <>
      
        
      <div class="px-5 md:px-0 mt-24 lg:mt-0">
     
      {!state.isLoggedIn &&
      
      <div class="flex flex-row items-center content-center py-20">
       
          <button class="bg-white shadow-2xl mx-auto font-semibold font-poppins text-blue-900 px-10 transition-all ease-linear duration-100 hover:scale-105 py-3 rounded-md text-lg" onClick$={()=>handleGoogleAuth()}>Sign In With Google</button>
      </div>
      
      }
       
  
    
    
     
      { (state.isLoggedIn) &&
      <>
        <form class={`mx-auto my-8 md:my-16 lg:my-20 rounded-xl lg:rounded-2xl p-8 md:p-16 md:px-10 bg-black bg-opacity-30  md:w-3/5 lg:w-2/4 xl:w-2/5 `} preventdefault:submit onSubmit$={handleSubmit$}>
        {(state.isLoggedIn && state.data) &&
        <img class="mx-auto mt-0 mb-10 rounded-md" src={state.qr}></img>
       }
        <h1 class="font-poppins text-white text-[28px] font-bold text-center">{title}</h1>
        <h1 class="font-poppins text-white opacity-80 text-lg my-4 leading-relaxed mt-2 md:mt-3  font-medium text-center mb-10">{desc}</h1>
        
  
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Name</label>
  <input name="name2" id="name" class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6" value={name} >
  </input>
  </div>
  
  
  
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Gender</label>
  <input name="gender" id="class" value={gender} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Year of Completion</label>
  <input name="year" id="date" type="number" value={year} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
   
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Class Studied From</label>
  <input name="classfrom" id="date" type="number" value={classfrom} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
   
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Class Studied Upto</label>
  <input name="classupto" id="date" type="number" value={classupto} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
   
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Status Of Higher Studies</label>
  <input name="status" id="date" type="text" value={status} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
   
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Completed/Pursuing Degree</label>
  <input name="degree" id="date" type="text" value={degree} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
   
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Course/Discipline</label>
  <input name="course" id="date" type="text" value={course} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
   
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">College/University Name</label>
  <input name="college" id="date" type="text" value={college} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
   
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Employment Type (Only if applicable)</label>
  <input name="employ" id="date" type="text" value={employment} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
   
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Designation</label>
  <input name="designation" id="date" type="text" value={designation} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
   
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Name Of Organization</label>
  <input name="org" id="date" type="text" value={org} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
   
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Country</label>
  <input name="country" id="date" type="text" value={country} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
   
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">State</label>
  <input name="st" id="date" type="text" value={st} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
   
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Special Achievements during Schooling</label>
  <input name="spl" id="date" type="text" value={spl} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
     
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">City</label>
  <input name="city" id="date" type="text" value={city} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
     
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Achievements after schooling</label>
  <input name="aft" id="date" type="text" value={after} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
     
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Address for communication</label>
  <input name="address" id="date" type="text" value={address} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Permanent Address</label>
  <input name="perma" id="date" type="text" value={perma} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Email ID</label>
  <input name="email" id="date" type="email" value={email} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>

  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">No Of People Accomodating</label>
  <input name="number" id="date" type="number" value={number} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
  
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">WhatsApp Number</label>
  <input name='wa' id="whatsapp" type="number" value={wa} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
  <div class="flex flex-col mb-10">
  <label class="text-white text-lg font-poppins font-medium opacity-80 ">Phone Number</label>
  <input name="ph" id="phone" type="number" value={ph} class="text-lg font-semibold bg-black bg-opacity-20 border-b border-b-indigo-900 text-white mt-2 shadow-2xl outline-none rounded-md py-4 px-6">
  </input>
  </div>
  
 
  
  <button type="submit" class="py-5 text-lg px-6 font-semibold bg-black bg-opacity-30 rounded-md w-full shadow-2xl text-white font-poppins">{btn}</button>
  
        </form>
      
        
                      </>
  
    }
  
  
  
  
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
   