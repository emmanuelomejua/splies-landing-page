const DesignBtn = ({ text, className }: {text: string, className: string}) => {
    return (
      <div className={`relative inline-block ${className}`}>
        <button className="bg-[#4A7B6E] text-white text-lg font-medium px-6 py-3 rounded-full shadow-md">
          {text}
        </button>
  
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 
          border-l-[18px] border-l-transparent 
          border-r-[18px] border-r-transparent 
          border-t-[12px] border-t-[#4A7B6E]"></div>
      </div>
    );
  };
  
  export default DesignBtn;
  