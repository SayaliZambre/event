import React from 'react';

function CardDesign() {
    return (
        <section className="invite" id="invite">
            <div className="title">
                <h1>Card<span>Design</span></h1>
                <p>Choose the best card Design.</p>
            </div>
            <div className="invitation-row">
                {[...Array(12)].map((_, index) => (
                    <div className="invitation-box" key={index}>
                        <img src={`card-${index + 1}.jpg`} alt={`Card ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CardDesign;
