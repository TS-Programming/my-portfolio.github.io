import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const aboutDescription: string = `Technology has been a driving force in my life, sparking my curiosity and shaping my career path. My foundational education began with a digital audio certificate from Santa Rosa Junior College and continued with a Computer Science degree from Sonoma State University. Throughout my academic journey, I engaged in diverse projects ranging from software development to game creation, honing my skills in programming, design, and analytical thinking.

Professionally, I have worked as an audio engineer, deepening my understanding of sound technology and its applications. An 8-month robotics programming internship at VIAVI Solutions further broadened my exposure to the forefront of technological innovation, specifically in robotics and automation.

Following my graduation, my focus has been on application development. In this role, I've been able to leverage my technical skills to create user-centric solutions, showcasing my adaptability and commitment to innovation. My diverse experiences have prepared me to face challenges across various sectors within the tech industry.

I am enthusiastic about the opportunity to join a dynamic team, contributing my knowledge and skills while continuing to evolve as a professional. My goal is to be part of forward-thinking projects that use technology to create impactful and innovative solutions.`;

const AboutTanner = () => {
    return (
        // <Box mt="25px" mb="100px" ml="150px" mr="150px">
        //      <Text fontSize="4xl" mb="25px" textAlign="center">
        //          About Me
        //     </Text>
            
        //     <Text whiteSpace="pre-wrap" fontSize="md" mb="20px">
        //         {aboutDescription}
        //     </Text>
        // </Box>
        <Box mt="25px" mb="100px" ml={["5%", "10%", "150px"]} mr={["5%", "10%", "150px"]}>
            <Text fontSize="4xl" mb="25px" textAlign="center">
                About Me
            </Text>
            
            <Text whiteSpace="pre-wrap" fontSize="md" mb="20px">
                {aboutDescription}
            </Text>
        </Box>

    );
}

export default AboutTanner;

