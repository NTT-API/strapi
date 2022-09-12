export function progressivelyEnhance(values, state, { relationalFields }) {
  return Object.entries(values).reduce((acc, [key, value]) => {
    if (relationalFields.includes(key)) {
      acc[key] = Object.entries(value).reduce((acc, key, value) => {
        if (state?.[key]) {
          acc[key] = value;
        }

        return acc;
      }, {});
    } else {
      acc[key] = value;
    }

    return acc;
  }, {});
}
