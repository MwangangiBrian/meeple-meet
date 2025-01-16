export const config = {
  env: {
    imagekit: {
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
      publicKey: process.env.EXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
    },
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    databaseUrl: process.env.DATABASE_URL!,
    upstash: {
      redisUrl: process.env.UPSTASH_REDIS_URL!,
      redisToken: process.env.UPSTASH_REDIS_TOKEN!,
      qStashUrl: process.env.QSTASH_URL!,
      qStashToken: process.env.QSTASH_TOKEN!,
    },
  },
};
