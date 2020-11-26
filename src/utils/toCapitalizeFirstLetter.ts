const toCapitalizeFirstLetter = (someString: string) => {
  const result = someString.length !== 0
    ? `${someString[0].toUpperCase()}${someString.slice(1).toLowerCase()}`
    : '';
  return result;
}

export default toCapitalizeFirstLetter;
