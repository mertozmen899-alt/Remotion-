import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const Promo: React.FC = () => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const opacity = interpolate(frame, [0, 20, durationInFrames - 20, durationInFrames], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const scale = interpolate(frame, [0, durationInFrames], [0.9, 1.08]);
  return <AbsoluteFill style={{background: 'linear-gradient(135deg, #0b1021, #273b73)', color: '#fff', justifyContent: 'center', alignItems: 'center', fontFamily: 'Arial, sans-serif'}}><div style={{opacity, transform: `scale(${scale})`, textAlign: 'center'}}><div style={{fontSize: 110, fontWeight: 800}}>REMOTION STUDIO</div><div style={{fontSize: 42, marginTop: 30}}>Your next video starts here</div></div></AbsoluteFill>;
};
