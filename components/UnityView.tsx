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
    <div style={{ height }}>
      <Unity unityContext={unityContext} width="100%" height="100%" />
    </div>
  );
}
