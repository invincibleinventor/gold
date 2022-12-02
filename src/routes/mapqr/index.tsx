import { component$ } from "@builder.io/qwik";
import QRCode from "qrcode";
import { supabase } from "~/services/firebase";
//import QRCode from "react-qr-code";



export async function getFiles(){
const {data} =  await supabase.from('Mapping').select('*')
console.log(data)
const b=data!=null?data:[]
for(let i =0;i<=b.length-1;i++){
    console.log(b[i])
    QRCode.toCanvas(String(b[i]['ID']
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
            const mydiv = document.createElement('div')
            mydiv.classList.add('flex')
            mydiv.classList.add('flex-row')
            mydiv.classList.add('space-x-5')

        
            document.getElementById('ok')?.appendChild(mydiv)
            mydiv.classList.add('my-2')
                
            const context = canvas.getContext('2d')
            
            if(context!=null)
            {        
                    context.font = "13pt Calibri";}
                    context?.fillText(b[i]['Code'],0,13);
                    mydiv.appendChild(canvas)
                    mydiv.appendChild(canvas.cloneNode(true))
                    
                   downloadURI(canvas.toDataURL(),b[i]['Code'])

        }
    })
    
}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            <div id="ok" >

            </div>
<button class="bg-white shadow-2xl my-20 font-medium lg:font-semibold font-poppins text-blue-900 px-10  transition-all ease-linear duration-100 hover:scale-105 py-3 rounded-md text-lg text-center"  onClick$={()=>getFiles()}>Get All QRs</button>
   
   </div>)

})