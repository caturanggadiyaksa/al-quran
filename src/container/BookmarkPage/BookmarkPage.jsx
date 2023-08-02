import React from "react";
import BarComp from '../../component/BarComp/BarComp';
import BookmarkComp from "../../component/BookmarkComp/BookmarkComp";

const BookmarkPage = () => {

    return (
        <>
            <BarComp surah='/' juz='/juz' bookmark='/bookmark' />


            <div>
                <BookmarkComp />
            </div>
        </>
    )
}

export default BookmarkPage;