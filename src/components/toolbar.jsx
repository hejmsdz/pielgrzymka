import IconDark from "../images/dark.svg";
import IconLight from "../images/light.svg";
import IconZoomIn from "../images/zoom_in.svg";
import IconZoomOut from "../images/zoom_out.svg";
// import IconDone from "../images/done.svg";
// import IconOffline from "../images/offline.svg";
// import IconLoading from "../images/loading.svg";

export default () => (
  <div className="toolbar">
    <button type="button" id="themeSwitch">
      <div className="iconLight">
        <IconLight />
      </div>
      <div className="iconDark">
        <IconDark />
      </div>
    </button>
    <button type="button" id="zoomIn">
      <IconZoomIn />
    </button>
    <button type="button" id="zoomOut">
      <IconZoomOut />
    </button>
  </div>
);
