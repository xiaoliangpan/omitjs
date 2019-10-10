import Omit from '../index';

const omit: Omit = (obj, fields) => {
    const shallowCopy = {
        ...obj,
    };
    for (let i = 0; i < fields.length; i++) {
        const key = fields[i];
        delete shallowCopy[key];
    }
    return shallowCopy;
};

export default omit;

