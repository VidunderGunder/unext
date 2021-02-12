import dynamic from "next/dynamic";
import UnityView from "components/UnityView";

// const UnityView = dynamic(() => import("../components/UnityView"), {
//   ssr: false,
// });

export default function Home() {
  return <UnityView />;
}
