import { MANIFEST } from "@/constants/seo/manifest";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return MANIFEST;
}
