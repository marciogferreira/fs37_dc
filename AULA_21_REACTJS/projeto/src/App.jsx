import Header from './componentes/Header'
import Image from './componentes/Image'
import Produto from './componentes/Produto'
import Receitas from './componentes/Receitas'

function App() {
  
  return (
    <>
      <Header />
      <main>
        {/* PASSAGEM DE PROPS */}
        <Produto
          src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTKU9Emu3eea4WTtwTf0kcQZjh238U3vQyAYPH0zxNINxjEVc6al4ahsW0tXXz3RAuw8mL6YACxfpC-IGVYTFpZuyWpmaIaKEUl2pen4kMPfCLZsDkVcldfOExgpI02wKHEPPqr9WKLctA&usqp=CAc" 
          titulo="Mouse USB" 
          valor="19,00" 
        />
        <Produto
          src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSlocY8bKNoZJiW208kCJ2NkIumRd8hNq22nAss6XliFxNNvwUaITr95pWuAmfvu1IRA6XOVl91JJVF23hwmpTD8bVTpebBq8iqr6xdXznmDVsjUV-f4huEUSeJDetVR-klcMqe&usqp=CAc" 
          titulo="Teclado USB" 
          valor="34,99" 
        />
        <Produto 
          src=""
          titulo="MOnitor 24p" 
          valor="999,99" 
        />

        <Image />
        <Receitas nome="Bolo de Laranja">
          <h5>Ingredientes</h5>
          <ul>
            <li>Farinha</li>
            <li>Laranja</li>
          </ul>
          <h5>Modo de Preparo</h5>
          <ul>
            <li></li>
          </ul>
        </Receitas>

        <Receitas nome="Bolo de Chocolate">
          <ul>
            <li>Chocolate</li>
          </ul>
        </Receitas>
        <Receitas nome="Bolo de Cenoura" />
      </main>

      <section>
        <h1>Nossos Serviços</h1>
        <ul>
          <li>Manutenção de Computadores</li>
          <li>Manutenção de Impressora</li>
        </ul>
      </section>
      <footer>
        Rodapé
      </footer>
    </>
  )
}

export default App
