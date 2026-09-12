import { Composition } from "remotion";
import { HiOmar } from "./HiOmar";

export const MyComposition = () => {
  return (
    <Composition
      id="HiOmar"
      component={HiOmar}
      durationInFrames={90}
      fps={30}
      width={1280}
      height={720}
    />
  );
};
