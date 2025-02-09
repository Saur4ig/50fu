import React from 'react';

const Hero: React.FC = () => (
  <section className="relative overflow-hidden bg-gradient-to-r from-slate-800 to-slate-900 text-white py-32">
    <div className="container mx-auto px-4 text-center relative">
      <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
        Just a fun page to learn
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-white">
          {" "}
          FU
        </span>
      </h1>
      <p className="max-w-2xl mx-auto text-xl md:text-2xl font-light opacity-90">
        One of the most important expressions across 50 languages
      </p>
    </div>
  </section>
);

export default Hero;