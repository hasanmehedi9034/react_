import Clock from "./Clock"

export default function ClockList({quantity = []}) {
    return (
        <>
            {
                quantity.map(() => <Clock key={Math.random()} />)
            }
        </>
    )
}
