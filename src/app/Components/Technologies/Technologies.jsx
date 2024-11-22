    import React from 'react';
    import { techSkills } from '../DummyData/DummyData';
    import { Heading } from '../heading';
    // import AOS from 'aos';  // Import AOS
    // import 'aos/dist/aos.css';  // Import AOS styles

    const Technologies = () => {
    // Initialize AOS on component mount
    

    return (
        <section className="technologies py-12 items-center">
        <div className="container mx-auto px-4">
            <Heading title="Technologies" className="text-5xl font-poppins text-yellow-500 text-center mb-6" />
            <br />
    
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techSkills.map((val, i) => (
                <div
                key={i}
                data-aos={i % 2 === 0 ? "flip-right" : "flip-left"}
                className="technologiescard flex flex-col items-center justify-center  p-4 rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:scale-105"
                >
                <span className="text-5xl mb-2">{val.icon}</span>
                <span className="text-lg font-medium text-neutral-400">{val.name}</span>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default Technologies;
