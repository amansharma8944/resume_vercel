import { Box, Button, TextField } from "@mui/material";
import Layout from "./layout/Layout";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';


const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 1vw;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );


function SignIn() {

  

    return (

        <> 
                <section className="mt-[40vh] w-full flex items-center justify-center"> 
<Layout className={" w-full flex items-center justify-center flex-col "}>

<h2  className="font-bold text-5xl mb-full w-full text-center
lg:text-4xl
">ANY SUGGESTION </h2>
<p className=" text-[10px] tracking-[1px] mt-[10px] font-semibold  text-red-500 ">FILL OUT FORM BELOW</p>

<Box sx={{display:"block", width:"100%", border:"1px solid" ,marginTop:"25vh",minHeight:"50vh",padding:"60px 15px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"


}}
className="boxshadowforproject w-[77vw] lg:w-[100vw] lg:ml-[18vw]"


>
<TextField
          label="NAME"
          id="outlined-size-small"
          
          size="small"
          sx={{width:"40vw",marginBottom:"30px"}}
        />
<TextField
          label="EMAIL"
          id="outlined-size-small"
          
          size="small"
          sx={{width:"40vw",marginBottom:"30px"}}
        />
        <StyledTextarea
  aria-label="minimum height"
  minRows={10}

  placeholder="Your SUGGESTIONS FOR ME"
  sx={{display:"block",marginTop:"10px",width:"40vw"}}
/>
<button style={{background:"black",padding:"10px 30px",color:"white",borderRadius:"15px",marginTop:"35px"}}>SEND</button>
 

</Box>


</Layout>


                </section>
        </>
    );
}

export default SignIn;
