import { component$ } from "@builder.io/qwik";
import QRCode from "qrcode";
import { supabase } from "~/services/firebase";
export async function getFiles(){
const {data} =  await supabase.from('Parts').select('*')
console.log(data)
const b=data!=null?data:[]
for(let i =0;i<=b.length-1;i++){
    console.log(b[i])
    QRCode.toDataURL(b[i]['HASH'], function (err,url){
        if(err){
            console.log(err)
        }
        else{
            downloadURI(url,b[i]['ID'])
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
<button class="bg-white shadow-2xl my-20 font-medium lg:font-semibold font-poppins text-blue-900 px-10  transition-all ease-linear duration-100 hover:scale-105 py-3 rounded-md text-lg text-center"  onClick$={()=>getFiles()}>Get All QRs</button>
   
   </div>)

})