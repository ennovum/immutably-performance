function printResults(results) {
    const best = results.reduce((best, result) => {
        if (!best) best = result;
        if (best.time > result.time) best = result;
        return best;
    }, null);
    
    const printed = results.reduce((printed, result) => {
        const {label, time} = result;
        const ratio = Math.round(time / best.time * 100) / 100;
        printed += `${label} / ${time}ms / x${ratio}\n`;
        return printed;
    }, '');
    
    return printed;
}

export {printResults};
