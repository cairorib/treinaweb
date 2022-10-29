import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../services/apiServices";

export function useIndex(){
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);
    
    const [nome,setNome] = useState('');
    const [email,setEmail] = useState('');
    const [profesorSelecionado, setProfessorSelecionado] = useState<Professor | null>(null)
    const [message,setMessage] = useState('')

        useEffect(()=>{
            ApiService.get('/professores').then((response)=>{
                setListaProfessores(response.data)
            })

            }
         );

        useEffect(()=>{
            limparFormulario()
        },[profesorSelecionado])

    function marcarAula(){
        if(profesorSelecionado!==null){
            if(validarDadosAula()){
                ApiService.post('/professores/'+ profesorSelecionado.id +'/aulas',{
                    nome,
                    email
                }).then(()=>{
                    setProfessorSelecionado(null);
                    setMessage('cadastrado com sucesso');
                }).catch((error)=>{
                    alert(error.response?.data.message);
                })
            } else{
                setMessage('preencha os dados corretamente');
            }
        }
    }

    function validarDadosAula(){
        return nome.length >0 && email.length >0 
    }

    function limparFormulario(){
        setNome('');
        setEmail('');
    }


    return {
        listaProfessores,
        nome,
        setNome,
        email,
        setEmail,
        profesorSelecionado,
        setProfessorSelecionado,
        marcarAula,
        message,
        setMessage

    }
}