import { component$ } from "@builder.io/qwik";
import CryptoJS from "crypto-js";
import QRCode from "qrcode";
import { supabase } from "~/services/firebase";
//import QRCode from "react-qr-code";
 
export async function genqr(){
    const {data,error} =  await supabase.from('List').select('*')
    if(error){
        console.log(error)
    }
    else{
        console.log('ok'+data)
    }
    const b=data!=null?data:[]
    for(let i =0;i<=b.length-1;i++){
        console.log(b[i])
       const  encrypted = CryptoJS.AES.encrypt(String(b[i]["ADM NO"]),"thisisthebestkeyforhashingit").toString()
    
        if(b[i]["Hash"]==null){
        await supabase.from('List').upsert({"ADM NO":b[i]["ADM NO"],"STUDENT NAME":b[i]["STUDENT NAME"],"ROLL NO":b[i]["ROLL NO"],"CLASS":b[i]["CLASS"],"Hash":encrypted,})

        }
        console.log(b.length)

    }
}

export async function getFiles(){
    genqr()
const {data} =  await supabase.from('List').select('*')
console.log(data)
const b=data!=null?data:[]
for(let i =0;i<=b.length-1;i++){
    console.log(b[i])
    QRCode.toCanvas(b[i]['Hash'], function (err,canvas){
        if(err){
            console.log(err)
        }
        else{
            console.log(canvas)
            //downloadURI(url,b[i]['ID'])
            document.getElementById('ok')?.append(canvas)
            canvas.classList.add('my-2')
            canvas.classList.add('mx-2')
            const context = canvas.getContext('2d')
            if(context!=null)
            {            context.font = "bold 10pt Calibri";
        }
                        
            context?.fillText(b[i]['STUDENT NAME'], 20, 12);
           // downloadURI(canvas.toDataURL(),b[i]['ADM NO'])

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
            <div id="ok" class="grid  md:grid-cols-10   grid-cols-1 lg:grid-cols-10">

            </div>
<button class="subm"  onClick$={()=>getFiles()}>Get All QRs</button>
   
   </div>)

})