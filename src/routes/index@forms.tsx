import { component$, } from '@builder.io/qwik';
import { DocumentHead, Link } from '@builder.io/qwik-city';


export default component$(() => {
  

  return (
 <div class="flex my-auto mx-auto  flex-col space-y-3">
  <div class="space-y-4 flex flex-col co">
  <label class="coin">For attendance</label>
  <Link class="subm" href="/attendance">Attendance</Link>
  </div>

 </div>
  );
});

export const head: DocumentHead = {
  title: 'Swarnotsav - The TVS School',
};
