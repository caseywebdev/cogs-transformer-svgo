import { optimize } from 'svgo';

const { Buffer } = globalThis;

export default async ({ file: { buffer, path }, options }) => ({
  buffer: Buffer.from(optimize(buffer, { ...options, path }).data)
});
