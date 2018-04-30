declare namespace jest {
    interface Matchers<R> {
        /**
         * Custom matcher to match the string inside a <Text> component
         *
         * @param expected expected string to match
         */
        toMatchText: (expected: string) => void;
    }
}


const toMatchText = (received, argument) => {
    const text = received.prop("children");
    const pass = text == argument;
    return {
        message: () => pass
            ? `\"${text}\" string matches the expected string \"${argument}\".`
            : `Expected \"${argument}\", but received \"${text}\".`,
        pass,
    };
};

expect.extend({ toMatchText });