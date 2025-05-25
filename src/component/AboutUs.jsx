import React from 'react'
import { MapPin, TreePalm, IndianRupee } from 'lucide-react';
export default function AboutUs() {

    function HowItWorksCard({ Icon, title }) {
        return (
            <div className=" container group  bg-white rounded-3xl shadow-2xl p-6 text-center h-60 w-120 transition duration-300 ease-in-out transform hover:-translate-y-4">
                <div className="flex items-center justify-center w-28 h-28 border-8 border-green-600 p-2 bg-green-500 text-white rounded-full mx-auto mb-4 transition-transform duration-500 transform group-hover:scale-x-[-1]">
                    <Icon size={60} />
                </div>
                <h4 className="text-[22px] font-bold mt-12">{title}</h4>
            </div>
        );
    }
    return (
        <>
            <section>
                <div className='container mx-auto px-4 '>
                    <h3 className='text-4xl font-semibold'>About Farmhousehub</h3>
                    <p className='px-4 text-justify opacity-70 my-6 text-[20px]'>Today we are westernising, with every virtue of activities and life style being brought up we look onwards to social gatherings and parties. Owning a farm house is not an easy ordeal, we at FarmhouseHub company look forward at providing the same virtue, we look into our customers and users and ensure the very fact that they get their satisfaction to their fullest the farmhouses are on the Highest trend with their demand sky rocketing every day as it passes.The very motive ensures the affordability to and the best medium of recreation to all our users and a passive mode of income to large end of the farm owners as well. With us it's our priority to ensure the safety and the proper accommodation whilst you enjoy and swirl into the parties of your own. For what they say Farm Houses are the newest of holiday destinations!</p>
                </div>
            </section>
            <section className='bg-gray-100 py-20'>
                <div>
                    <h3 className='font-bold text-[32px] text-center mb-10'>How it Works?</h3>
                </div>
                <div>
                    <div class="rounded flex gap-6  justify-center  ">
                        <HowItWorksCard Icon={MapPin} title="Find Interesting Place" />
                        <HowItWorksCard Icon={TreePalm} title="Select Your Destination" />
                        <HowItWorksCard Icon={IndianRupee} title="Make a Payment" />
                    </div>
                </div>
            </section>
        </>
    )
}
