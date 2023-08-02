
const BarComp = ({ surah, juz, bookmark }) => {
    return (
        <div className="pt-[4rem] md:pt-[6rem]">
            <div className="mt-10 mb-4 flex justify-center items-center">
            
                <div className="flex flex-wrap justify-center items-center w-[90%]  min-h-[2.5rem] md:w-[80%] xl:w-2/5 py-6 rounded-full bg-slate-900 text-white text-sm md:text-base sm:py-2">
                    <div className=" w-1/3 md:w-1/3 xl:w-[10rem]">
                        <a
                        className="flex flex-wrap justify-center items-center"
                        href={ surah }
                        >
                       
                        <span className=" md:block">Surah</span>
                        </a>
                    </div>
                    <div className=" w-1/3 md:w-1/3 xl:w-[10rem]">
                        <a
                        className="flex flex-wrap justify-center items-center"
                        href={ juz }
                        >
                        
                        <span className=" md:block">Juz</span>
                        </a>
                    </div>
                    <div className=" w-1/3md:w-1/3 xl:w-[10rem]">
                        <a
                        className="flex flex-wrap justify-center items-center"
                        href={ bookmark }
                        >
                      
                        <span className=" md:block">Bookmark</span>
                        </a>
                    </div>
              
                </div>
            
            </div>
        </div>

    )
}

export default BarComp;