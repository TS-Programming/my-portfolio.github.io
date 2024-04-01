import React from 'react';
import {Box, Container, Text} from '@chakra-ui/react';
import ABOUT_TEXT from './about';
import GAME_GRID from './gameGrid';
import NEEDLE_GAMES from '../NeedleGames';
import TOP_BAR from '../Components/TopBar';
import BANNER from '../Components/Banner';
import Download_Link from '../Components/DownloadLink';

export default function Home() {

  return (
    <Container maxW="100%" p={0} pt="64px" pb="64px">
      <TOP_BAR/>
      <Box id="home-page">
        {/*<BANNER 
          id="featured-section" 
          title="Featured Project" 
          subTitle="This chest contains items from each of my portfolio pieces. Click on the description of an item to go to a page providing development details!"
        />*/}

        {/*<NEEDLE_GAMES/>*/}

        <Box id="about-section" mb="64px">
          <ABOUT_TEXT />
        </Box>

        <BANNER
          id="games-section"
          title="My Projects"
          subTitle="Click on the tiles to learn more about each project."
        />  

        <GAME_GRID />

        {/* <Text fontSize="2xl" fontWeight="bold" textAlign="center" mt="64px" mb="64px">
          Contact
        </Text>
        <Download_Link url="www.linkedin.com/in/tanner-samples-ggs" text="Linkedin"  buttonIcon={DownloadIcon}/> */}
      </Box>
    </Container>
  );
}