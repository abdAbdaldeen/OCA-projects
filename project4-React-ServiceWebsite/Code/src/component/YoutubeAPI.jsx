import React from 'react';
import YoutubeVideo from './YoutubeVideo';
import '../styles/YoutubeAPIStyle.css';
import { Col, Container, Row } from 'react-bootstrap';

class YoutubeAPI extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      videos: [],
    };
  }
  async componentDidMount() {
    const url =
      'https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=4&playlistId=PLkcBngyiq9pfEnMNjo_wcZL3T3Rzh81UY&key=AIzaSyAtJhfD29_hZH256jtRy602PhKBBozo-fo';

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ videos: data.items });
  }
  render() {
    const { videos } = this.state;

    const renderedVideos = videos.map((video, index) => {
      return <YoutubeVideo key={video.id} video={video} />;
    });
    return (
      <article>
        <h3 style={{ textAlign: 'center', paddingTop: '3rem' }}>
          Protect yourself from COVID-19
        </h3>
        <Container>
          <Row>{renderedVideos}</Row>
        </Container>
      </article>
    );
  }
}

export default YoutubeAPI;
