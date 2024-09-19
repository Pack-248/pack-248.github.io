import { useState, useEffect } from 'react';
import axios from 'axios';

export function RetrievePhotoList(albumId) {
    const [data, setData] = useState([]);

    const url =
    "https://graph.facebook.com/v2.5/" +
    albumId +
    "/photos?fields=photos{created_time,height,id,images,picture,name,updated_time,width,source}"

    useEffect(() => {
        axios.get(url)
            .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [url]);

    return data;
}

export function GetRandomScoutQuote() {
    const quotes =
    [
        {
            quote: "Scout law: A Scout is trustworthy, loyal, helpful, friendly, courteous, kind, obedient, cheerful, thrifty, brave, clean, and reverent."
        },
        {
            quote: "Scout oath: On my honor, I will do my best to do my duty to God and my country. To help other people at all times. To keep myself physically strong, mentally awake, and morally straight."
        },
        {
            quote: "Scout motto: Do your best!"
        },
    ];

    const total = quotes.length;
    let randomNum = Math.floor(Math.random() * total);

    return quotes[randomNum].quote;

}
