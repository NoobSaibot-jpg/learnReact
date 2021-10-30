
export default function Card({title, subtitle, descr}){
    return(
        <div className="folder">
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">{subtitle}</h2>
            <p>{descr}</p>
        </div>
    )
}