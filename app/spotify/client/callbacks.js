import { callbacks } from '../../callbacks/client';
import { Spotify } from '../lib/spotify';

callbacks.add('beforeSaveMessage', Spotify.transform, callbacks.priority.LOW, 'spotify-save');
callbacks.add('renderMessage', Spotify.render, callbacks.priority.MEDIUM, 'spotify-render');
