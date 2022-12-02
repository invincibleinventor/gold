import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {


  return (
    <>
      <main class="overflow-y-auto h-screen">
    
          <Slot />

      </main>
    
    </>
  );
});
