'use client';

function Hero() {
  return (
    <section id="hero">
      <div className="md:grid gap-4 grid-cols-2 md:right-0 md:w-screen md:absolute">
        <div className="relative ">
          <div className="bg-secondary-shaded rounded-lg ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <p className="text-primary text-xl ml-10">Hi!</p>
              <p>I'm Pirasanth - but call me PJ.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
