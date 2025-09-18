const Events = () =>{

    const handleMyEvent = () =>{
        console.log("Ativou o Evento!")
    };

    return(
        <div>
            <button onClick={handleMyEvent}>Clique Aqui!</button>
        </div>
    );
;}

export default Events;