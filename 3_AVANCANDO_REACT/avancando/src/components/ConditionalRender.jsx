const ConditionalRender = () => {

    const x = 5

    const name = "Bernardo"

  return (
    <div>
        {/* 7 - render condicional */}
        <h3>Isso será exibido?</h3>
        {x > 2 && <p>Se x for true, sim!</p>}
        {/* 8 - else */}
        <h3>Render ternário</h3>
        {name === "Bernardo" ? (
            <div>
                <p>Olá Bernardo!</p>
            </div>
        ) : (
            <div>
                <p>Olá estranho!</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender