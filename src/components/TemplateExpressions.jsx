const TemplateExpressions = () => {
    const nome = "Lucas"; //Variável
    const dados = { //variável que guarda objetos
        idade: 26, //lembra o array(vetor)
        emprego:"Professor",
    };
return(
    <div>
        <h1>Olá {nome}, tudo bem?</h1> 
        {/*Recebe o conteudo da variavel nome e exibe*/}
        <p>Você trabalha como {dados.emprego}</p>
        <p>{4+4}</p>{/*Entende e executa a conta e mostra na página*/}
        <p>{console.log("Esse comentário vai para o console do navegador")}</p>
        {/*Exibe a mensagem no console do navegador*/}
    </div>
);
};

export default TemplateExpressions;