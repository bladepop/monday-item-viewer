import { useMemo } from 'react';

const WORDS_PER_MINUTE = 150;

const useReadTime = (string) => useMemo(() => {
    const wordCount = string.split(' ').length;
    const readTimeInMinutes = Math.ceil(wordCount / WORDS_PER_MINUTE);
    return readTimeInMinutes;
}, [string]);

export default useReadTime;