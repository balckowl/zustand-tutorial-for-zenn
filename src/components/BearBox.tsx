import { useBearStore } from "../zustand/bearStore"

const BearBox = () => {

    const bears = useBearStore(state => state.bears)
    const incrementPopulation = useBearStore(state => state.increasePopulation)
    const removeAllBears = useBearStore((state) => state.removeAllBears)

    return (
        <div>
            <h1>Bear Box</h1>
            <p>brears: {bears}</p>
            <div>
                <button onClick={incrementPopulation}>add bear</button>
                <button onClick={removeAllBears}>remove bear</button>
            </div>
        </div>
    )
}

export default BearBox