import React from 'react';

function Card(prop){

    return(
        <>

            <div className='cards'>
                <div className='card'>
                    <img src={prop.imgsrc} alt='DARK_pic' className='card_img'/>
                    <div className='card_info'>
                        <span className='card_category'> {prop.title}</span>
                        <h3 className='card_title'> {prop.sname} </h3>
                        <a href={prop.link} target='_blank'>
                            <button> Watch Now</button>
                        </a>
                    </div> 
                </div>
            </div>

        </>
    );

}

export default Card;