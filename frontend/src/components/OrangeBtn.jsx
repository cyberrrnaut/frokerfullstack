
  
  export function OrangeBtn({ h, w }) {
    return (
      <div>
        <button
          type="button"
          className="bg-orange-500 text-white rounded-full"
          style={{ height: `${h}px`, width: `${w}px` }}
        >
          Get Started {"->"}
        </button>
      </div>
    );
  }
  
  