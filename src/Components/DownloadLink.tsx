import React from 'react';
import { Link, Icon, Box } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

interface DownloadLinkProps {
  url: string;
  text: string;
  buttonIcon: React.ElementType; 
}

const DownloadLink: React.FC<DownloadLinkProps> = ({ url, text, buttonIcon }) => {
  return (
    <Box textAlign="center"  mb="8">
      <Link href={url} isExternal>
        {/* <Icon as={DownloadIcon} mr="2" />{text} */}
        <Icon as={buttonIcon} mr="2" />{text}
      </Link>
    </Box>
  );
};

export default DownloadLink;
