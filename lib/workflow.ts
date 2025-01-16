import { Client as WorkFlowClient } from '@upstash/workflow';
import { config } from '@/lib/config';

export const workFlowClient = new WorkFlowClient({
  baseUrl: config.env.upstash.qStashUrl,
  token: config.env.upstash.qStashToken,
});
