import Unity, { UnityContext } from "react-unity-webgl";

export default function UnityView() {
  const unityContext = new UnityContext({
    loaderUrl: "build/build.loader.js",
    dataUrl: "build/build.data",
    frameworkUrl: "build/build.framework.js",
    codeUrl: "build/build.wasm",
  });

  return <Unity unityContext={unityContext} />;
}
