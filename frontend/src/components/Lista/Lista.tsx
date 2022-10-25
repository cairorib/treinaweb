import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./Lista.style"

interface ListaProps{
    professores: Professor[]
}


const Lista = (props:ListaProps)=>{


    return(<>
        {
            props.professores.length>0 ? (
<ListaStyled>
        { props.professores.map(professor=>(
            <ItemLista key={professor.id}>
            <Foto src={professor.foto} />
            <Informacoes>
                <Nome>{professor.id}</Nome>
                <Valor>
                {professor.valor_hora.toLocaleString('pt-BR',{
                    minimumFractionDigits:2, style:'currency', currency:'BRL'
                })}
                </Valor>
                <Descricao>{professor.descricao}</Descricao>
                <Button sx={{width:'70%'}}>Marcar aula  </Button>
            </Informacoes>
        </ItemLista>
        ))}
        
        
       
    </ListaStyled>
            ):(
           <ListaVazia>
            Nenhum item encontrado
           </ListaVazia>
            )
        }
    </>);

}

export default Lista;