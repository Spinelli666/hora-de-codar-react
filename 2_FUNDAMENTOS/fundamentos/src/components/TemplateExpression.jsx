// 4 - tempalte expression

const TemplateExpression = () => {

    const name = "Be"

    const data = {
        age: 22,
        job: "Estagiário"
    }

    return (
        <div>
            <p>A soma é {2 + 2}</p>
            <h3>Bem-vindo {name}</h3>
            <p>Sua idade é {data.age} anos e você é um {data.job}.</p>
        </div>
    )
}

export default TemplateExpression