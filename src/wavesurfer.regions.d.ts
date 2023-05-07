declare module 'wavesurfer.js/dist/plugin/wavesurfer.regions.min' {
    import WaveSurfer from 'wavesurfer.js';
  
    interface RegionsPluginParams {
      regions?: WaveSurfer.RegionOptions[];
      dragSelection?: {
        slop?: number;
        color?: string;
      };
      drag?: {
        threshold?: number;
        distance?: number;
        showTime?: boolean;
        opacity?: number;
      };
      resize?: boolean | {
        borderSize?: number;
        displayInside?: boolean;
      };
      color?: string;
      minLength?: number;
      maxLength?: number;
      _minLength?: number;
      _maxLength?: number;
      loopSelection?: boolean;
      dragSelectionFlag?: boolean;
      singleRegion?: boolean;
      regionsMinLength?: number;
      regionCls?: string;
      scroll?: boolean;
    }
  
    export default class RegionsPlugin {
      constructor(params: RegionsPluginParams);
      static create(params: RegionsPluginParams): WaveSurfer.PluginDefinition;
    }
  }
  