"use client";

const ContactForm = () => {
  return (
    <section className="flex justify-center p-5 py-16 md:py-32 md:w-4/5 m-auto">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Tu correo electrónico ha sido registrado");
        }}
        className="flex flex-wrap w-full justify-center gap-10"
      >
        <div className="flex flex-col w-full max-w-max text-center md:text-left">
          <h2 className="text-primary font-bold">SUSCRÍBETE</h2>
          <p className="font-light text-sm text-white/60">
            Suscríbete para recibir las ultimas noticias de Big Bang Radio
          </p>
        </div>
        <div className="flex relative align-middle h-auto w-full max-w-[400px]">
          <input
            type="text"
            placeholder="Correo electronico"
            className="h-full w-full p-3 pr-[90px] rounded-full bg-black/30 focus:border-primary focus:outline-none border-2"
          />
          <button
            type="submit"
            className="absolute h-full right-0 py-3 pr-3 bg-transparent text-xs font-semibold"
          >
            CONFIRMAR
          </button>
        </div>
      </form>
    </section>
  );
};
export default ContactForm;
