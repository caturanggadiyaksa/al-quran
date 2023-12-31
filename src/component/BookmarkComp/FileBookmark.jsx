import React from "react";

const FileBookmark = ({data}) => {
    
    
      return (
     
        <div className=" absolute inset-0 flex justify-center items-center bg-blur w-full h-full z-30">
         
       

          <div className=" bg-white p-4 rounded-lg shadow-md w-[90%] md:w-[60%] min-h-[8rem] ">
        
            <div className="flex flex-col justify-center items-center ">
             <div className="w-full">
              <div className="flex justify-end">
                  <button className="" onClick={data}>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
             </div>
              
              
              <p>Add To Bookmark</p>
              <div className="mt-6">
                <input type="text" placeholder="Enter folder name" />
              </div>


              <div className="mt-2">
                <button>Save</button>
              </div>
            
            </div>
          </div>
        </div>
      );
}
    

export default FileBookmark;