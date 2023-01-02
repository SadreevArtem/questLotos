/* eslint-disable max-len */
import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Table } from './components/Table/Table'

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <p>Уважаемые участники, во время вашего хода вы можете изменять параметры торгов, указанных в таблице</p>
      <Main />
      <Table />
    </div>
  )
}

export default App
