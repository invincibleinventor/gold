import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {


  return (
    <>
      <main class="overflow-y-auto px-8 py-4 h-screen bg-[#faf2e3]">
    <section class="md:w-[639px] w-full mx-auto">
          <Slot />
</section>
      </main>
    
    </>
  );
});
