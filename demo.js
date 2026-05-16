import controller from './app.js';

try {

    console.log('\n');

    console.log(
        controller.processMessage(
            'Hello interviewer'
        )
    );

    console.log('\n');

    console.log(
        controller.processMessage(
            'What is Node.js event loop?'
        )
    );

    console.log('\n');

    console.log(
        controller.processMessage(
            'It handles async operations'
        )
    );

    console.log('\n');

    console.log(
        controller.processMessage(
            'finish'
        )
    );

    console.log('\n');

    console.log(
        controller.processMessage(
            'Can we continue?'
        )
    );

} catch (error) {

    console.error(
        `Application Error: ${error.message}`
    );
}