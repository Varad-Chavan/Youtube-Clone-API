import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [VideoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistcis&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedtoVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);
  if (!VideoDetail?.snippet) return "loading......";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = VideoDetail;
  return (

    <Box>

      <Stack direction={{xs:'column',md:'row'}}>

        <Box flex={1}>

          <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
          <ReactPlayer url={`https//www.youtube.com/watch?v=${id}`} className='react-player'/>
          <Typography color='#FFF' variant='h5' fontWeight='bold' p={2}>
            {title}
          </Typography>
          <Stack direction='row' justifyContent='space-between' sx={{color:'#FFF'}} py={1} px={2}>
            <Link to={`/channel/${channelId}`}>
            <Typography color='#fff' variant={{sm:'subtitle1', md:'h6'}}>
              {channelTitle}
              <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
            </Typography>
            </Link>
            <Stack direction='row' gap='20px'>
              <Typography variant="body1" sx={{opacity:0.7}}>
                {parseInt(viewCount).toLocaleString('en-US')} views
              </Typography>
              <Typography variant="body1" sx={{opacity:0.7}}>
                {parseInt(likeCount).toLocaleString('en-US')} likes
              </Typography>
            </Stack>
          </Stack>
          </Box>
          
        </Box>

        <Box px={2} py={{ md: 1, xs:5}} justifyContent="center" alignItems="center">
            <Videos videos={videos} dir='column'/>
          </Box>

      </Stack>
</Box>

  )

};

export default VideoDetail;
