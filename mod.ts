// Referencing the default lib web api typings
import module from "./index.ts";

export const AudioContext: (typeof globalThis)["AudioContext"] =
  module.AudioContext;
export const OfflineAudioContext: typeof globalThis.OfflineAudioContext =
  module.OfflineAudioContext;
export const AudioBuffer: typeof globalThis.AudioBuffer = module.AudioBuffer;
export const GainNode: typeof globalThis.GainNode = module.GainNode;
export const PeriodicWave: typeof globalThis.PeriodicWave = module.PeriodicWave;
export const MediaStreamAudioSourceNode: typeof globalThis.MediaStreamAudioSourceNode =
  module.MediaStreamAudioSourceNode;
export const AnalyserNode: typeof globalThis.AnalyserNode = module.AnalyserNode;
export const AudioBufferSourceNode: typeof globalThis.AudioBufferSourceNode =
  module.AudioBufferSourceNode;
export const BiquadFilterNode: typeof globalThis.BiquadFilterNode =
  module.BiquadFilterNode;
export const ChannelMergerNode: typeof globalThis.ChannelMergerNode =
  module.ChannelMergerNode;
export const ChannelSplitterNode: typeof globalThis.ChannelSplitterNode =
  module.ChannelSplitterNode;
export const ConstantSourceNode: typeof globalThis.ConstantSourceNode =
  module.ConstantSourceNode;
export const ConvolverNode: typeof globalThis.ConvolverNode =
  module.ConvolverNode;
export const DelayNode: typeof globalThis.DelayNode = module.DelayNode;
export const DynamicsCompressorNode: typeof globalThis.DynamicsCompressorNode =
  module.DynamicsCompressorNode;
export const IIRFilterNode: typeof globalThis.IIRFilterNode =
  module.IIRFilterNode;
export const OscillatorNode: typeof globalThis.OscillatorNode =
  module.OscillatorNode;
export const PannerNode: typeof globalThis.PannerNode = module.PannerNode;
export const StereoPannerNode: typeof globalThis.StereoPannerNode =
  module.StereoPannerNode;
export const WaveShaperNode: typeof globalThis.WaveShaperNode =
  module.WaveShaperNode;
