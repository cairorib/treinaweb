import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../services/apiServices";

export function useIndex(){
    const [listaProfessores, setListaProfessores] = useState<Professor[]>(
        [ ]
    );
    
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [profesorSelecionado, setProfessorSelecionado] = useState<Professor | null>(null)

        useEffect(()=>{
            ApiService.get('/professores').then((response)=>{
                setListaProfessores(response.data)
            })

            }
         );



    return {
        listaProfessores,
        nome,
        setNome,
        email,
        setEmail,
        profesorSelecionado,
        setProfessorSelecionado

    }
}