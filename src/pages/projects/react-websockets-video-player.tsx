import WebsocketsPlayer from "../../components/projects/websockets-player";
import ProjectLayout from "../../layouts/projects/ProjectLayout";

const ReactWebsocketsPlayer = () => {
  return (
    <ProjectLayout
      {...{
        name: "React Websockets Video Player",
        about:
          "React websockets video player is a versatile React component that allows you to play WebSocket videos and render them to a canvas in a React application. The package provides two versions of the player, one using web workers for enhanced performance and another without web workers.",
        github: "https://github.com/ericus123/react-websockets-video-player",
        documentation:
          "https://www.npmjs.com/package/react-websockets-video-player",
      }}
    >
      <WebsocketsPlayer />
    </ProjectLayout>
  );
};

export default ReactWebsocketsPlayer;
