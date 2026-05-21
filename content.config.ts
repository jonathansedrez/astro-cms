import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { s3Loader } from "astro-loader-s3";

const documents = defineCollection({
  loader: s3Loader({
    bucket: import.meta.env.S3_BUCKET,
    accessKeyId: import.meta.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.AWS_SECRET_ACCESS_KEY,
    region: import.meta.env.AWS_REGION,
  }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { documents };
