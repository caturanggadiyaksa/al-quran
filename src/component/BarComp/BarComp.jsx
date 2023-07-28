
const BarComp = ({ surah, juz, bookmark }) => {
    return (
        <div className="pt-[6rem]">
            <div className="mt-10 mb-4 flex justify-center items-center">
            
                <div className="flex flex-wrap justify-center items-center  w-2/5 py-6 rounded-full bg-slate-900 text-white text-base sm:py-2">
                    <div className="w-[10rem]">
                        <a
                        className="flex flex-wrap justify-center items-center"
                        href={ surah }
                        >
                       
                        <span className="hidden md:block">Surah</span>
                        </a>
                    </div>
                    <div className="w-[10rem]">
                        <a
                        className="flex flex-wrap justify-center items-center"
                        href={ juz }
                        >
                        
                        <span className="hidden md:block">Juz</span>
                        </a>
                    </div>
                    <div className="w-[10rem]">
                        <a
                        className="flex flex-wrap justify-center items-center"
                        href={ bookmark }
                        >
                      
                        <span className="hidden md:block">Bookmark</span>
                        </a>
                    </div>
              
                </div>
            
            </div>
        </div>

    )
}

export default BarComp;