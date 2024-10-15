const Events = () => {

    const handleClick = (e) => {
        console.log(e)
        console.log("Testando um evento")
    }

    // 8 - Funçã ode rencerização
    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderizando outra coisa</h1>
        }
    }

    // return 10 > 2 && <p>Carregando...</p>

  return (
    <div>
        <div>
            <button onClick={() => console.log("Testando um evento")}>Clique aqui</button>
        </div>
        {/* 7 - eventos com função */}
        <div>
            <button onClick={handleClick}>Clique aqui - com função</button>
        </div>
        {/* 8 - Função com render */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>

  )
}

export default Events