import React, { useContext }  from 'react';
import {Button, Box, Text, Flex,} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const TopBar: React.FC = () => {
  const navigate = useNavigate();

  // const navigateAndScroll = (sectionId: string) => {
  //   navigate('/');
  //   setTimeout(() => {
  //     const section = document.getElementById(sectionId);
  //     section?.scrollIntoView({ behavior: 'smooth' });
  //   }, 0); // Timeout to allow the DOM to update
  // };

  const navigateAndScroll = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const topBarHeight = 64; // Height of your top bar in pixels
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = sectionPosition - topBarHeight;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 0); // Timeout to allow the DOM to update
  };
  
  
  return (
    // <Flex
    //   as="nav"
    //   position="fixed" // Fixed position
    //   top={0} // Stick to the top
    //   left={0} // Align to the left
    //   right={0} // Align to the right
    //   zIndex="sticky" // Ensure it stays on top of other content
    //   p={0}
    //   justifyContent="center"
    //   bg="#303030"
    //   alignItems="center"
    //   h="64px"
    // >
    //   <Box display="flex" alignItems="center" h="full">
    //     {/* <Text fontSize="2xl" mr="20px">Tanner Samples</Text> */}
    //     <Button
    //       color="white"
    //       variant="ghost"
    //       h="64px"
    //       borderRadius={0}
    //       fontSize="2xl"
    //       onClick={() => navigateAndScroll('featured-section')}
    //       _hover={{ backgroundColor: 'transparent', color: 'white' }}
    //     >
    //       Tanner Samples
    //     </Button>

    //     <Button
    //       color="white"
    //       variant="ghost"
    //       h="64px"
    //       borderRadius={0}
    //       onClick={() => navigateAndScroll('about-section')}
    //       _hover={{ backgroundColor: 'red.700', color: 'white' }}
    //     >
    //       About
    //     </Button>
    //     <Button
    //       color="white"
    //       variant="ghost"
    //       h="64px"
    //       borderRadius={0}
    //       onClick={() => navigateAndScroll('games-section')}
    //       _hover={{ backgroundColor: 'red.700', color: 'white' }}
    //     >
    //       Games
    //     </Button>
    //     <Button
    //       color="white"
    //       variant="ghost"
    //       h="64px"
    //       borderRadius={0}
    //       onClick={() => window.open('https://www.linkedin.com/in/tanner-samples-ggs/', '_blank')}
    //       _hover={{ backgroundColor: 'red.700', color: 'white' }}
    //     >
    //       LinkedIn
    //     </Button>

    //     <a href="https://raw.githubusercontent.com/TS-Programming/my-portfolio.github.io/main/pdf/resume-tanner-samples-winter-2024.pdf" target="_blank" rel="noopener noreferrer">
    //       <Button
    //         color="white"
    //         variant="ghost"
    //         h="64px"
    //         borderRadius={0}
    //         _hover={{ backgroundColor: 'red.700', color: 'white' }}
    //       >
    //         Resume
    //       </Button>
    //     </a>
    //   </Box>
    //</Flex>

<Flex
  as="nav"
  position="fixed"
  top={0}
  left={0}
  right={0}
  zIndex="sticky"
  p={0}
  justifyContent="center"
  bg="#303030"
  alignItems="center"
  h="64px"
>
  <Box display="flex" alignItems="center" h="full">
    <Button
      color="white"
      variant="ghost"
      h="64px"
      borderRadius={0}
      fontSize={["md", "lg", "2xl"]} // Larger font size for the first button
      px={["2", "3", "4"]} // Less padding on larger screens
      onClick={() => navigateAndScroll('featured-section')}
      _hover={{ backgroundColor: 'transparent', color: 'white' }}
    >
      Tanner Samples
    </Button>

    {/* Other buttons with default font size */}
    <Button
      color="white"
      variant="ghost"
      h="64px"
      borderRadius={0}
      fontSize={["sm","md"]} // Larger font size for the first button
      px={["1", "2", "3"]} // Adjust padding for responsiveness
      onClick={() => navigateAndScroll('about-section')}
      _hover={{ backgroundColor: 'red.700', color: 'white' }}
    >
      About
    </Button>

    <Button
      color="white"
      variant="ghost"
      h="64px"
      borderRadius={0}
      fontSize={["sm","md"]} // Larger font size for the first button
      px={["1", "2", "3"]} // Adjust padding for responsiveness
      onClick={() => navigateAndScroll('games-section')}
      _hover={{ backgroundColor: 'red.700', color: 'white' }}
    >
      Games
    </Button>

    <Button
      color="white"
      variant="ghost"
      h="64px"
      borderRadius={0}
      fontSize={["sm","md"]} // Larger font size for the first button
      px={["1", "2", "3"]} // Adjust padding for responsiveness
      onClick={() => window.open('https://www.linkedin.com/in/tanner-samples-ggs/', '_blank')}
      _hover={{ backgroundColor: 'red.700', color: 'white' }}
    >
      LinkedIn
    </Button>

    <a href="https://raw.githubusercontent.com/TS-Programming/my-portfolio.github.io/main/pdf/resume-tanner-samples-winter-2024.pdf" target="_blank" rel="noopener noreferrer">
      <Button
        color="white"
        variant="ghost"
        h="64px"
        borderRadius={0}
        fontSize={["sm","md"]} // Larger font size for the first button
        px={["1", "2", "3"]} // Adjust padding for responsiveness
        _hover={{ backgroundColor: 'red.700', color: 'white' }}
      >
        Resume
      </Button>
    </a>
  </Box>
</Flex>

  

  );
}

export default TopBar;
