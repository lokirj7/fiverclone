import React from 'react'
import Featured from '../../components/Featured/Featured'
import TrustedBy from '../../components/TrustedBy/TrustedBy';
import CatCard from '../../components/catCard/CatCard';
import Slide from '../../components/Slide/Slide';
import { cards } from "../../data";
function home() {
    return (
        <div className='home'>
            <Featured />
            <TrustedBy />
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map((card) => (
                    <CatCard key={card.id} card={card} />
                ))}
            </Slide>

        </div>
    )
}

export default home
