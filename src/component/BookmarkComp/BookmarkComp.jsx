import React, { useState, useEffect, useMemo } from 'react';

const BookmarkComp = () => {
    const [bookmark, setBookmark] = useState([]);
    const [loading, setLoading] = useState(true);

    const data = useMemo(() => [
        {
            "id": 1,
            "title": "Al-Fatihah",
            "author_name": "Ali",
        }
    ], []);

    useEffect(() => {
        // Check if data exists in Local Storage
        const storedQuranData = localStorage.getItem('bookmark');
    
        if (storedQuranData) {
            // If data exists, parse and use it
            setBookmark(JSON.parse(storedQuranData));
            setLoading(false);
        } else {
            // If no data in local storage, initialize with the provided data and set loading to false
            localStorage.setItem('bookmark', JSON.stringify(data));
            setBookmark(data);
            setLoading(false);
        }
    }, [data]); // Include 'data' in the dependency array
    
    return (
        <div>
            {/* Your JSX content goes here */}
            {loading ? <p>Loading...</p> : <p>Bookmark Data: {JSON.stringify(bookmark)}</p>}
        </div>
    );
};

export default BookmarkComp;
