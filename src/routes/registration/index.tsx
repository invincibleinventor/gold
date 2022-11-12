import { component$, useStore, useClientEffect$, $ } from '@builder.io/qwik';

import 'firebase/compat/auth';
import { auth } from "../../services/firebase";

import 'firebase/compat/database';
import {
 
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";


export const LoadingComponent = () => <div class="container" style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
 
</div>;



export function login(){
  
}

export default component$(() => {
  const log = useStore({
    logged: false,
    loading: false
  });

  const handleGoogleAuth = $(async () => {
    log.loading = true;
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      location.href = "/registration";
    } catch (error: any) {
      alert(error.message);
    } finally {
      log.loading = false;
    }
  });

 
  useClientEffect$(() => {
    onAuthStateChanged(auth, (user) => {
      log.logged = !!user;
    });
  });

  
  if(log.logged){

  return (
    <div>loggged</div>
   
  )
  }
  else{
    return (
      <div onClick$={()=>handleGoogleAuth()}>notlogged</div>
     
    )}
  })
 