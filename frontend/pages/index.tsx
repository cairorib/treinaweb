import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from "@mui/material";
import { NextPage } from "next";
import { Professor } from "../src/@types/professor";
import Header from "../src/components/Header/Header";
import Lista from "../src/components/Lista/Lista";
import { useIndex } from "../src/hooks/pages/useIndex";



const home: NextPage =()=>{

  const {
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
  } = useIndex();
  
  return (
    <div>    
      <Box sx={{backgroundColor:'secondary.main'}}> 
        <Lista 
          professores={listaProfessores} 
          onSelect = {(professor)=> setProfessorSelecionado(professor)}
        />
      </Box>
    
      <Dialog
        onClose={()=>setProfessorSelecionado(null)} 
        open={profesorSelecionado !== null}
        fullWidth
        PaperProps={{sx:{p:5}}}
        >
          <Grid container spacing={1}>
              <Grid xs={12}>
                <TextField 
                label='digite o nome'
                type= 'text'
                fullWidth
                value={nome}
                onChange={(e)=>setNome(e.target.value)}
                />
                              </Grid>
              <Grid xs={12}>
                <TextField 
                label='digite o email'
                type= 'email'
                fullWidth
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                
            </Grid>
          <DialogActions sx={{mt:5}}>
            <Button
            onClick={()=> setProfessorSelecionado(null)}
            >
              Cancelar
            </Button>
            <Button
            onClick={()=>marcarAula()}
            >
              Marcar
            </Button>
          </DialogActions>

          </Grid>
      </Dialog>

      <Snackbar message={message} open={message.length>0}
      autoHideDuration={2500}
      onClose={()=> setMessage('')}
      
      />
    </div>

        
    )
}

export default home;