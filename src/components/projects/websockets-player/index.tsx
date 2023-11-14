import debounce from "lodash/debounce";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Player from "react-websockets-video-player";
import { RootState } from "../../../redux/store";
import { controlsText } from "./controls";
import styles from "./index.module.scss";

const WebsocketsPlayer = () => {
  const [wsUrl, setWsUrl] = useState<string>(
    localStorage.getItem("wsUrl") || `${process.env.NEXT_PUBLIC_SOCKETS_PLAYER}`
  );

  const { isDarkMode } = useSelector((state: RootState) => state.navBar);

  //   const [withWorker, setWithWorker] = useState<boolean>(
  //     localStorage.getItem("withWorker") === "true"
  //   );
  const [debug, setDebug] = useState<boolean>(
    localStorage.getItem("debug") === "true"
  );
  const [width, setWidth] = useState<number>(
    parseInt(localStorage.getItem("width") || "600")
  );
  const [height, setHeight] = useState<number>(
    parseInt(localStorage.getItem("height") || "600")
  );

  const debouncedUpdateLocalStorage = debounce(() => {
    localStorage.setItem("wsUrl", wsUrl);
    // localStorage.setItem("withWorker", `${withWorker}`);
    localStorage.setItem("debug", `${debug}`);
    localStorage.setItem("width", `${width}`);
    localStorage.setItem("height", `${height}`);
  }, 500);

  useEffect(() => {
    debouncedUpdateLocalStorage();
  }, [wsUrl, debug, width, height, debouncedUpdateLocalStorage]);

  const playerProps = useMemo(() => {
    return {
      wsUrl,
      width,
      height,
      debug,
      //   withWorker,
    };
  }, [wsUrl, width, height, debug]);

  const router = useRouter();
  const handleReload = () => {
    router.reload();
  };

  return (
    <div className={styles.container}>
      <div className={styles.controlsContainer}>
        <div className={styles.controls}>
          <div className={styles.controlTitles}>
            {controlsText?.map((text, i) => (
              <h2
                className={`${styles.control} ${
                  !isDarkMode ? styles.control_light : ""
                }`}
                key={i}
              >
                {text}
              </h2>
            ))}
          </div>
          <div className={styles.controlInputs}>
            <input
              type="text"
              className={`${styles.input} ${
                !isDarkMode ? styles.input_light : ""
              }`}
              placeholder="your websocket url"
              value={wsUrl}
              onChange={(e) => setWsUrl(e.target.value)}
            />
            {/* <input
              type="checkbox"
              className={styles.checkBox}
              checked={withWorker}
              onChange={() => setWithWorker(!withWorker)}
            /> */}
            <input
              type="checkbox"
              className={styles.checkBox}
              checked={debug}
              onChange={() => setDebug(!debug)}
            />
            <input
              type="number"
              className={`${styles.input} ${
                !isDarkMode ? styles.input_light : ""
              }`}
              max={2000}
              min={0}
              value={width}
              onChange={(e) => setWidth(parseInt(e.target.value))}
            />
            <input
              type="number"
              className={`${styles.input} ${
                !isDarkMode ? styles.input_light : ""
              }`}
              max={2000}
              min={0}
              value={height}
              onChange={(e) => setHeight(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div>
          <button className={styles.reload} onClick={handleReload}>
            Refresh
          </button>
        </div>
      </div>

      <div className={styles.player}>
        <Player
          {...playerProps}
          style={{
            background: "black",
          }}
        />
      </div>
    </div>
  );
};

export default WebsocketsPlayer;
