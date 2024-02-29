import './styles/learnMore.css'
function LearnMore(){
    const learnMore = () => {

    };
    return(
        <>
        <div className="text-container">
        <h1 className="title">Burger Place <br /> <span>Onde Cada Mordida É Uma Experiência</span> </h1>
        <p className='message'>Descubra a delícia de nossos hambúrgueres artesanais </p>
            <button onClick={learnMore}>Saiba Mais</button>
        </div>
        </>
    );
}

export default LearnMore