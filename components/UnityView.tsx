import Unity, { UnityContext } from "react-unity-webgl";
import { use100vh } from "react-div-100vh";

export default function UnityView() {
  const height = use100vh();

  const unityContext = new UnityContext({
    loaderUrl: "build/build.loader.js",
    dataUrl: "build/build.data",
    frameworkUrl: "build/build.framework.js",
    codeUrl: "build/build.wasm",
  });

  return (
    <>
      {process.browser && height && (
        <div style={{ height, width: "100%" }}>
          <Unity
            unityContext={unityContext}
            width="100%"
            height="100%"
            className="unity"
          />
          <style jsx>{`
            .unity {
              height: 100%;
              width: 100%;
            }
          `}</style>
        </div>
      )}
    </>
  );
}
