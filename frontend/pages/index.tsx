import { Box } from "@mui/material";
import { NextPage } from "next";
import { Professor } from "../src/@types/professor";
import Header from "../src/components/Header/Header";
import Lista from "../src/components/Lista/Lista";

/* 
function Botao(props): JSX.Element{
 return  <a href="#">{props.title}</a>
} */

const home: NextPage =()=>{

  const professores: Professor[]=[
    {
      id:1,
      nome:'professor1',
      foto:'https://img.freepik.com/vetores-premium/personagem-de-avatar-de-homens-de-professores_24911-52722.jpg',
      descricao: 'Descricao do professor',
      valor_hora:100
    },
    {
      id:2,
      nome:'professor2',
      foto:'https://img.freepik.com/vetores-premium/personagem-de-avatar-de-homens-de-professores_24911-52722.jpg',
      descricao: 'Descricao do professor',
      valor_hora:100
    },
    {
      id:3,
      nome:'professor3',
      foto:'https://img.freepik.com/vetores-premium/personagem-de-avatar-de-homens-de-professores_24911-52722.jpg',
      descricao: 'Descricao do professor',
      valor_hora:100
    },
    {
      id:4,
      nome:'professor4',
      foto:'https://img.freepik.com/vetores-premium/personagem-de-avatar-de-homens-de-professores_24911-52722.jpg',
      descricao: 'Descricao do professor',
      valor_hora:100
    }
  ]

    return (
    <>    
      <Box sx={{backgroundColor:'secondary.main'}}> 
      <Lista professores={professores} />
      </Box>
    
    </>

        
    )
}

export default home;