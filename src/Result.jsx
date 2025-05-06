export default function Result({ humanScore, botScore }) {
    return (
        <div className={`${humanScore == 5 ? "block" : botScore == 5 ? "block" : "hidden"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iusto!
        </div>
    )
}
