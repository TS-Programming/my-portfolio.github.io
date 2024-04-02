import React from 'react';
import { Box, Container, AspectRatio, Text, Grid } from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import TOP_BAR from '../Components/TopBar';
import Collapsible_Component from '../Components/CollapsibleComponent';
import Download_Link from '../Components/DownloadLink';
import { IoIosPlay } from "react-icons/io";

import { DownloadIcon } from '@chakra-ui/icons';
import { DiCode } from "react-icons/di";
import {about, objectPoolIntro, awakeAndStart, getFromPool, returnToPool, getActiveObjects, awakeAndStartIntro, getFromPoolIntro, returnToPoolIntro, getActiveObjectsIntro} from '../CodeSnippets/kickbackSnippets';


const Kickback = () => {
  const youtubeEmbedUrl = "https://www.youtube.com/embed/lGSVwhfV3WA?si=YoHpuV_dzYcfcSbH";


  return (
    <Container maxW={["100%", "90%", "80%", "70%", "65%"]} p={0} pt="64px">
    {/* <Container  p={0} pt="64px"> */}
      <TOP_BAR />
      <Box mt="0px" mb="100px" ml={["5%", "10%", "150px"]} mr={["5%", "10%", "150px"]}>
      {/* <Box mt="0px" mb="100px" ml="150px" mr="150px"> */}
      <Box textAlign="center" mb="25px" >
      <Text fontSize="6xl" fontWeight="bold">
        Kickback
      </Text>
      <Download_Link url="https://doublemeta.itch.io/kickback" text="Download Game"  buttonIcon={DownloadIcon}/>

      <Box display="flex" justifyContent="center" width="full" mb="8">
        <Grid templateColumns="max-content 1fr" rowGap={0} columnGap={6}  alignItems="center">
          <Text fontWeight="bold" textAlign="left">Project Status</Text>
          <Text textAlign="left">Complete</Text>

          <Text fontWeight="bold" textAlign="left">Project Duration</Text>
          <Text textAlign="left">One month</Text>

          <Text fontWeight="bold" textAlign="left">Software Used</Text>
          <Text textAlign="left">Unity, Ableton</Text>

          <Text fontWeight="bold" textAlign="left">Languages Used</Text>
          <Text textAlign="left">C#</Text>
        </Grid>
      </Box>
    </Box>
    <Text fontSize="4xl" fontWeight="bold" textAlign="center" >About Kickback</Text>
    <Text mb="8"> {about.trim()}</Text>
    
        <AspectRatio ratio={16 / 9} maxWidth="900px" width="full" margin="auto">
          <iframe
            src={youtubeEmbedUrl}
            frameBorder="0"
            allowFullScreen />
        </AspectRatio>

        <Collapsible_Component showText="View Object Pool Snippets" buttonIcon={DiCode} iconSize="32px">
          <Text whiteSpace="pre-wrap" fontSize="lg" textAlign="left" mb="8"> {objectPoolIntro.trim()}</Text>
          <Text whiteSpace="pre-wrap" fontSize="lg" textAlign="left" mb="8"> {awakeAndStartIntro.trim()}</Text>
          <SyntaxHighlighter language="csharp" style={dark}>{awakeAndStart.trim()}</SyntaxHighlighter>

          <Text whiteSpace="pre-wrap" fontSize="lg" textAlign="left" mb="8" mt="8"> {getFromPoolIntro.trim()}</Text>
          <SyntaxHighlighter language="csharp" style={dark}>{getFromPool.trim()}</SyntaxHighlighter>

          <Text whiteSpace="pre-wrap" fontSize="lg" textAlign="left" mb="8" mt="8"> {returnToPoolIntro.trim()}</Text>
          <SyntaxHighlighter language="csharp" style={dark}>{returnToPool.trim()}</SyntaxHighlighter>      

          <Text whiteSpace="pre-wrap" fontSize="lg" textAlign="left" mb="8" mt="8"> {getActiveObjectsIntro.trim()}</Text>
          <SyntaxHighlighter language="csharp" style={dark}>{getActiveObjects.trim()}</SyntaxHighlighter>     
        </Collapsible_Component>
      </Box>
    </Container>
  );
}

export default Kickback;