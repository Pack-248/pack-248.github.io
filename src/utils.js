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
        {
            quote: "The Aims of Scouting are: Character, Citizenship, Personal Fitness, and Leadership"
        },
        {
            quote: "The mission of the Boy Scouts of America is to prepare young people to make ethical and moral choices over their lifetimes by instilling in them the values of the Scout Oath and Law."
        },
        {
            quote: "The Methods of Scouting are: Living the Ideals, Belonging to a Den, Advancement, Family Involvement, Activities, Serving the Neighborhood, and Uniform."
        },
        {
            quote: "A Scout is never taken by surprise; he knows exactly what to do when anything unexpected happens. - Lord Robert Baden-Powell"
        },
        {
            quote: "A week of camp life is worth six months of theoretical teaching in the meeting room. - Lord Robert Baden-Powell"
        },
        {
            quote: "Boys can see adventure in a dirty old duck puddle, and if the Scoutmaster is a boys' man he can see it too. - Lord Robert Baden-Powell"
        },
        {
            quote: "Nobody is too small to do a good turn, even if it is only to smile. - Lord Robert Baden Powell"
        },
        {
            quote: "Be Prepared… the meaning of the motto is that a Scout must prepare himself by previous thinking out and practicing how to act on any accident or emergency so that he is never taken by surprise. - Lord Robert Baden Powell"
        },
        {
            quote: "A Good Turn will educate the Scout out of the groove of selfishness. - Lord Robert Baden Powell"
        },
        {
            quote: "If you make listening and observation your occupation you will gain much more than you can by talk. - Lord Robert Baden Powell"
        },
        {
            quote: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine. -Neil Armstrong"
        },
        {
            quote: "As we look ahead into the next century, leaders will be those who empower others. -Bill Gates"
        },
        {
            quote: "Earth and sky, woods and fields, lakes and rivers, the mountain and the sea, are excellent schoolmasters, and teach some of us more that what we could learn from books. -John Lubbock"
        },
        {
            quote: "Now I know the secret of making the best persons; it is to grow in the open air and to eat and sleep with the Earth. -Walt Whitman"
        },
        {
            quote: "The glories of a mountain campfire are far greater than may be guessed…. One can make a day of any size, and regulate the rising and setting of his own sun and the brightness of its shining. -John Muir"
        },
        {
            quote: "It only takes a few years of dedication to become an Eagle Scout, but the lessons learned in Scouting will be carried for the rest of your life."
        },
        {
            quote: "It only takes a few years of dedication to become an Eagle Scout, but the lessons learned in Scouting will be carried for the rest of your life."
        }
    ];

    const total = quotes.length;
    let randomNum = Math.floor(Math.random() * total);

    return quotes[randomNum].quote;

}
