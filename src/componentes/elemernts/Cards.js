import style from './Cards.module.css'
import image10 from '../Image/projets/image10.png'
import ButtonB from './ButtonB'

function Cards () {
    return (
        <div className={style.card}>
            <p>meus Cards!</p>
            <img  src={image10} alt='error'/>
            <div>
                <h3>
                    Título
                </h3>
                <p>
                    Tecnologia
                </p>
                <p>
                    Descrição
                </p>
                <ButtonB text='Acesse o repositório'/>
            </div>
        </div>
    )
}

export default Cards