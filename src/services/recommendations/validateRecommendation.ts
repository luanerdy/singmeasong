const validateRecommendation = (name: string, youtubeLink: string) => {
    const validations =
			typeof name !== 'string' ||
			typeof youtubeLink !== 'string' ||
			!youtubeLink.includes('youtu') ||
			!youtubeLink.includes('https://');

    return validations ? false : true;
};

export { validateRecommendation };
