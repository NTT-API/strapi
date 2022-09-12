export function progressivelyEnhance(values, state, { relationalFields }) {
  return Object.entries(values).reduce((acc, [key, value]) => {
    if (relationalFields.includes(key)) {
      acc[key] = {
        ...value,
        ...(state?.[key] ?? {}),
      };
    } else {
      acc[key] = value;
    }

    return acc;
  }, {});
}
