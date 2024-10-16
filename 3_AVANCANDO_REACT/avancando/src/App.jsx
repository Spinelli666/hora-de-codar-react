import './App.css'

// 2 - imagem em assets
import night from './assets/night.jpg'

// 3 - useState
import Data from './components/Data'

// 4 - renderizacao de lista
import ListRender from './components/ListRender'

function App() {

  return (
    <div className="App" style={{paddingBottom: "500px"}}>
      <h1>Avançando em React</h1>
      {/* 1 - imagem em publi */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - imagem em assets */}
      <img src={night} alt="Outra imagem" />
      {/* 3 - useState */}
      <Data />
      {/* 4 - renderizacao de lista */}
      <ListRender />
    </div>
  )
}

export default App