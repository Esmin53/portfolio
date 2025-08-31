"use client"

const BackToTop = () => {

        const handleScroll = (targetId: string) => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
        <div className="flex w-full items-center justify-center py-6">
            <div className="flex gap-1 items-center cursor-pointer group relative" onClick={() => handleScroll('top')}>
                <p className='md:text-2xl text-lg font-medium text-pink-300'>Back to top</p>
                <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-pink-200 transition-all duration-300 group-hover:w-full shadow-glowing" />
            </div>
        </div>
  )
}

export default BackToTop