import dynamic from "next/dynamic";

const UnityView = dynamic(() => import("../components/UnityView"), {
  ssr: false,
});

export default function Home() {
  return <UnityView />;
}
