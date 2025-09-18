import MyComponent from "./MyComponent";

//Comentário
const PrimeiroComponente = () => {
    /*comentário de 
    duas linhas*/
    return(
        <div>
            {/* Comentário dentro do return */}
            <h1>Meu primeiro componente</h1>
            <MyComponent/>
        </div>
    );
};

export default PrimeiroComponente;