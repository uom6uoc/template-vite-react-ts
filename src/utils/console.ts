const initConsole = () => {
  const style = {
    color: 'skyblue',
    size: '24px',
  };

  console.info(
    `%c${__PACKAGE_NAME.toUpperCase()} - v${__PACKAGE_VERSION}`,
    `color:${style.color} ; font-size: ${style.size};`,
    `[${import.meta.env.MODE}]`
  );

  if (import.meta.env.MODE === 'prod') {
    console.log = () => undefined;
    console.warn = () => undefined;
    console.error = () => undefined;
  }
};

export default initConsole;
