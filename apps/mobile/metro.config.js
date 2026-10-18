import { getDefaultConfig } from "expo/metro-config";
import { withNativeWind } from "nativewind/metro";

const config = getDefaultConfig(process.cwd());

export default withNativeWind(config, { input: "./src/app/global.css" });
