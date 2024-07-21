import { StickyScroll } from "./ui/sticky-scroll-reveal";
import "../index.css"

const content = [


   

  {
    title: `[ 01 ]`,
    description:
      `Sign Up on Froker app `,
      comment: `Sign Up using your contact number and personalize your profile for a tailored Froker experience`,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1719645227/32_6382554_ysg563.png"
          width={300}
          height={300}
          className="h-[635px] w-[382px] object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    
    
    title: `[ 02 ]`,
    description:
      `Set Up Your Store
`,
      comment: `Click on "Check out Now" on home screen, select your category and preferred brands to customize your store.`,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1719644589/31_7728_v7ppsb.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    
    title: `[ 03 ]`,
    description:
      `Tag & Share Product Links`,
      comment: `Tag products seamlessly and share product links with your followers effortlessly. `,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1719645226/34_680492_rxhjam.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    
    title: `[ 04 ]`,
    description:
      `Earn Commission`,
      comment: `Stay informed about your earnings and monitor performance through comprehensive analytical data. `,
    
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://res.cloudinary.com/dapbrn8a9/image/upload/v1719645226/33_1_ipjqti.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export function Scroll() {
  return (
    <div className="App">
      <StickyScroll content={content} contentClassName="custom-content-class" />
    </div>
  );
}
