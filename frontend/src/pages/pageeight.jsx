import React, { useState } from 'react';
import { Accordionui } from '../components/Accordionui';

export function Pageeight() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqItems = [
    {
      title: "Who can join Froshare platform?",
      description: `Anyone eager to enhance their social media presence and income can join Froshare! Whether you are a creator aiming to amplify your influence and earnings, an affiliate partner seeking to expand your brand network and simplify link sharing, or simply interested in exploring affiliate marketing and collaborating with top brands.`,
    },
    {
      title: "How can I check brands and commission rates available on Froshare?",
      description: `Discover a world of options on Froker platform! Explore the Brands section in your profile to browse through a plethora of brands and their associated commissions. Do not wait – start collaborating and earning today! Dive into Froker app now!`,
    },
    {
      title: "How can I track my commissions and when will I get paid?",
      description: `With Froshare, simply log into your dashboard to monitor commissions and analyze followers purchases. When you are ready, redeem earnings with a single click. Your earnings will be credited to your linked bank account within 2-3 business days`,
    },
    {
      title: "What if there is an issue with your order?",
      description: `Froker is a community of trusted brands and businesses. Our dedicated customer support team is here to swiftly resolve any concerns you may have. Promote with confidence, knowing we have got your back!`,
    },
    {
      title: "Will I receive any brand collaboration opportunities?",
      description: `Yes, Froshare offers brand collaboration opportunities based on creators profiles and engagement metrics.`,
    },
    {
      title: "I am eager to know if I will receive any sourcing opportunities and how it all works?",
      description: `Sourcing depends on the brand preferences and your profile. Find details in the "Details" section after selecting brand products from your dashboard. Remember, sourcing details are subject to each brands terms and conditions.`,
    },
    {
      title: "Will my Instagram account be permanently linked to Froshare?",
      description: `Your Instagram account remains linked to Froshare as long as you choose to utilize our services. You have the freedom to unlink it whenever you wish.`,
    },
    {
      title: "Still have questions?",
      description: `Feel free to reach out to our team at social@froker.in. We are here to provide answers and support every step of the way!`,
    },
  ];

  return (
    <div>
      <div className='flex justify-center pt-24'>
        <h1 className='flex justify-center text-4xl font-bold text-orange-500 pt-12'>
          Frequently Asked Questions
        </h1>
        <img
          className='h-36 w-60'
          src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1711203696/Untitled_design_-_2024-03-20T121153_1_xussyt.png"
          alt=""
        />
      </div>
      <div className='flex items-center justify-center'>
        <img
          className='h-[760px] w-[300px]'
          src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1711627656/Untitled_design_-_2024-03-21T154707_1_yxtlfh.png"
          alt=""
        />
        <div className='w-[1024px] space-y-6'>
          {faqItems.map((item, index) => (
            <Accordionui
              key={index}
              panel={`panel${index}`}
              title={item.title}
              description={item.description}
              expanded={expanded}
              handleChange={handleChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
