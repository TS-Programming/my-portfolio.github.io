import React from 'react';
import { Grid, Box, Link, Text, UnorderedList, ListItem, Image } from '@chakra-ui/react';
//import { Link as RouterLink } from 'react-router-dom';


// - 3D adaptation of Pentago, fully playable on both mobile and desktop with dynamic camera perspectives.
  
// - Bespoke assets crafted in Blender, complemented by original sound design for an authentic Pentago experience.
  
// - Advanced AI opponent, evolved from a Java-based algorithm to C# with asynchronous Min-Max and Alpha-Beta pruning mechanics.


const GameGrid = () => {
    // Sample game data
    const gameData = [
        {
            imageUrl: "https://i.imgur.com/urYpgfy.png",
            linkUrl: "https://tannersamples.com/#/pentago",
            gameTags: ["Multiplayer", "Challenging AI", "Multi-Platform"],
            description: "Pentago is a simple, but deep strategy game to play against the computer or a friend.",
            features: ["3D adaptation of Pentago, playable on both mobile and desktop with dynamic camera perspectives", 
                        "Highly polished presentation with charming music and sound effects",
                        "Advanced AI opponent with asynchronous Min-Max and Alpha-Beta pruning mechanics"],
            bannerLabel: "Relax with a challenge"
        },
        {
            imageUrl: "https://i.imgur.com/H2P3IDg.jpg",
            linkUrl: "https://tannersamples.com/#/kickback",
            gameTags: ["Arcade", "Online" , "Top-Down", "Shooter"],
            description: "Kickback is an explosive top down arcade shooter in space.",
            features: ["Destructive fragmentation special effects", "Online leaderboard", "Highly polished graphics, spatial audio, and cohesive UI"],
            bannerLabel: "Go for the highscore!"
        }
        // {
        //     imageUrl: "https://i.imgur.com/6wQQTrG.jpg",
        //     linkUrl: "https://tannersamples.com/#/making-the-site",
        //     gameTags: ["ReactJS", "TypeScript" , "Unity", "Needle Tools"],
        //     description: "How I made my website.",
        //     features: ["3D graphics centerpiece with links to portfolio pages", "Custom ReactJS site", "WebGL integration with ReactJS using Unity and Needle Tools"],
        //     bannerLabel: "This site"
        // }//,
        // {
        //     imageUrl: "https://lineinlime.com/wp-content/uploads/2018/05/image_20180518_104325.jpg",
        //     linkUrl: "/game-page-1",
        //     gameTags: ["Action", "Multiplayer"],
        //     description: "Short game description.",
        //     features: ["Feature 1", "Feature 2"],
        //     bannerLabel: "New Release"
        // },
        // {
        //     imageUrl: "https://lineinlime.com/wp-content/uploads/2018/05/image_20180518_104325.jpg",
        //     linkUrl: "/game-page-1",
        //     gameTags: ["Action", "Multiplayer"],
        //     description: "Short game description.",
        //     features: ["Feature 1", "Feature 2"],
        //     bannerLabel: "New Release"
        // }
    ];

    return (
        <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={6}
            margin="0 auto"
            mt = "50px"
            // width="calc(100% - 48px)"
            width="100%"
            maxWidth="1200px"
            overflowX="hidden"
        >
            {gameData.map((game, index) => (
    <Box key={index}>
        <Box
            overflow="hidden"
            borderRadius="8px"
            border="2px solid #FFF"
            position="relative"
            height="400px"
            width="100%"
        >
            <Link href={game.linkUrl} style={{ height: '100%', display: 'block' }}>
                <Box height="100%" position="relative" overflow="hidden">
                    <Image
                        src={game.imageUrl}
                        alt={game.bannerLabel}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        transition="transform .2s"
                        _hover={{ transform: 'scale(1.1)' }}
                    />
                </Box>
            </Link>
            <Box
                position="absolute"
                bottom="0"
                left="0"
                width="100%"
                backgroundColor="rgba(0,0,0,0.5)"
                color="white"
                textAlign="center"
                padding="5px 0"
            >
                {game.bannerLabel}
            </Box>
        </Box>
        {/* game tags */}
        <Box display="flex" justifyContent="flex-start" gap="2" mt="4" ml="4">
            {game.gameTags.map((tag, tagIndex) => (
                <Box
                    key={tagIndex}
                    bgColor="teal.500"
                    color="white"
                    borderRadius="4px"
                    padding="5px"
                    textAlign="center"
                    fontWeight="bold"
                >
                    {tag}
                </Box>
            ))}
        </Box>
        <Text textAlign="center" mt="2">
            {game.description}
        </Text>
        <Box mt="2">
            <UnorderedList>
                {game.features.map((feature, fIndex) => (
                    <ListItem key={fIndex}>{feature}</ListItem>
                ))}
            </UnorderedList>
        </Box>
    </Box>
))}

        </Grid>
    );
};

export default GameGrid;
