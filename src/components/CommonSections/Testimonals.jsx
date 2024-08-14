import React, { useState, useEffect } from 'react';
import InvertedCommasIcon from '../../assets/invertedcommasicon.svg';
import LeftArrowIcon from '../../assets/leftarrowicon.svg';
import RightArrowIcon from '../../assets/rightarrowicon.svg';

const IndividualTestimonials = [
    { text: "YourBank's customer service is exceptional! They always go above and beyond to help me with any issues. They have made my half worries gone by such smooth transactions from anywhere anytime.", name: "Sara T" },
    { text: "I recently started my own saving, and YourBank has been instrumental in helping me set up my saving accounts and secure the financing I needed. The way this bank made my finances easy, none can do.", name: "John D" },
    { text: "Switching to YourBank was the best decision I made for my financial well-being. Their online banking features are top-notch. Greatly greatly recommended, surely try once.", name: "Emily G" },
    { text: "YourBank's mortgage process was seamless and stress-free. Their team made sure I understood every step.", name: "Michael B" },
    { text: "The YourBank mobile app is incredibly user-friendly and has made managing my finances so much easier. No more worries about bill deadlines, remote transactions, etc.", name: "Laura W" },
    { text: "I appreciate the personalized attention I receive at YourBank. It feels like they truly care about my financial goals. Do try it once if you haven't already.", name: "David K" }
];

const BusinessTestimonials = [
    { text: "YourBank's business services are outstanding. From setting up accounts to managing transactions, their support has been invaluable for my company's growth.", name: "Anna B" },
    { text: "We chose YourBank for our business banking needs, and they have exceeded our expectations. Their solutions are tailored and their support team is top-notch.", name: "Paul M" },
    { text: "Managing our business finances has become much simpler with YourBank. Their online platform is efficient and their customer service is exceptional.", name: "Emily G" },
    { text: "YourBank's expertise in business finance has helped streamline our operations. Their advice and support have been crucial to our success.", name: "Michael B" },
    { text: "The business loan process with YourBank was smooth and transparent. They provided clear guidance and competitive rates that helped us expand effectively.", name: "Laura W" },
    { text: "YourBank has been a reliable partner in managing our business finances. Their innovative solutions and excellent customer service have been a game changer.", name: "Robert T" }
];

const TestimonialCarousel = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('individualTestimonial');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [itemsPerSlide, setItemsPerSlide] = useState(1);

    useEffect(() => {
        const updateItemsPerSlide = () => {
            const screenWidth = window.innerWidth;
            setItemsPerSlide(screenWidth >= 1024 ? 3 : 1);
        };

        updateItemsPerSlide();
        window.addEventListener('resize', updateItemsPerSlide);

        return () => {
            window.removeEventListener('resize', updateItemsPerSlide);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNextClick();
        }, 2000);

        return () => clearInterval(interval);
    }, [activeTab]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setStartIndex(0);
    };

    const handlePrevClick = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setStartIndex((prevIndex) => (prevIndex - 1 + getCurrentTestimonials().length) % getCurrentTestimonials().length);
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    };

    const handleNextClick = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setStartIndex((prevIndex) => (prevIndex + 1) % getCurrentTestimonials().length);
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    };

    const getCurrentTestimonials = () => {
        return activeTab === 'individualTestimonial' ? IndividualTestimonials : BusinessTestimonials;
    };

    const currentTestimonials = getCurrentTestimonials();

    const cloneTestimonials = [...currentTestimonials, ...currentTestimonials, ...currentTestimonials];

    const transformStyle = {
        transform: `translateX(-${(startIndex + currentTestimonials.length) * (100 / itemsPerSlide)}%)`,
        transition: isTransitioning ? 'transform 0.5s ease' : 'none',
    };

    return (
        <div className='mt-36'>
            <div>
                <div className='flex relative justify-between lg:flex-row flex-col items-center lg:text-left text-center'>
                    <div className='flex flex-col gap-5 w-3/5 lg:items-start items-center'>
                        <p className='text-4xl flex gap-4'>Our <span className='text-secondary'>Testimonials</span></p>
                        <p className='w-5/5 text-xm font-extralight text-zinc-300'>Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey</p>
                    </div>
                    <div className='border border-zinc-700 rounded-full p-2 h-16 bg-customGray font-normal w-80 my-6 '>
                        <div className='tab-container flex gap-3 relative'>
                            <div className={`tab-bg ${activeTab === 'individualTestimonial' ? 'left-0' : 'left-50'}`}></div>
                            <button
                                className={`rounded-full p-2 my-1 duration-700 ${activeTab === 'individualTestimonial' ? 'text-black' : 'text-white'}`}
                                onClick={() => handleTabChange('individualTestimonial')}
                            >
                                For Individuals
                            </button>
                            <button
                                className={`rounded-full p-2 my-1 duration-700 ${activeTab === 'businessTestimonial' ? 'text-black' : 'text-white'}`}
                                onClick={() => handleTabChange('businessTestimonial')}
                            >
                                For Business
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex mt-20 items-center gap-1 '>
                <div onClick={handlePrevClick} className='cursor-pointer border-2 border-primary rounded-full sm:w-14 w-8 flex items-center hover:shadow-inner hover:shadow-primary duration-300'>
                    <img className='sm:w-14 w-8' src={LeftArrowIcon} alt="icon" />
                </div>
                <div className='relative overflow-hidden w-full rounded-3xl bg-opacity-20'>
                    <div id='testimonialCarousel' className='flex transition-transform duration-1000' style={transformStyle}>
                        {cloneTestimonials.map((testimonial, index) => (
                            <div key={index} className={`flex-none w-full lg:w-1/3 px-8 py-10 text-center `}>
                                <div className='flex flex-col gap-14 items-center z-50'>
                                    <div><img src={InvertedCommasIcon} alt="icon" /></div>
                                    <p>{testimonial.text}</p>
                                    <p className='text-secondary'>{testimonial.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-0 left-0 h-full w-4/12 bg-gradient-to-r from-[#191919]"></div>
                    <div className="absolute top-0 right-0 h-full w-4/12 bg-gradient-to-l from-[#191919]"></div>
                </div>
                <div onClick={handleNextClick} className='cursor-pointer border-2 border-primary rounded-full sm:w-14 w-8 flex items-center hover:shadow-inner hover:shadow-primary duration-300'>
                    <img className='sm:w-14 w-8' src={RightArrowIcon} alt="icon" />
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
