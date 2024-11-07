import { luma } from '@luma.gl/core';
import { WebGPUDevice } from '@luma.gl/webgpu';

luma.registerDevices([WebGPUDevice]);
const device = await luma.createDevice({
  type: 'webgpu',
});

console.log(device);