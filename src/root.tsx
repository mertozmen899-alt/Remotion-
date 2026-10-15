import React from 'react';
import {Composition} from 'remotion';
import {Promo} from './promo';

export const Root: React.FC = () => <Composition id="Promo" component={Promo} durationInFrames={150} fps={30} width={1920} height={1080} />;
