import { component$, useStore } from "@builder.io/qwik";
import QRCode from "qrcode";
import { supabase } from "~/services/firebase";
let validOptions = { apikey: '1234567890-0987312345678hgfdsaertyuikjhgf' };
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";


//import QRCode from "react-qr-code";
export async function getData(e:any){
    const {data} =  await supabase.from('Reg').select('*').eq('ph',e)
    return data
}
export async function getFiles(e:any){
    const tlClient = axios.create({
        baseURL: "https://api.textlocal.in/",
        params: {
          apiKey: "NDc3MzQxNjk2MjM5NDg1ODQ3NjgzNjc0N2E1MzM1NTU=", 
          sender: "TVSSCL",
          numbers: '8903502417',
          message: 'ok'
        
        }
      });
    
      tlClient.post("/send")  .then(function (response) {
        console.log(response);
      })
    const data=await getData(e)
console.log(data)
const b=data!=null?data:[]
for(let i =0;i<=b.length-1;i++){
    console.log(b[i])
    QRCode.toCanvas(String(b[i]['ph']
       ),{
        margin: 10,
        scale:5
    }, function (err,canvas){
        if(err){
            console.log(err)
        }
        else{
            console.log(canvas)
            //downloadURI(url,b[i]['ID'])
          //  document.getElementById('ok')?.append(canvas)
            canvas.classList.add('my-2')
        
            const context = canvas.getContext('2d')
            
            if(context!=null)
            {        
                    context.font = "10pt Calibri";}
                    context?.fillText(b[i]['name'],0,13);
                    if(context!=null)
{                    context.font = "10pt Calibri";
}
context?.fillText(b[i]['ph'],0,canvas.height-13);
context?.fillText(b[i]['batch'],0,canvas.height-1);
if(context!=null){
                    context.font = "13pt Calibri";
                    }


             
            
            
                downloadURI(canvas.toDataURL(),b[i]['ph'])

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
    const state = useStore({
        input:0
    })
    return(
        <div class="co">
            <div class="co">
<label class="coin">Type Number</label>
<input type="number"  onChange$={(e:any)=>state.input=e.target.value} class="coout"  >
</input>
</div>
<div class="flex flex-col mb-4">
<button onClick$={async (e:any)=>(e.preventDefault(),getFiles(state.input))}  class="subm">{"Send SMS"}</button>
</div>
        </div>
    )
})