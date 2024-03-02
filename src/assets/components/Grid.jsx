import React from "react";
import Card from "./Card";

const Grid = () => {
    return (
        <div className="Grid">
            <Card songName='Trust ME' singer='Sunkis' 
                imageUrl='../../src/sunkis.jpeg'
                songUrl='https://www.youtube.com/watch?v=VTLE9uB3fwg'/>
            <Card songName='Like I Do' singer='Sunkis' 
                imageUrl='../../src/sunkis1.jpg'
                songUrl='https://www.youtube.com/watch?v=urGTwUne23c'/>
            <Card songName='Unholy' singer='MADILN' 
                imageUrl='../../src/unholy.png'
                songUrl='https://www.youtube.com/watch?v=Uq9gPaIzbe8'/>
            <Card songName='Im a Coconut' singer='Coconut Hen' 
                imageUrl='../../src/coconut.jpg'
                songUrl='https://www.youtube.com/watch?v=1J4YK_CO51E'/>
            <Card songName='Stay With Me' singer='Anson Seabra' 
                imageUrl='../../src/staywithme.jpg'
                songUrl='https://www.youtube.com/watch?v=gdhYjkQREww'/>
            <Card songName='I Want You' singer='Elaine' 
                imageUrl='../../src/iwantyou.jpg'
                songUrl='https://www.youtube.com/watch?v=Rs9Xf071qZU'/>
            <Card songName='Empire State Of Mind' singer='Sofie Fjellvang' 
                imageUrl='../../src/newyork.jpg'
                songUrl='https://www.youtube.com/watch?v=2uO59HErl4U'/>
            <Card songName='Abu Dhabi' singer='Mikolas Josef' 
                imageUrl='../../src/abudhbi.jpg'
                songUrl='https://www.youtube.com/watch?v=kRScLRxbnPQ'/>
            <Card songName='Night Dancer' singer='Will Stetson' 
                imageUrl='../../src/nightdancer.jpg'
                songUrl='https://www.youtube.com/watch?v=aX8JmX-PJ8k'/>
            <Card songName='Legends Never Die' singer='Against the Current' 
                imageUrl='../../src/legend.jpg'
                songUrl='https://www.youtube.com/watch?v=r6zIGXun57U'/>
            <Card songName='Flower' singer='Johny Stimson' 
                imageUrl='../../src/flower.jpeg'
                songUrl='https://www.youtube.com/watch?v=sgNkCrAhTGc'/>

            <Card songName='Bitty Boppy Betty' singer='Pink Martini' 
                imageUrl='../../src/bitty.jpeg'
                songUrl='https://www.youtube.com/watch?v=JdUhS4pmf4M'/>
        </div>
    )
}

export default Grid;

