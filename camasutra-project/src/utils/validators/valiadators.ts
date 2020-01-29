export const required = (value: string): undefined | string => {
    if(value) return undefined;
    return 'Field is required';
};

export const maxLengthCreator = (maxLength: number) => (value: string): string | undefined => {
    if(value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
};

