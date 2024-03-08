import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard,  VideoCard } from "./";

const Videos = ({ videos}) => {
  if (!videos) {
    // Optionally, render a placeholder or return null if videos is not available
    return null; // or <PlaceholderComponent />
  }
  return (
    <Stack direction=  "row" flexWrap="wrap" justifyContent="start"   gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
            
          {item.id && item.id.videoId && <VideoCard video={item} />}
          {item.id && item.id.channelId && <ChannelCard channelDetail={item} />}
      
        </Box>
        
      ))}
    </Stack>
  );
}

export default Videos;