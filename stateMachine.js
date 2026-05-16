import { VALID_TRANSITIONS } from './transitions.js';
import { STATES } from './states.js';
import { Logger } from '../utils/logger.js';

export class StateMachine {

    constructor() {
        this.currentState = STATES.START;

        Logger.info(`Initial State: ${this.currentState}`);
    }

    getCurrentState() {
        return this.currentState;
    }

    canTransition(nextState) {
        const allowedTransitions =
            VALID_TRANSITIONS[this.currentState];

        return allowedTransitions.includes(nextState);
    }

    transition(nextState) {

        if (!Object.values(STATES).includes(nextState)) {
            throw new Error(
                `Unknown state: ${nextState}`
            );
        }

        if (!this.canTransition(nextState)) {

            throw new Error(
                `Invalid transition from ${this.currentState} → ${nextState}`
            );
        }

        Logger.success(
            `Transition: ${this.currentState} → ${nextState}`
        );

        this.currentState = nextState;
    }

    reset() {
        this.currentState = STATES.START;

        Logger.info('State machine reset to START');
    }
}