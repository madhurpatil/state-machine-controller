import { StateMachine } from '../states/stateMachine.js';
import { STATES } from '../states/states.js';
import { Logger } from '../utils/logger.js';

export class ConversationController {

    constructor() {
        this.stateMachine = new StateMachine();
    }

    processMessage(message) {

        const currentState =
            this.stateMachine.getCurrentState();

        Logger.info(
            `Processing message in state: ${currentState}`
        );

        switch (currentState) {

            case STATES.START:
                return this.handleStart(message);

            case STATES.TECHNICAL:
                return this.handleTechnical(message);

            case STATES.FOLLOW_UP:
                return this.handleFollowUp(message);

            case STATES.END:
                return this.handleEnd();

            default:
                throw new Error(
                    'Unhandled conversation state'
                );
        }
    }

    handleStart(message) {

        Logger.info(`User: ${message}`);

        this.stateMachine.transition(
            STATES.TECHNICAL
        );

        return 'Welcome to the technical interview round.';
    }

    handleTechnical(message) {

        Logger.info(`Technical Input: ${message}`);

        if (message.includes('?')) {

            this.stateMachine.transition(
                STATES.FOLLOW_UP
            );

            return 'Follow-up question detected.';
        }

        if (message.toLowerCase() === 'finish') {

            this.stateMachine.transition(
                STATES.END
            );

            return 'Interview ended successfully.';
        }

        return 'Technical discussion continues.';
    }

    handleFollowUp(message) {

        Logger.info(`Follow-up Input: ${message}`);

        if (message.toLowerCase() === 'finish') {

            this.stateMachine.transition(
                STATES.END
            );

            return 'Conversation completed.';
        }

        this.stateMachine.transition(
            STATES.TECHNICAL
        );

        return 'Returning to technical discussion.';
    }

    handleEnd() {
        return 'Conversation already ended.';
    }
}