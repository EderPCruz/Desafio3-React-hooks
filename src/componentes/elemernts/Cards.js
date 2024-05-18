import style from './Cards.module.css'
import ButtonB from './ButtonB'

function Cards ({img, site, title, tech, description, repository}) {
    return (
        <div className={style.card}>
            <a href={site}>
                <img src={img} alt='error'/>
            </a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia: </strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositório' link={repository}/>
            </section>
        </div>
    )
}

export default Cards