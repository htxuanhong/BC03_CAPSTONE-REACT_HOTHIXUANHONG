import { Modal } from "antd";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useWindowSize } from "../../../../Hook/useWindowSize";
import "./ModalVideo.css";
const ModalPlayingTrailer = ({ visible, setVisible, movie }) => {
  const [playing, setPlaying] = useState(false);
  let windowSize = useWindowSize();

  const widthModal = 0.7 * windowSize.width;
  const heightModal = widthModal * 0.55;
  return (
    <Modal
      className="modal-video"
      centered
      visible={visible}
      onCancel={() => {
        setVisible(false);
        setPlaying(false);
      }}
      width={widthModal}
      footer={null}
      bodyStyle={{ padding: 0 }}
    >
      <ReactPlayer
        autoPlay
        width={`${widthModal}px`}
        height={`${heightModal}px`}
        controls={true}
        url={movie}
        playing={playing}
        onPlay={() => {
          setPlaying(true);
        }}
        onPause={() => {
          setPlaying(false);
        }}
      />
    </Modal>
  );
};

export default ModalPlayingTrailer;
