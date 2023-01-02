import { Counter } from '../Counter/Counter'

export function Main() {
  return (
    <div className="counter_wr">
      <h3>Ход</h3>
      <div className="counter">
        <Counter />
        <div className="lds-dual-ring" />
      </div>
    </div>
  )
}
