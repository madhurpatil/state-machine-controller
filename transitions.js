import { STATES } from './states.js';

export const VALID_TRANSITIONS = {
    [STATES.START]: [
        STATES.TECHNICAL
    ],

    [STATES.TECHNICAL]: [
        STATES.FOLLOW_UP,
        STATES.END
    ],

    [STATES.FOLLOW_UP]: [
        STATES.TECHNICAL,
        STATES.END
    ],

    [STATES.END]: []
};