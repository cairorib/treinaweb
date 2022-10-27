import { Box, Button, Dialog, DialogActions, Grid, TextField } from "@mui/material";
import { NextPage } from "next";
import { Professor } from "../src/@types/professor";
import Header from "../src/components/Header/Header";
import Lista from "../src/components/Lista/Lista";
import { useIndex } from "../src/hooks/pages/useIndex";



const home: NextPage =()=>{

  const {listaProfessores, nome,setNome,email,setEmail, profesorSelecionado, setProfessorSelecionado} = useIndex();
  
  return (
    <div>    
      <Box sx={{backgroundColor:'secondary.main'}}> 
        <Lista 
          professores={listaProfessores} 
          onSelect = {(professor)=> setProfessorSelecionado(professor)}
        />
      </Box>
    
      <Dialog 
        open={true}
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
                type= 'text'
                fullWidth
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                
            </Grid>
          <DialogActions sx={{mt:5}}>
            <Button>
              Cancelar
            </Button>
            <Button>
              Marcar
            </Button>
          </DialogActions>

          </Grid>
      </Dialog>
    </div>

        
    )
}

export default home;