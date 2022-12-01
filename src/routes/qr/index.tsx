import { component$ } from "@builder.io/qwik";
import CryptoJS from "crypto-js";
import QRCode from "qrcode";
import { supabase } from "~/services/firebase";
//import QRCode from "react-qr-code";

 
export async function genqr(){
    const {data} =  await supabase.from('Total').select('*')
    const b=data!=null?data:[]
    for(let i =0;i<=b.length-1;i++){
        console.log(b[i])
       const  encrypted = CryptoJS.AES.encrypt(String(b[i]["ADM NO"]),"thisisthebestkeyforhashingit").toString()
    
        if(b[i]["HASH"]==null){
        await supabase.from('Total').upsert({"ADM NO":b[i]["ADM NO"],"STUDENT NAME":b[i]["STUDENT NAME"],"GEN":b[i]["GEN"],"CLASS":b[i]["CLASS"],"HASH":encrypted,"EVENTS":b[i]["EVENTS"],"MAGIC NUMBER":b[i]["MAGIC NUMBER"],"PARENTS NUMBER":b[i]["PARENTS NUMBER"],"MAGIC SHOW":b[i]["MAGIC SHOW"],"PARENTS CARNIVAL":b[i]["PARENTS CARNIVAL"],"SLOT":b[i]["SLOT"],"PAYMENT MODE":b[i]["PAYMENT MODE"]})

        }
        console.log(b.length)

    }
}



export async function getFiles(){
const {data} =  await supabase.from('Total').select('*').eq('CLASS','I- A')
console.log(data)
const b=data!=null?data:[]
for(let i =0;i<=b.length-1;i++){
    console.log(b[i])
    QRCode.toCanvas(b[i]['HASH'], function (err,canvas){
        if(err){
            console.log(err)
        }
        else{
            console.log(canvas)
            //downloadURI(url,b[i]['ID'])
            document.getElementById('ok')?.append(canvas)
            canvas.classList.add('my-2')
            const context = canvas.getContext('2d')
            if(context!=null)
            {            context.font = "13pt Calibri";}
            context?.fillText(b[i]['ADM NO'], 20, 13);
            downloadURI(canvas.toDataURL(),b[i]['ADM NO'])

        }
    })
    
}

    function downloadURI(uri:any, name:any) {

        const link = document.createElement("a");
        link.download = name;
        link.href = uri;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
}


export default component$(()=>{

    return(
        <div class="flex h-full w-full items-center content-center flex-col">
            <div id="ok">

            </div>
<button class="bg-white shadow-2xl my-20 font-medium lg:font-semibold font-poppins text-blue-900 px-10  transition-all ease-linear duration-100 hover:scale-105 py-3 rounded-md text-lg text-center"  onClick$={()=>getFiles()}>Get All QRs</button>
   
   </div>)

})