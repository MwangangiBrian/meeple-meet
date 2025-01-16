import redis from "@/db/redis";
import { Ratelimit } from "@upstash/ratelimit";

// Ratelimiter, that allows 10 requests per 10 seconds
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(10, "10 s"),
  analytics: true,

  prefix: "@upstash/ratelimit",
});


export default ratelimit