import React from 'react';
import { MapPin, TreePalm, IndianRupee } from 'lucide-react';

export default function AboutUs() {

  function HowItWorksCard({ Icon, title }) {
    return (
      <div className="group bg-white rounded-3xl shadow-2xl p-6 text-center w-full max-w-sm transition duration-300 transform hover:-translate-y-4">
        <div className="flex items-center justify-center w-24 h-24 border-8 border-green-600 p-2 bg-green-500 text-white rounded-full mx-auto mb-4 transition-transform duration-500 group-hover:scale-110">
          <Icon size={50} />
        </div>
        <h4 className="text-xl font-bold mt-6">{title}</h4>
      </div>
    );
  }

  return (
    <>
      {/* About Section */}
      <section className='mb-20 mt-20'>
        <div className='container mx-auto px-4 max-w-6xl '>
          <h3 className='text-3xl md:text-4xl font-semibold text-center md:text-left'>About Farmhousehub</h3>
          <p className='mt-6 text-justify text-gray-700 leading-relaxed text-[18px]'>
            Today we are westernising, with every virtue of activities and lifestyle being brought up we look onwards to social gatherings and parties.
            Owning a farmhouse is not an easy ordeal, we at FarmhouseHub look forward to providing the same virtue. We understand our customers and ensure their satisfaction to the fullest.
            The demand for farmhouses is skyrocketing every day. Our goal is to make them affordable and a great medium of recreation for users — while also offering passive income for farm owners.
            With us, safety and accommodation are a priority while you enjoy your personal celebrations. As they say, farmhouses are the newest holiday destinations!
          </p>
        </div>
      </section>

      {/* How it Works Section */}
      <section className='bg-gray-100 py-20'>
        <h3 className='text-2xl md:text-3xl font-bold text-center mb-10'>How it Works?</h3>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center flex-wrap">
            <HowItWorksCard Icon={MapPin} title="Find Interesting Place" />
            <HowItWorksCard Icon={TreePalm} title="Select Your Destination" />
            <HowItWorksCard Icon={IndianRupee} title="Make a Payment" />
          </div>
        </div>
      </section>
    </>
  );
}
