import style from './Project.module.css'
import ButtonB from '../elemernts/ButtonB'
import Cards from '../elemernts/Cards'

function Project () {
    return(
        <div id='Projects' className= {style.projects}>
            <h1>Projeto</h1>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <ButtonB text='Acesse meu repositorio completo' link='https://github.com/EderPCruz'/>
        </div>
    )
}

export default Project