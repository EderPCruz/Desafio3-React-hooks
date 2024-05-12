import style from './Presentation.module.css';
import ButtonA from '../elemernts/ButtonA';
import ButtonB from '../elemernts/ButtonB';  

function Presentation () {
    return(
        <div id='Presentations' className={style.presentation}>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Juan</h1>
            <p>Sou um apaixonado por tecnologia e soluções inovadoras.Como <br/>
               Product Manager, eu tenho o compromisso de resolver <br/>
               problemascomplexos e trazer resultados excepcionais para os <br/>
               negócios.Meus projetos já geraram milhões de reais em receita <br/>
               anualestou sempre em busca de novos desafios para superar.
            </p>

            <ButtonA link='https://github.com/' text='Conecte-se comigo!'/>
            <ButtonB text='Botão B' />
        </div>
    )
}

export default Presentation