const changeSplitName = arr => {
    return arr.reduce((res, str, ind) => {
        return ind <= 0 ? [ str ] : ind >= arr.length - 1 
            ? [ ...res, str ] : [ `${res}.${str}` ] ;
    }, []);
};

const correctViewName = arr => {
    return arr.reduce((res, str, ind) => {
        const corrStr = str.length > 6 ? `${str.slice(0, 7)}...` : str ;
        return ind <= 0 ? corrStr : `${res} .${str}` ;
    }, '');
};

export { changeSplitName, correctViewName };